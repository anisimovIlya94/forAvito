import cls from "./PageError.module.scss"

import type { PropsWithChildren } from "react"
import { Button } from "shared/ui/Button"

interface PageErrorProps {
 className?: string;
}

const reload = () => {
	window.location.reload()
}

export function PageError(props: PropsWithChildren<PageErrorProps>) {
	return (
		<div className={cls.PageError}>
			<p>Произошла непредвиденная ошибка</p>
			<Button onClick={reload}>Обновить страницу</Button>
		</div>
	)
}