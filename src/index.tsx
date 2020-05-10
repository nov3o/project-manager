// import { React } from 'react';
// // import { render } from 'react-dom';
// import App from './components/App';
import { rootReducer } from './reducers/reducers';
import { initialState } from './reducers/states';
// import { Provider } from 'react-redux';
import {createStore} from 'redux'
import {addProj, filter, switchTheme, toggleProj} from './actions/creators'
import {Themes, VisibilityFilters} from './actions/constants'

// const store = createStore(todoApp);
//
// render(
//   <Provider store={store}>
//       <App/>
//   </Provider>,
//   document.getElementById('root')
// );
//

const store = createStore(rootReducer)
// Log the initial state
console.log(store.getState())

// Every time the state changes, log it
// Note that subscribe() returns a function for unregistering the listener
const unsubscribe = store.subscribe(() => console.log(store.getState()))

// Dispatch some actions
store.dispatch(addProj('My very virst project'))
store.dispatch(addProj('My second project'))
store.dispatch(switchTheme(Themes.Dark))
store.dispatch(toggleProj(1))
store.dispatch(filter(VisibilityFilters.Active))

// Stop listening to state updates
// unsubscribe()