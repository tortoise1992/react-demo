import React,{Component,PropTypes} from 'react';

class Content extends Component{
    static contextTypes={
        store:PropTypes.object
    }
    constructor () {
        super()
        this.state={
            themeColor:''
        }
    }
    componentWillMount (){
        const {store} =this.context;
         this._updateContent()
        store.subscribe(() => this._updateContent());
       
    }
    _updateContent () {
        const {store}=this.context;
        const state=store.getState();
        this.setState({
            themeColor:state.themeColor
        })
    }
    render (){
        return (
            <div>
                <h2 style={{color:this.state.themeColor}}>我是内容</h2>
            </div>
        )
    }
}


export default Content