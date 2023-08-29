// import { Select } from 'antd';
import cls from './MainFilters.module.scss';
import { type PropsWithChildren } from 'react';
import { categoriesAndTags, platforms, sortBy } from '../consts/options';
import { GameFilter } from 'entities/GameFilters';

interface GameFiltersProps {
    platform: string
    sort: string
    category: string
    onChangeCategory: (cat: string) => void
    onChangePlatform: (pl: string) => void
    onChangeSortby: (sort: string) => void
}

export function MainFilters(props: PropsWithChildren<GameFiltersProps>) {
    const { platform, sort, category, onChangeCategory, onChangePlatform, onChangeSortby } = props;

 return (
     <div className={cls.MainFilters}>
        <GameFilter
            name="Genre/Tag:"
            options={categoriesAndTags}
            value={category}
            onChange={onChangeCategory}
        />
        <GameFilter
            name="Platform:"
            options={platforms}
            value={platform}
            onChange={onChangePlatform}
        />
        <GameFilter
            name="Sort by:"
            options={sortBy}
            value={sort}
            onChange={onChangeSortby}
        />
        {/* <Select
            style={{ width: 120 }}
            options={categoriesAndTags}
            value={category}
            dropdownStyle={
                {
                    backgroundColor: "#8d8d8d"
                }
            }
            onChange={handleChangeCategory}
         />
        <Select
            style={{ width: 120 }}
            options={platforms}
            value={platform}
            dropdownStyle={
                {
                    backgroundColor: "#8d8d8d"
                }
            }
            onChange={handleChangePlatform}
         />
         <Select
            style={{ width: 120 }}
            options={sortBy}
            value={sort}
            dropdownStyle={
                {
                    backgroundColor: "#8d8d8d"
                }
            }
            onChange={handleChangeSortby}
        /> */}
    </div>
 );
}

