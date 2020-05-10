import React, { FunctionComponent } from 'react';


interface ProjectProps {
    // onChange: () => void,
    text: string,
    done: boolean,
    creationDate: Date,
    // expireDate: Date,
    doneDate: Date
}


export function ProjElement(props: ProjectProps): JSX.Element {
    return (
        <li>
            <p title={'Creation date: ' + props.creationDate + '&#013;Done date: ' + props.doneDate}>
                <input
                    type="checkbox"
                    defaultChecked={props.done}
                    // onChange={(_e) => props.onChange}
                ></input>
                <span>{props.text}</span>
                {/*<span>{props.expireDate}</span>*/}
            </p>
            <ul>
            </ul>
        </li>
    )
}