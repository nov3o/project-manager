import React, { FunctionComponent } from 'react';
import { VisibilityFilters } from '../actions/constants'


export interface VisibilityProps {
    onChange: () => void,
    filter: VisibilityFilters,
}


export function VisibilityElement(props: VisibilityProps): JSX.Element {
    const options: JSX.Element[] = [];

    for( let i of Object.keys(VisibilityFilters)){
        options.push(
            <option value={Number(i)} {...Number(props.filter) == Number(i) ? 'selected' : null}>
                {VisibilityFilters[Number(i)]}
            </option>
        );
    }

    return (
        <select id="filters" name="filters">
            {options}
        </select>
    )
}