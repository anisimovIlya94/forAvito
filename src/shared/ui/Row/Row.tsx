import { Col, Row } from 'antd';
import cls from './Row.module.scss';

import type { PropsWithChildren } from 'react';
import { Gutter } from 'antd/es/grid/row';

interface RowItemsProps{
    title: string
    sub: string
}

interface RowProps {
    items: RowItemsProps[]
    gutter?: Gutter | [Gutter, Gutter]
    size?: number
}

export function CustomRow(props: PropsWithChildren<RowProps>) {
 const { gutter = [16, 24], items, size = 6 } = props;

    return (
        <Row className={cls.Row} gutter={gutter}>
            {items.map(({title, sub}) => {
                return (
                    <Col className="gutter-row" span={size}>
                        <div>
                            <p className={cls.colTitle}>{title}</p>
                            <p>{sub}</p>
                        </div>
                    </Col>
                )
            })}
        </Row>
 );
}