import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import Header from './redux/header.js'
import Content from './redux/content.js'
import Theme from './redux/themeSwitch.js'
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
  <App/>,
  document.getElementById('root')
)