import React,{Component,PropTypes} from 'react';

class Switches extends Component{
    static contextTypes={
        store:PropTypes.object
    }

    handleClick (){
        const {store} =this.context;
        store.dispatch({
            type:'CHANGE_COLOR',
            themeColor:'green'
        })
    }
    render () {
        return (
            <div>
                <button onClick={this.handleClick.bind(this)}>green</button>
                <button>red</button>
            </div>
        )
    }
}

export default Switches;