import {Project, Task, Themes, VisibilityFilters} from "../actions/constants";

export interface ProjectsState {
    projects: Project[];
}

export interface TasksState {
    tasks: Task[];
    projNum: number;
}

export var initialProjectsState: ProjectsState = { projects: [] };

export var initialTasksState: TasksState = { tasks: [], projNum: -1 };

export interface VisibilityState {
    visibility: VisibilityFilters;
}

export var initialVisibilityState = {
    visibility: VisibilityFilters.All
}

export interface ThemeState {
    theme: Themes;
}

export var initialThemeState = {
    theme: Themes.Light
}

export type AnyState = VisibilityState | ThemeState | TasksState | ProjectsState;

export interface GlobalState {
    themeState: ThemeState,
    projState: ProjectsState,
    visibState: VisibilityState
}

export var initialState: GlobalState = {
    themeState: initialThemeState,
    visibState: initialVisibilityState,
    projState: initialProjectsState
}