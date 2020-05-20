import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import { toggleProj } from '../actions/creators'
import { ActionTypes } from '../actions/actions'
import ProjTreeElement from '../components/ProjTree'
import { GlobalState, VisibilityState } from '../reducers/states'
import {Project, VisibilityFilters} from "../actions/constants";


const getVisibleProjects = (projs: Project[], visState: VisibilityState) => {
    switch (visState.visibility) {
        case VisibilityFilters.All:
            return projs
        case VisibilityFilters.Active:
            return projs.filter(t => !t.done)
        case VisibilityFilters.Done:
            return projs.filter(t => t.done)
    }
}


const mapStateToProps = (state: GlobalState) => {
    return getVisibleProjects(state.projState.projects, state.visibState)
}


const mapDispatchToProps = (dispatch: Dispatch<ActionTypes>) => {
    return {
        onChange: (id: number) => dispatch(toggleProj(id))
    }
}

const VisibleProjects = connect(mapStateToProps, mapDispatchToProps)(ProjTreeElement)

export default VisibleProjects