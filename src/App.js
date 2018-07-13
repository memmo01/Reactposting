import React from 'react';
import PeopleList from './components/PeopleList';

class App extends React.Component{
    constructor(){
        super()
        this.state={people:[]};
    }

    componentWillMount(){
        this.setState({
            people:[{
                name:"michael",
                img:'https://avatars2.githubusercontent.com/u/5624255?v=3&s=100',
                age:20
            },{
                name:"laura",
                img:"https://cdn.pixabay.com/photo/2018/06/23/16/22/romanesco-3493007_1280.jpg",
                age:20
            }]
        })
    }
    render(){
        return(
<div>
    <h1>using props to pass data to other components</h1>


    <PeopleList people={this.state.people}/>
    </div>
        )
    }
}

export default App;
