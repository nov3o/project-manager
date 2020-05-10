import { ActionTypes } from "./actions";
import { ADD_TASK, ADD_PROJECT, TOGGLE_TASK, TOGGLE_PROJECT, VISIBILITY, SWITCH_THEME, VisibilityFilters, Themes } from "./constants"


export  function addProj(text: string): ActionTypes {
    return {
        type: ADD_PROJECT,
        payload: text
    }
}

export function addTask(txt: string, projNum: number): ActionTypes {
    return {
        type: ADD_TASK,
        payload: {
            text: txt,
            proj: projNum
        }
    }
}

export function toggleProj(index: number): ActionTypes {
    return {
        type: TOGGLE_PROJECT,
        payload: index
    }
}

export function toggleTask(taskNum: number, projNum: number): ActionTypes {
    return {
        type: TOGGLE_TASK,
        payload: {
            task: taskNum,
            proj: projNum
        }
    }
}

export function switchTheme(theme: Themes): ActionTypes{
    return {
        type: SWITCH_THEME,
        payload: theme
    }
}

export function filter(filterOption: VisibilityFilters): ActionTypes{
    return {
        type: VISIBILITY,
        payload: filterOption
    }
}