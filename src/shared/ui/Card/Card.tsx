import { Card } from 'antd';
import cls from './Card.module.scss';

import type { PropsWithChildren, ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';
import { Skeleton } from '../Skeleton';
import { AppImage } from '../AppImage/AppImage';

interface CardProps {
    children: ReactNode
    src: string
    width?: number
    isLoading: boolean
}

export function CustomCard(props: PropsWithChildren<CardProps>) {
    const { width = 300, src, children, isLoading } = props;

    return (
        <Card
            className={cls.Card}
            style={{ width }}
            cover={
            <div className={cls.imageWrapper}>
                <div className={cls.phone}></div>
                    {isLoading
                        ? <Skeleton border='5px' width={"100%"} height={"140px"}/>
                        : <AppImage
                            className={cls.image}
                            alt="example"
                            src={src}
                            fallback={<Skeleton border='5px' width={"100%"} height={140}/>}
                        />
                    //     <img
                    //         className={cls.image}
                    //         alt="example"
                    //         src={src}
                    // />
                    }
                    </div>
            }
        >
            {children}
        </Card>
    );
}