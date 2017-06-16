import React,{Component,PropTypes} from 'react';

class Header extends Component {
    static contextTypes={
        store:PropTypes.object
    }
    constructor (){
        super()
        this.state={
            themeColor:''
        }
    }
    componentWillMount (){        
        const {store} =this.context;
        this._updateThemeColor()
        store.subscribe(() => this._updateThemeColor());
    }
    _updateThemeColor (){
        const {store} =this.context;
        const state=store.getState();
        this.setState({
            themeColor:state.themeColor
        })
    }
    
    render () {
        return (
            <div style={{color:this.state.themeColor}}>
                hello ahui
            </div>
        )
    }
}

export default Header