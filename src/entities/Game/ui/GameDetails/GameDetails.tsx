import { Link, useParams } from 'react-router-dom';
import cls from './GameDetails.module.scss';
import { Carousel } from 'antd';
import { CustomRow } from 'shared/ui/Row/Row';
import { ContentBlock } from 'shared/ui/ContentBlock/ContentBlock';
import { useGame } from 'entities/Game/api/gameApi';
import BackButton from 'shared/ui/BackButton/BackButton';
import { AppImage } from 'shared/ui/AppImage/AppImage';
import { Skeleton } from 'shared/ui/Skeleton';
    
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

export function GameDetails() {
    const { id } = useParams<string>()
    console.log(id)
    const sameId = id || "1"
    const {
        data,
        isLoading
    } = useGame(sameId)

    // if (!data) {
    //     return null
    // }
    
    const ruReleaseDate = data?.release_date.split("-").reverse().join(".")
    
    const additional : AdditionalType[]  = [
        { title: AdditionalTitles.TITLE, sub: data?.title || ""},
        { title: AdditionalTitles.Release_Date, sub: ruReleaseDate || "" },
        { title: AdditionalTitles.Developer, sub: data?.developer || ""},
        { title: AdditionalTitles.Genre, sub: data?.genre || ""},
        { title: AdditionalTitles.Publisher, sub: data?.publisher || ""},
        { title: AdditionalTitles.Platform, sub: data?.platform || ""}
    ]

    const systemRequirements: SystemRequirementsType[] = [
        { title: SystemRequirementsTytles.OS, sub: data?.minimum_system_requirements?.os || "-" },
        { title: SystemRequirementsTytles.Memory, sub: data?.minimum_system_requirements?.memory || "-" },
        { title: SystemRequirementsTytles.Storage, sub: data?.minimum_system_requirements?.storage || "-" },
        { title: SystemRequirementsTytles.Processor, sub: data?.minimum_system_requirements?.processor || "-" },
        { title: SystemRequirementsTytles.Graphics, sub: data?.minimum_system_requirements?.graphics || "-" }
    ]

    let content

    if (isLoading) {
        content = (
            <>
                <div className={cls.fixedWrapper}>
                    <div className={cls.fixed}>
                        <Skeleton width={"100%"} height={200}/>
                        <BackButton/>
                    </div>
                </div>
                <div className={cls.skeletonInfo}>
                    <div className={cls.gameName}>
                        <Skeleton width={"100%"} height={30} mt='5px'/>
                    </div>
                    <Skeleton width={"80%"} height={20} mt='5px' />
                    <Skeleton width={"100%"} height={"80vh"} mt='15px'/>
                </div>
            </>
        )
    }
    else {
        if (data) {
            content = (
                <>
                 <div className={cls.fixedWrapper}>
                        <div className={cls.fixed}>
                            <AppImage
                                src={data.thumbnail}
                                alt="..."
                                className={cls.gameImage}
                                fallback={<Skeleton width={"100%"} height={"100%"}/>}
                            />
                            <div>
                                <Link className={cls.linkBtn} to={data.game_url}>Play now</Link>
                            </div>
                            <BackButton/>
                        </div>
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
                        <Carousel>
                            {data.screenshots.map(({id, image}) => {
                                return (
                                    <div key={id} >
                                        <AppImage
                                            className={cls.carouselImage}
                                            src={image}
                                            alt='...'
                                            fallback={<Skeleton width={"100%"} height={400}/>}
                                        />
                                    </div>)
                            })}
                        </Carousel>
                    </div>
                </ContentBlock>
                {data?.minimum_system_requirements && <ContentBlock title='Minimum System Requirements'>
                    <CustomRow gutter={[16, 24]} items={systemRequirements} size={8}/>
                </ContentBlock>}
                    </div>
                    
                    </>
            )
        } else {
            content = (
                <>
                    <h2>Ошибка при подгрузке игры. Попробуйте позже снова.</h2>
                    <BackButton />
                </>
            )
        }
        
    }

    return (
        <div className={cls.GameDetails}>
            {content}
        </div>
 );
}