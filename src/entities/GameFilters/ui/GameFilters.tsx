import { Select } from 'antd';
import cls from './GameFilters.module.scss';
import { useState, type PropsWithChildren } from 'react';

interface GameFiltersProps {
 className?: string;
}

export function GameFilters(props: PropsWithChildren<GameFiltersProps>) {
    // const { className } = props;
    const [category, setCategory] = useState("allGenres")
    const [platform, setPlatform] = useState("all")
    const [sortby, setSortby] = useState("relevance")
    const handleChangeCategory = (e: string) => {
        setCategory(e)
    }
    const handleChangePlatform = (e: string) => {
        setPlatform(e)
    }

    const handleChangeSortby = (e: string) => {
        setSortby(e)
    }

    const categoriesAndTags = [
        {value: "allGenres", label: "AllGenres"},
        {value: "mmorpg", label: "mmorpg"},
        {value: "shooter", label: "shooter"},
        {value: "strategy", label: "strategy"},
        {value: "moba", label: "moba"},
        {value: "racing", label: "racing"},
        {value: "sports", label: "sports"},
        {value: "social", label: "social"},
        {value: "sandbox", label: "sandbox"},
        {value: "open-world", label: "open-world"},
        {value: "survival", label: "survival"},
        {value: "pvp", label: "pvp"},
        {value: "pve", label: "pve"},
        {value: "pixel", label: "pixel"},
        {value: "voxel", label: "voxel"},
        {value: "zombie", label: "zombie"},
        {value: "turn-based", label: "turn-based"},
        {value: "first-person", label: "first-person"},
        {value: "third-Person", label: "third-Person"},
        {value: "top-down", label: "top-down"},
        {value: "tank", label: "tank"},
        {value: "space", label: "space"},
        {value: "sailing", label: "sailing"},
        {value: "side-scroller", label: "side-scroller"},
        {value: "superhero", label: "superhero"},
        {value: "permadeath", label: "permadeath"},
        {value: "card", label: "card"},
        {value: "battle-royale", label: "battle-royale"},
        {value: "mmo", label: "mmo"},
        {value: "mmofps", label: "mmofps"},
        {value: "mmotps", label: "mmotps"},
        {value: "3d", label: "3d"},
        {value: "2d", label: "2d"},
        {value: "anime", label: "anime"},
        {value: "fantasy", label: "fantasy"},
        {value: "sci-fi", label: "sci-fi"},
        {value: "fighting", label: "fighting"},
        {value: "action-rpg", label: "action-rpg"},
        {value: "action", label: "action"},
        {value: "military", label: "military"},
        {value: "martial-arts", label: "martial-arts"},
        {value: "flight", label: "flight"},
        {value: "low-spec", label: "low-spec"},
        {value: "tower-defense", label: "tower-defense"},
        {value: "horror", label: "horror"},
        {value: "mmorts", label: "mmorts"}
    ]

 return (
     <div className={cls.GameFilters}>
        <Select
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
            options={[
                { value: "pc", label: "PC" },
                {value: "browser", label: "Browser"},
                { value: "all", label: "All Platforms" }
            ]}
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
            options={[
                { value: "release - date", label: "Release date" },
                {value: "popularity", label: "Popularity"},
                { value: "alphabetical", label: "Alphabetical"},
                { value: "relevance", label: "Relevance"}
            ]}
            value={sortby}
            dropdownStyle={
                {
                    backgroundColor: "#8d8d8d"
                }
            }
            onChange={handleChangeSortby}
        />
    </div>
 );
}

