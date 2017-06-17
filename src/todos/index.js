import React,{Component,PropTypes} from 'react'
import ReactDOM from 'react-dom'
import Input from './input.js'
import List from './list.js'
import './todo.css'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import reducer from './reducer.js'
class App extends Component {    
    render () {
        return (
            <div className="todo-wrapper">
                <Input />
                <List />
            </div>
        )
    }
}


const store=createStore(reducer)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    ,
    document.getElementById('root')
)