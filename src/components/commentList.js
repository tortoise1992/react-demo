import React,{Component} from 'react';
import Comment from './comment.js'
class Clist extends Component {
    render () {
        const comments=this.props.comments || [];
        return (
            <div>
                {comments.map((comment,i) => <Comment comment={comment} key={i}/>)}
            </div>
        )
    }
}

export default Clist;