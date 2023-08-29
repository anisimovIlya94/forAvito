import { useEffect, useState } from "react"
import { Button, ButtonTheme } from "shared/ui/Button"

export function BugButton() {
	const [error, setError] = useState(false)

	useEffect(() => {
		if (error) {
			throw new Error()
		}
	},[error])

	return (
		<Button theme={ButtonTheme.OUTLINE} onClick={()=>{setError(prev => !prev)}}>
			Создать ошибку
		</Button>
	)
}