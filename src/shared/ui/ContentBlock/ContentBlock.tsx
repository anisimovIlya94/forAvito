import cls from './ContentBlock.module.scss';

import type { PropsWithChildren, ReactNode } from 'react';

interface ContentBlockProps {
    title: string;
    children: ReactNode
}

export function ContentBlock(props: PropsWithChildren<ContentBlockProps>) {
 const { title, children } = props;

 return (
    <div className={cls.TextBlock}>
         <h2 className={cls.textHead}>{title}</h2>
        {children}
    </div>
 );
}