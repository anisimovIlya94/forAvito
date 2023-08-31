import { Select } from 'antd';
import { type PropsWithChildren } from 'react';

interface GameFilterProps<T> {
    options: { label: string, value: string }[]
    value: T
    name: string
    onChange: (value: T) => void
}

export function GameFilter<T>(props: PropsWithChildren<GameFilterProps<T>>) {
    const { options, value, onChange, name  } = props;

    return (
        <div>
            <span>{name}</span>
            <Select
            style={{ width: 120 }}
            options={options}
            value={value}
            dropdownStyle={
                {
                    backgroundColor: "#8d8d8d"
                }
            }
         onChange={onChange}
         />
        </div>
        
 );
}

