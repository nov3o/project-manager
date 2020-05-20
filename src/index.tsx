import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { rootReducer } from './reducers/reducers'
import App from './components/App'

const store = createStore(rootReducer)

render(
    <Provider store={store}>
        <App />
    </Provider>,
    // <h1>This is text</h1>,
    document.getElementById('root')
)