import { useDispatch } from "react-redux";
import cls from "./MainPage.module.scss"
import { MainContent } from 'widgets/MainContent';
import { Page } from "widgets/Page";
import { useCallback } from "react";
import { mainContentActions } from "widgets/MainContent";

function MainPage() {
    const dispatch: any = useDispatch()

    const onLoadNext = useCallback(() => {
        console.log("load")
            dispatch(mainContentActions.setPage())
            dispatch(mainContentActions.setDataList())
    }, [dispatch])

    return (
        <div className={cls.pageWrapper}>
            <div className={cls.row}>
                <h1 className={cls.title}>Top Free Open World Games for PC and Browser In 2023!</h1>
                <Page onScroll={onLoadNext}>
                    <MainContent />
                </Page>
            </div>  
        </div>
    );
    
}

export default MainPage