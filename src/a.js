const state={
    title:{
        text:'hello ahui',
        color:'red'
    },
    content:{
        text:'我是内容',
        color:'blue'
    }
}

function renderApp(newstate,oldstate={}){
    if(newstate === oldstate) return;
    console.log('render app')
    renderTitle(state.title)
    renderContent(state.content)
}

function renderTitle(newtitle,oldtitle={}){
    if(newtitle === oldtitle) return;
    console.log('render title')
    const titleDom=document.getElementById('root');
    titleDom.innerHTML=title.text;
    titleDom.style.color=title.color;
}

function renderContent(newcontent,oldcontent={}){
    if(newcontent === oldcontent) return;
    console.log('render content')
    const contentDom=document.getElementById('test');
    contentDom.innerHTML=content.text;
    contentDom.style.color=content.color;
}

function change(state,action){
    switch(action.type){
        case 'UPDATE_TITLE_TEXT':
        state.title.text=action.text;
        break;
        case 'UPDATE_TITLE_COLOR':
        state.title.color=action.color;
        break;
        default:
        break;
    }
}

function createStore(state,stateChange){
    const listeners=[];
    const subscribe=(listener) =>listeners.push(listener);

    const getState= () =>state;
    const dispatch=(action) => {
        stateChange(state,action);
        listeners.forEach((listener) => listener());
    }
    return {
        getState,
        dispatch,
        subscribe
    }
}
const store=createStore(state,change)

store.subscribe(() =>renderApp(store.getState()))

renderApp(store.getState())

store.dispatch({type:'UPDATE_TITLE_TEXT',text:'ahui is smart'});
store.dispatch({type:'UPDATE_TITLE_COLOR',color:'orange'});
