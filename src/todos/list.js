import React,{Component,PropTypes} from 'react'
import {connect} from 'react-redux'
import {deleteTodo} from './reducer.js'
class List extends Component{
    static propTypes={
        todos:PropTypes.array
    }
    render (){
        const items=[];
        this.props.todos.map((todo,i) =>{
            items.push(<h4 key={i}>{todo} <span onClick={this.handleDelete.bind(this,i)}>删除</span></h4>)
        })
        return (
            <div className='todo-list'>
                {items}
            </div>
        )
    }
    handleDelete (i){
       if(this.props.onDelete){
           this.props.onDelete(i)
       }
    }
}

const mapStateToProps=(state) =>{
    return {
        todos:state.todos
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
        onDelete:(index)=>{
            dispatch(deleteTodo(index))
        }
    }
}
List=connect(mapStateToProps,mapDispatchToProps)(List)
export default List


