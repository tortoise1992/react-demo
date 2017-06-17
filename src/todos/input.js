import React,{Component,PropTypes} from 'react'
import {connect} from 'react-redux'
import {addTodo} from './reducer.js'

class Input extends Component {
    constructor (){
        super()
        this.state={
            input:''
        }
    }
    render (){
        return (
            <div className='input-wrapper'>
                <input type="text" value={this.state.input} onChange={this.handleInput.bind(this)}/>
                <button onClick={this.handleClickAdd.bind(this)}>添加</button>
            </div>
        )
    }
    componentDidMount (){
        
    }
    handleClickAdd (){
        if(this.props.onAdd){
            this.props.onAdd(this.state.input)           
        }
        this.setState({
            input:''
        })
       
    }
    handleInput (e){
        this.setState({
            input:e.target.value
        })
    }
}
const mapStateToProps=(state) =>{
    return {
        todos:state.todos
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        onAdd:(text)=>{
            dispatch(addTodo(text))
        }
    }
}
Input=connect(mapStateToProps,mapDispatchToProps)(Input)


export default Input