export const ADD_PROJECT = 'ADD_PROJECT';
export const ADD_TASK = 'ADD_TASK';
export const TOGGLE_PROJECT = 'TOGGLE_PROJECT';
export const TOGGLE_TASK = 'TOGGLE_TASK';
export const VISIBILITY = 'VISIBILITY';
export const SWITCH_THEME = 'SWITCH_THEME';


export enum VisibilityFilters {
    All,
    Active,
    Done,
}

export enum Themes {
    Light,
    Dark,
}

export interface Project {
    onChange: () => void,
    text: string;
    done: boolean;
    creationDate: Date;
    // expireDate: Date;
    doneDate: Date;
}

export interface Task {
    text: string;
    done: boolean;
    creationDate: Date;
    // expireDate: Date;
    doneDate: Date;
}