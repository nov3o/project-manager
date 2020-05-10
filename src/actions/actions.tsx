import {
    SWITCH_THEME, ADD_PROJECT, ADD_TASK, TOGGLE_PROJECT, TOGGLE_TASK,
    VISIBILITY, VisibilityFilters, Themes, Project, Task
} from "./constants";


interface AddProjectAction {
    type: typeof ADD_PROJECT;
    payload: string;
}


interface AddTaskPayload {
    text: string;
    proj: number;
}

interface AddTaskAction {
    type: typeof ADD_TASK;
    payload: AddTaskPayload;
}


interface ToggleProjectAction {
    type: typeof TOGGLE_PROJECT;
    payload: number;
}


interface ToggleTaskPayload {
    proj: number;
    task: number;
}

interface ToggleTaskAction {
    type: typeof TOGGLE_TASK;
    payload: ToggleTaskPayload;
}


interface FilterAction {
    type: typeof VISIBILITY;
    payload: VisibilityFilters;
}


interface SwitchThemeAction {
    type: typeof SWITCH_THEME;
    payload: Themes;
}


export type ActionTypes = (
    AddProjectAction | AddTaskAction | ToggleProjectAction |
    ToggleTaskAction | FilterAction | SwitchThemeAction
    );