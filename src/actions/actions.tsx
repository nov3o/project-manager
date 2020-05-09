import {
    SWITCH_THEME, ADD_ITEM, TOGGLE_ITEM, VISIBILITY, VisibilityFilters, Themes, Item, ItemType
} from "./constants";


export interface AddItemPayload {
    text: string;
// itemId: number;
    type: ItemType;
}

export interface AddItemAction {
    type: typeof ADD_ITEM;
    payload: AddItemPayload;
}


export interface ToggleItemAction {
    type: typeof TOGGLE_ITEM;
    payload: number;
}


export interface FilterAction {
    type: typeof VISIBILITY;
    payload: VisibilityFilters;
}


export interface SwitchThemeAction {
    type: typeof SWITCH_THEME;
    payload: Themes;
}


export type ActionTypes = FilterAction | ToggleItemAction | AddItemAction | SwitchThemeAction;