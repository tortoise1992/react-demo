import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import CommentInput from './components/commentInput.js'
import CommentList from './components/commentList.js'

import './index.css'
class App extends Component {
    constructor () {
        super ()
        this.state={
            comments:[]
        }
    }
    render () {
        return (
            <div className="wrapper">
                <CommentInput onSubmit={this.handle.bind(this)}/>
                <CommentList comments={this.state.comments}/>
            </div>
        )
    }
    handle (comment) {
        this.state.comments.push(comment);
        this.setState({
            comments:this.state.comments
        })
    }
}





ReactDOM.render(
  <App/>,
  document.getElementById('root')
)