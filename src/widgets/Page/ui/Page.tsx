import { useInfiniteScroll } from 'shared/lib/hooks/useInfiniteScroll';
import cls from './Page.module.scss';

import { useRef, type PropsWithChildren, type ReactNode, MutableRefObject } from 'react';

interface PageProps{
    children: ReactNode
    onScroll?: () => void
  }

export function Page(props: PropsWithChildren<PageProps>) {
  const {
    children,
    onScroll
  } = props;

    const triggerRef = useRef() as MutableRefObject<HTMLDivElement>
    const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>
    
    useInfiniteScroll({ triggerRef, wrapperRef, callback: onScroll })

    return (
        <main ref={wrapperRef} className={cls.page}>
		    {children}
          <div className={cls.trigger} ref={triggerRef} />
	    </main>
    );
}