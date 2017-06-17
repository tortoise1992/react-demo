const ADD_TODO ='ADD_TODO'
const DELETE_TODO='DELETE_TODO'


export default function(state,action){
    if(!state){
        state={
            todos:[]
        }
    }

    switch(action.type){
        case ADD_TODO:
            return {
                todos:[...state.todos,action.todo]
            }

        case DELETE_TODO:
            return {
                todos:[
                    ...state.todos.slice(0,action.index),
                    ...state.todos.slice(action.index+1)
                ]                
            }
        default:
            return state
    }
}

export const addTodo=(todo)=>{
    return {
        type:ADD_TODO,
        todo
    }
}

export const deleteTodo=(index)=>{
    return {
        type:DELETE_TODO,
        index
    }
}