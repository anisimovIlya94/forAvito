import { MainFilters } from 'features/mainFilters';
import cls from './MainContent.module.scss';

import { useEffect, type PropsWithChildren } from 'react';
import { useNavigate } from 'react-router-dom';
import { Col, Row } from 'antd';
import { GameCard } from 'entities/GameCard';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGamesList } from '../model/services/fetchGamesList';
import { getGamesList } from '../model/selectors/mainContentSelectors';

interface MainContentProps {
    className?: string;
}

export function MainContent(props: PropsWithChildren<MainContentProps>) {
    const { className } = props;
    const dispatch: any = useDispatch()
    useEffect(() => {
        dispatch(fetchGamesList())
    }, [])
    const navigate = useNavigate()
    const data = useSelector(getGamesList)
    if (!data) {
        return "Loading..."
    }
    const handleGoToGame = (id: number) => {
        navigate(`/game/${id}`)
    }
    const handleChangeSort = (sort: string) => {

    }
    const handleChangePlatform = (platform: string) => {

    }
    const handleChangeCategory = (category: string) => {

    }
    return (
        <div className={cls.MainContent}>
            <MainFilters
                    onChangeSortby={handleChangeSort}
                    onChangePlatform={handleChangePlatform}
                    onChangeCategory={handleChangeCategory}
                    platform='all'
                    sort='relevance'
                    category='all'
                />
            <Row className={cls.rowUp} gutter={[16, 24]}>
                {
                    data.map((item) => {
                        return (
                            <div onClick={() => handleGoToGame(item.id)} key={item.id}>
                                <Col className="gutter-row" span={6}>
                                    <GameCard data={item} key={item.id} />
                                </Col>
                            </div>
                            )
                        })
                }
        </Row>
</div>
 );
}