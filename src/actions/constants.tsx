export const ADD_ITEM = 'ADD_ITEM';
export const TOGGLE_ITEM = 'TOGGLE_ITEM';
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

export enum ItemType {
    Project,
    Task,
}

export interface Item {
    text: string;
// itemId: number;
    type: ItemType;
    done: boolean;
//  creationDate
//  expireDate
//  checkDate
}

