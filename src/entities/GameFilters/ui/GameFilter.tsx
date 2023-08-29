import { Select } from 'antd';
import { type PropsWithChildren } from 'react';

interface GameFilterProps {
    options: { label: string, value: string }[]
    value: string
    name: string
    onChange: (value: string) => void
}

export function GameFilter(props: PropsWithChildren<GameFilterProps>) {
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

