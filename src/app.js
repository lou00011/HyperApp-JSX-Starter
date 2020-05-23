import {h , app} from 'hyperapp'

// importing components
import View from './view'
// import State from './state'
// import Action from './action'

app({
    state: {},
    view: state => <View />,
    node: document.getElementById('app')
})
