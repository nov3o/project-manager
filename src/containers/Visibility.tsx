import { connect, useDispatch } from 'react-redux'
import { Dispatch } from 'redux'
import { VisibilityState } from '../reducers/states'
import { VisibilityProps, VisibilityElement } from "../components/Visibility";
import { filter } from "../actions/creators";
import { ActionTypes } from '../actions/actions'


const mapStateToProps = (state: VisibilityState, ownProps: VisibilityProps) => {
    return {
        active: ownProps.filter === state.visibility,
    }
}


const dispatch = useDispatch();

const mapDispatchToProps = (dispatch: Dispatch<ActionTypes>, ownProps: VisibilityProps) => {
    return {
        onClick: () => dispatch(filter((ownProps.filter)))
    }
}

const FilterLink = connect(mapStateToProps, mapDispatchToProps)(VisibilityElement)

export default FilterLink