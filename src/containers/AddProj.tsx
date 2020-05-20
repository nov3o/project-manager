import React from 'react'
import { connect } from 'react-redux'
import { addProj } from '../actions/creators'
import { Dispatch } from "redux";

function AddProjFunc(dispatch: Dispatch): JSX.Element {
    var input: HTMLInputElement;

    return (
        <div>
            <form
                onSubmit={e => {
                    e.preventDefault()
                    if (!input.value.trim()) {
                        return
                    }
                    dispatch(addProj(input.value))
                    input.value = ''
                }}
            >
                <input
                    ref={(node: HTMLInputElement) => {
                        input = node
                    }}
                />
                <button type="submit">Add Project</button>
            </form>
        </div>
    )
}
var AddProj = connect()(AddProjFunc)

export default AddProj