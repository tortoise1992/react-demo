import React,{Component} from 'react';
import ReactDOM from 'react-dom';

class App extends Component {
    constructor (){
        super()
        this.state={
            date:new Date()
        }
    }
    componentWillMount () {
        this.timer=setInterval(
            () =>{
                this.setState({
                    date:new Date()
                })
            },1000
        )
        
    }
    render () {
        return (
            <div>
                <h1 ref={(a) => this.tar=a}>now is :</h1>
                <p>{this.state.date.toLocaleTimeString()}</p>
                <Card>
                    <h1>hello </h1>
                    <h2>i am ahui</h2>
                </Card>
            </div>
        )
    }
    componentDidMount () {
        console.log(this.tar)
    }
    componentWillUnmount () {
        clearInterval(this.timer)
    }
}

class Card extends Component {
    render (){
        return (
            <div>
                {this.props.children}
            </div>
        )
    }
    // componentDidMount () {
    //     console.log(this.props.children)
    // }
}



ReactDOM.render(
  <App/>,
  document.getElementById('root')
)