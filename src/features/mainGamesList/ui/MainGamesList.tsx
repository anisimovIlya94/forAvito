import { Card, Col, Row } from 'antd';
import cls from './MainGamesList.module.scss';

import type { PropsWithChildren } from 'react';
import { GameCard } from 'entities/GameCard';
import { GameCardTypes } from 'entities/GameCard/model/types/gameCard';
import { useNavigate } from 'react-router-dom';
import { CustomCard } from 'shared/ui/Card/Card';
import { Skeleton } from 'shared/ui/Skeleton';
import { Page } from 'widgets/Page/ui/Page';

interface MainGamesListProps {
    data?: GameCardTypes[]
    isLoading: boolean
}

export function MainGamesList(props: PropsWithChildren<MainGamesListProps>) {
    const { data = [], isLoading } = props;
    const navigate = useNavigate()
    const handleGoToGame = (id: number) => {
        navigate(`/game/${id}`)
    }
        let content
        if (isLoading) {
            content = Array(12).fill(0).map((item, index) => {
                    return (
                        <div key={index}>
                            <Col className="gutter-row" span={8}>
                                <CustomCard src='' width={250} isLoading={isLoading}>
                                    <div>
                                        <Skeleton  width={"50%"} height={20} />
                                        <Skeleton mt='15px' width={"80%"} height={20} />
                                        <div className={cls.flexWrapper}>
                                            <Skeleton width={"40%"} height={20} />
                                            <Skeleton width={"40%"} height={20} />
                                        </div>
                                        <div className={cls.skeletonFooter}>
                                            <Skeleton width={"50px"} border='5px' height={15}/>
                                            <Skeleton width={"50px"} border='5px' height={15}/>
                                        </div>
                                    </div>
                                </CustomCard>
                            </Col>
                        </div>
                        )
                    })
        } else {
            if (data.length) {
                content = data.map((item) => {
                    return (
                        <div onClick={() => handleGoToGame(item.id)} key={item.id}>
                            <Col className="gutter-row" span={6}>
                                <GameCard isLoading={isLoading} data={item} key={item.id} />
                            </Col>
                        </div>
                        )
                })
            }
            else {
                content = (<h2>Ошибка при подгрузке списка игр. Попробуйте позже снова.</h2>)
            }
    }
    
    return (
        // <Page onScroll={onScroll}>
            <Row className={cls.rowUp} gutter={[16, 24]}>
                {content}            
            </Row>
        // </Page>

        
 );
}