import { MainFilters } from 'features/mainFilters';
import cls from './MainContent.module.scss';
import { useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGamesList } from '../model/services/fetchGamesList';
import { getCategory, getDataList, getIsLoading, getPlatform, getSort } from '../model/selectors/mainContentSelectors';
import { MainGamesList } from 'features/mainGamesList';
import { mainContentActions } from '../model/slice/mainContentSlice';
import { PlatformField, SortField } from '../model/types/MainContentSchema';

export function MainContent() {
    const dispatch: any = useDispatch()

    useEffect(() => {
        dispatch(fetchGamesList())
    }, [])

    const data = useSelector(getDataList)
    const isLoading = useSelector(getIsLoading)
    const platform = useSelector(getPlatform)
    const sort = useSelector(getSort)
    const category = useSelector(getCategory)

    const handleChangeSort = (sort: SortField) => {
        dispatch(mainContentActions.setSort(sort))
        dispatch(fetchGamesList())
    }
    const handleChangePlatform = (platform: PlatformField) => {
        dispatch(mainContentActions.setPlatform(platform))
        dispatch(fetchGamesList())
    }
    const handleChangeCategory = (category: string) => {
        dispatch(mainContentActions.setCategory(category))
        dispatch(fetchGamesList())
    }

    return (
            <div className={cls.MainContent}>
                <MainFilters
                        onChangeSortby={handleChangeSort}
                        onChangePlatform={handleChangePlatform}
                        onChangeCategory={handleChangeCategory}
                        platform ={platform}
                        sort={sort}
                        category={category}
                />
                {data && <MainGamesList isLoading={isLoading} data={data} />}
            </div>
    );
}