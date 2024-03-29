import React, { FunctionComponent } from 'react';


export interface TaskProps {
    onChange: () => void,
    text: string,
    isdone: boolean,
    creationDate: Date,
    expireDate: Date,
    doneDate: Date
}

export const TaskElement: FunctionComponent<TaskProps> = (props: TaskProps) => (
    <li>
        <p>
            <input
                type="checkbox"
                defaultChecked={props.isdone}
                onChange={(_e) => props.onChange}
            ></input>
            <span>{props.text}</span>
        </p>
    </li>
)