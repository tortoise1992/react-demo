import React,{Component,PropTypes} from 'react';
import {connect} from 'react-redux'

class Header extends Component {
    static propTypes={
        themeColor:PropTypes.string
    }
   
    render () {
        return (
            <div style={{color:this.props.themeColor}}>
                hello ahui
            </div>
        )
    }
}

const mapStateToProps=(state) => {
    return {
        themeColor:state.themeColor
    }
}
Header=connect(mapStateToProps)(Header)
export default Header