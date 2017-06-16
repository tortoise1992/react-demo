import React,{Component,PropTypes} from 'react';
import ReactDOM from 'react-dom';
import Header from './redux/header.js'
import Content from './redux/content.js'
import Theme from './redux/themeSwitch.js'

function createStore(reducer){
    let state=null;
    const listeners=[];
    const subscribe=(listener) =>listeners.push(listener);
    const getState=() =>state;
    const dispatch=(action) =>{
        state=reducer(state,action);
        listeners.forEach((listener) =>listener());
    }
    dispatch({})
    return {
        getState,
        subscribe,
        dispatch
    }
}

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

class App extends Component {
    static childContextTypes={
        store:PropTypes.object
    }
    getChildContext (){
        return {
            store
        }
    }
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
  <App/>,
  document.getElementById('root')
)