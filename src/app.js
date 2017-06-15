import React,{Component} from 'react';
import ReactDOM from 'react-dom';

// import { AppContainer } from 'react-hot-loader';
// // AppContainer 是一个 HMR 必须的包裹(wrapper)组件

// import App from './components/index';

// const render = (Component) => {
//   ReactDOM.render(
//     <AppContainer>
//       <Component/>
//     </AppContainer>,
//     document.getElementById('root')
//   );
// };

// render(App);

// // 模块热替换的 API
// if (module.hot) {
//   module.hot.accept('./components/index', () => {
//     render(App)
//   });
// }

const users=[{
  name:'ahui',
  age:20,
  gender:'male'
},{
  name:'shanshan',
  age:20,
  gender:'famale'
},{
  name:'test',
  age:30,
  gender:'male'
}]
class Header extends Component {
  render () {
    return (
      <div>
        <h1>我是头部111</h1>
        <Title></Title>      
        <Index></Index>  
      </div>
    )
  }
}

class Title extends Component {
  render () {
    return (
      <div onClick={this.clickOnTitle.bind(this,'hello')}>
        我是标题
      </div>
    )
  }
  clickOnTitle (word) {
    
  }
}

class User extends Component {
  render () {
    var user=this.props.user;
    return (
      <div>
        <h1>{user.name}</h1>
        <h1>{user.age}</h1>
        <h2>{user.gender}</h2>
        <hr/>
      </div>
    )
  }
}
 class Index extends Component {
   render () {
     return (
       <div>
         {users.map((user,i) => <User key={i} user={user}/>)}
       </div>
     )
   }
 }

ReactDOM.render(
  <Header/>,
  document.getElementById('root')
)