import { Card } from 'antd';
import cls from './Card.module.scss';

import type { PropsWithChildren, ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';

interface CardProps {
    children: ReactNode
    src: string
    width?: number
}

export function CustomCard(props: PropsWithChildren<CardProps>) {
    const { width = 300, src, children } = props;
    
    const navigate = useNavigate()

    return (
        <Card
            className={cls.Card}
            onClick={() => navigate("/game/1")}
            style={{ width }}
            cover={
            <div className={cls.imageWrapper}>
                <div className={cls.phone}></div>
            <img
                className={cls.image}
                alt="example"
                src={src}
                    />
                    </div>
            }
        >
            {children}
        </Card>
    );
}