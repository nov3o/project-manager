import { ActionTypes }  from "../actions/actions"
import {
    ADD_ITEM, SWITCH_THEME, TOGGLE_ITEM, VISIBILITY, Item, VisibilityFilters, Themes
}  from "../actions/constants"


interface ItemsState {
    items: Item[];
}

var initialItemState: ItemsState  = { items: [] };

interface VisibilityState {
    visibility: VisibilityFilters;
}

var initialVisibilityState = {
    visibility: VisibilityFilters.All
}

interface ThemeState {
    theme: Themes;
}

var initialThemeState = {
    theme: Themes.Light
}


function filter (state = initialVisibilityState, action: ActionTypes): VisibilityState {
    switch (action.type) {
        case VISIBILITY:
            return {
                visibility: action.payload
            }
        default:
            return state
    }
}

function addItem (state = initialItemState, action: ActionTypes): ItemsState {
    switch (action.type) {
        case ADD_ITEM:
            return { items: [
                ...state.items,
                {
                    text: action.payload.text,
                    type: action.payload.type,
                    // itemId: action.payload.itemId,
                }
            ]}
        case TOGGLE_ITEM:
            return { items:
                    state.items.map((item, index) => {
                        if (index === action.payload.index) {
                            return Object.assign({}, todo, {
                                completed: !todo.completed
                            })
                        }
                    }
                    )
            }
        default:
            return state
    }
}

function changeTheme (state = initialThemeState, action: ActionTypes): ThemeState {
    switch (action.type) {
        case SWITCH_THEME:
            return {
                theme: action.payload
            }
        default:
            return state
    }
}