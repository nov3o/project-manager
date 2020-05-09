import { ActionTypes } from "./actions";
import { ADD_ITEM, ItemType, VisibilityFilters, VISIBILITY, TOGGLE_ITEM, SWITCH_THEME } from "./constants"


export function addItem(text: string, type: ItemType): ActionTypes {
    return {
        type: ADD_ITEM,
        payload: {
            text,
            type,
            // itemId
        }
    };
}

export function toggleItem(index: number): ActionTypes{
    return {
        type: TOGGLE_ITEM,
        payload: index
    }
}

export function switchTheme(themeNumber: number): ActionTypes{
    return {
        type: SWITCH_THEME,
        payload: themeNumber
    }
}

export function filter(filterOption: VisibilityFilters): ActionTypes{
    return {
        type: VISIBILITY,
        payload: filterOption
    }
}