import React, { FunctionComponent } from 'react';
import { Themes } from '../actions/constants'


export interface ThemeProps {
    onChange: () => void,
    theme: Themes,
}


export function ThemeElement(props: ThemeProps): JSX.Element {
    const options: JSX.Element[] = [];

    for( let i of Object.keys(Themes)){
        options.push(<option value={Number(i)} {...Number(props.theme) == Number(i) ? 'selected' : null}>{Themes[Number(i)]}</option>);
    }

    return (
        <select id="themes" name="themes">
            {options}
        </select>
    )
}