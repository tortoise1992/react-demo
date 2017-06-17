import React,{Component,PropTypes} from 'react';
import ReactDOM from 'react-dom';
import Header from './redux/header.js'
import Content from './redux/content.js'
import Theme from './redux/themeSwitch.js'

import {createStore } from 'redux'
import {Provider} from 'react-redux'

const themeReducer=(state,action) =>{
    if(!state){
        return {
            themeColor:'#ff0000'
        }
    }
    switch(action.type){
        case 'CHANGE_COLOR':
            return {
                ...state,
                themeColor:action.themeColor
            }
        default:
            return state;
    }
}
const store=createStore(themeReducer);
// console.log(store)
console.log(store)
class App extends Component {    
    render (){
        return (
            <div>
                <Header/>
                <Content/>
                <Theme/>
            </div>
        )
    }
}

ReactDOM.render(
    <Provider  store={store}>
        <App/>
    </Provider>
 ,
  document.getElementById('root')
)