import { Link, useParams } from 'react-router-dom';
import cls from './GameDetails.module.scss';
import { Carousel } from 'antd';
import type { PropsWithChildren } from 'react';
import { CustomRow } from 'shared/ui/Row/Row';
import { ContentBlock } from 'shared/ui/ContentBlock/ContentBlock';
import { useGame } from 'entities/Game/api/gameApi';
import BackButton from 'shared/ui/BackButton/BackButton';

interface GameDetailsProps {
//  className?: string;
}
    
export enum AdditionalTitles{
    TITLE = "Title",
    Release_Date = "Release Date",
    Developer = "Developer",
    Genre = "Genre",
    Publisher = "Publisher",
    Platform = "Platform"
}

export enum SystemRequirementsTytles{
    OS = "OS",
    Memory = "Memory",
    Storage = "Storage",
    Processor = "Processor",
    Graphics = "Graphics"
}

export interface SystemRequirementsType{
    title: SystemRequirementsTytles
    sub: string
}

export interface AdditionalType {
    title: AdditionalTitles
    sub: string
}

export function GameDetails(props: PropsWithChildren<GameDetailsProps>) {
//  const { className } = props;
    const { id } = useParams<string>()
    console.log(id)
    const sameId = id || "1"
    const { data, isLoading } = useGame(sameId)

    if (!data) {
        return null
    }
    
    console.log(data)
    const onChange = (currentSlide: number) => {
        console.log(currentSlide);
    };
    
    const ruReleaseDate = data.release_date.split("-").reverse().join(".")
    
    const additional : AdditionalType[]  = [
        { title: AdditionalTitles.TITLE, sub: data.title },
        { title: AdditionalTitles.Release_Date, sub: ruReleaseDate },
        { title: AdditionalTitles.Developer, sub: data.developer },
        { title: AdditionalTitles.Genre, sub: data.genre },
        { title: AdditionalTitles.Publisher, sub: data.publisher },
        { title: AdditionalTitles.Platform, sub: data.platform }
    ]

    const systemRequirements: SystemRequirementsType[] = [
        { title: SystemRequirementsTytles.OS, sub: data?.minimum_system_requirements?.os || "-" },
        { title: SystemRequirementsTytles.Memory, sub: data?.minimum_system_requirements?.memory || "-" },
        { title: SystemRequirementsTytles.Storage, sub: data?.minimum_system_requirements?.storage || "-" },
        { title: SystemRequirementsTytles.Processor, sub: data?.minimum_system_requirements?.processor || "-" },
        { title: SystemRequirementsTytles.Graphics, sub: data?.minimum_system_requirements?.graphics || "-" }
    ]

    return (
        <div className={cls.GameDetails}>
                <div className={cls.fixed}>
                    <img className={cls.gameImage} src={data.thumbnail} alt="..." />
                    <div>
                        <Link className={cls.linkBtn} to={data.game_url}>Play now</Link>
                    </div>
                    <BackButton/>
                </div>
                <div className={cls.gameInfo}>
                    <h1 className={cls.gameName}>{data.title}</h1>
                    <ContentBlock title={`About ${data.title}`}>
                        <p className={cls.desc}>{data.description}</p>
                    </ContentBlock>
                    <ContentBlock title='Additional Information'>
                        <CustomRow gutter={[16, 24]} size={6} items={additional} />
                    </ContentBlock>
                    <ContentBlock title='Temtem Showdown Screenshots'>
                        <div className={cls.carousel}>
                            <Carousel afterChange={onChange}>
                                {data.screenshots.map(({id, image}) => {
                                    return <div key={id} ><img className={cls.carouselImage} src={image} alt='...'/></div>
                                })}
                            </Carousel>
                        </div>
                    </ContentBlock>
                    {data?.minimum_system_requirements && <ContentBlock title='Minimum System Requirements'>
                        <CustomRow gutter={[16, 24]} items={systemRequirements} size={8}/>
                    </ContentBlock>}
                </div>
        </div>
 );
}