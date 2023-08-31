import cls from './MainFilters.module.scss';
import { type PropsWithChildren } from 'react';
import { categoriesAndTags, platforms, sortBy } from '../consts/options';
import { GameFilter } from 'entities/GameFilters';
import { PlatformField, SortField } from 'widgets/MainContent';

interface GameFiltersProps {
    platform: PlatformField
    sort: SortField
    category: string
    onChangeCategory: (cat: string) => void
    onChangePlatform: (pl: PlatformField) => void
    onChangeSortby: (sort: SortField) => void
}

export function MainFilters(props: PropsWithChildren<GameFiltersProps>) {
    const {
        platform,
        sort,
        category,
        onChangeCategory,
        onChangePlatform,
        onChangeSortby
    } = props;

 return (
     <div className={cls.MainFilters}>
        <GameFilter<string>
            name="Genre/Tag:"
            options={categoriesAndTags}
            value={category}
            onChange={onChangeCategory}
        />
        <GameFilter<PlatformField>
            name="Platform:"
            options={platforms}
            value={platform}
            onChange={onChangePlatform}
        />
        <GameFilter<SortField>
            name="Sort by:"
            options={sortBy}
            value={sort}
            onChange={onChangeSortby}
        />
    </div>
 );
}

