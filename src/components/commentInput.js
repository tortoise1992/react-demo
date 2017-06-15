import React,{Component} from 'react';

class Cinput extends Component {
    constructor () {
        super()
        this.state = {
            username:'',
            content:''
        }
    }
    handleUsername (e) {
        this.setState({
            username:e.target.value
        })
    }
    handleContent (e){
        this.setState({
            content:e.target.value
        })
    }
    handleSubmit (){
        if(this.props.onSubmit){
            var obj=this.state;
            this.props.onSubmit(obj);
        }
        this.setState({
            content:''
        })
    }
    handleOnblur (e){
        this.saveName(e.target.value)
    }
    componentWillMount () {
        this._loadUsername();
    }
    _loadUsername (){
        const username=localStorage.getItem('username');
        if(username){
            this.setState({
                username
            })
        }
    }
    saveName (name) {
        localStorage.setItem('username',name)
        // console.log(localStorage)
    }
    componentDidMount (){
        this.textarea.focus();
    }
    render () {
        return (
             <div className='comment-input'>
                <div className='comment-field'>
                <span className='comment-field-name'>用户名：</span>
                <div className='comment-field-input'>
                    <input onBlur={this.handleOnblur.bind(this)} value={this.state.username} onChange={this.handleUsername.bind(this)}/>
                </div>
                </div>
                <div className='comment-field'>
                <span className='comment-field-name'>评论内容：</span>
                <div className='comment-field-input'>
                    <textarea ref={(a) =>this.textarea =a} value={this.state.content} onChange={this.handleContent.bind(this)}/>
                </div>
                </div>
                <div className='comment-field-button'>
                <button onClick={this.handleSubmit.bind(this)}>
                    发布
                </button>
                </div>
            </div>
        )
    }
}

export default Cinput;