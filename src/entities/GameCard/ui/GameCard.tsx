import { CustomCard } from 'shared/ui/Card/Card';
import cls from './GameCard.module.scss';
import type { PropsWithChildren } from 'react';

export interface DataInterface{
    thumbnail: string
    title: string
    release_date: string
    platform: string
    short_description: string
    publisher: string
    genre: string
}

interface GameCardProps{
    data: DataInterface;
    isLoading: boolean
}

export function GameCard(props: PropsWithChildren<GameCardProps>) {
    const { data, isLoading } = props;
    const ruReleaseDate = data.release_date.split("-").reverse().join(".")
    const platform = data.platform.startsWith("PC") ? "PC" : "Browser"
    const description = data.short_description.length > 29 ? data.short_description.slice(0, 26) + "..." : data.short_description
    const title = data.title.length > 17 ? data.title.slice(0, 14) + "..." : data.title

    return (
        <CustomCard isLoading={isLoading} src={data.thumbnail} width={250}>
            <div className={cls.flexWrapper}>
                <h2 className={cls.title}>{title}</h2>
                <span className={cls.free}>Free</span>
            </div>
            <p className={cls.description}>{description}</p>
            <div className={cls.releaseWrapper}>
                <p>{ruReleaseDate}</p>
            </div>
            <p className={cls.publisher}>{data.publisher}</p>
            <div className={cls.cardFooter}>
                <span className={cls.genre}>{data.genre}</span>
                <span className={cls.genre}>{platform}</span>
            </div>
        </CustomCard>
    )
}