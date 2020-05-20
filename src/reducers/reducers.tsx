import { combineReducers } from 'redux'

import {ActionTypes} from "../actions/actions"
import {
    ADD_PROJECT, ADD_TASK, SWITCH_THEME, TOGGLE_PROJECT, TOGGLE_TASK, VISIBILITY
} from "../actions/constants"
import {
    initialProjectsState,
    initialTasksState,
    initialThemeState,
    initialVisibilityState,
    ProjectsState,
    TasksState,
    ThemeState,
    VisibilityState,
} from "../reducers/states"


function visibilityReducer(state = initialVisibilityState, action: ActionTypes): VisibilityState {
    switch (action.type) {
        case VISIBILITY:
            return {
                visibility: action.payload
            }
        default:
            return state
    }
}

function projectsReducer(state = initialProjectsState, action: ActionTypes): ProjectsState {
    switch (action.type) {
        case ADD_PROJECT:
            return { projects: [
                ...state.projects,
                {
                    text: action.payload,
                    done: false,
                    creationDate: new Date(),
                    doneDate: new Date(0),
                    onChange: () => { return }
                }
            ]}
        case TOGGLE_PROJECT:
            return { projects:
                state.projects.map((proj, index) => {
                    if (index === action.payload) {
                        return Object.assign({}, proj, {
                            done: !proj.done,
                            text: proj.text,
                            creationDate: proj.creationDate,
                            doneDate: proj.doneDate
                        })
                    }
                    return Object.assign({}, proj, proj)
                })
            }
        default:
            return state
    }
}

function tasksReducer(state = initialTasksState, action: ActionTypes): TasksState {
    switch (action.type) {
        case ADD_TASK:
            return {
                tasks: [
                    ...state.tasks,
                    {
                        done: false,
                        creationDate: new Date(),
                        doneDate: new Date(0),
                        text: action.payload.text,
                    }
                ],
                projNum: action.payload.proj
            }
        case TOGGLE_TASK:
            return {
                tasks:
                    state.tasks.map((task, index) => {
                            if (index === action.payload.task) {
                                return Object.assign({}, task, {
                                    done: !task.done,
                                    text: task.text,
                                    creationDate: task.creationDate,
                                    doneDate: task.doneDate
                                })
                            }
                            return Object.assign({}, task, task)
                        }
                    ),
                // Probably, action.payload.proj should be removed
                projNum: state.projNum
            }
        default:
            return state
    }
}

function themeReducer(state: ThemeState = initialThemeState, action: ActionTypes): ThemeState {
    switch (action.type) {
        case SWITCH_THEME:
            return {
                theme: action.payload
            }
        default:
            return state
    }
}


export const rootReducer = combineReducers({
    visibility: visibilityReducer,
    projects: projectsReducer,
    theme: themeReducer
})

export type RootState = ReturnType<typeof rootReducer>