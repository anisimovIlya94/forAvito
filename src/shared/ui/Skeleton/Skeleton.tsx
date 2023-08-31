import { CSSProperties, FC } from "react"
import cls from "./Skeleton.module.scss"

interface SkeletonProps {
  width: string | number
  height: string | number
	border?: string
	mt?: string
}

export const Skeleton: FC<SkeletonProps> = (props) => {
	const { width, height, border, mt } = props
	const styles: CSSProperties = {
		width,
		height,
		borderRadius: border,
		marginTop: mt
	}

	return <div style={styles} className={cls.skeleton}>

	</div>
}
