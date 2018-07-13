import React from 'react';
import AddForm from './components/addForm';
import PeopleList from './components/PeopleList';


class App extends React.Component{
    constructor(){
        super()
        this.state={people:[]};
    }

    componentWillMount(){
        this.setState({
            people:[{
                id:1,
                name:"michael",
                age:20,
                type:"informative",
                post:"This is a sample posting here that is in the system already"
            },{
                id:1,
                name:"laura",
                age:20,
                type:"informative",
                post:"this is another post sampling. If you fill in the information above, you can also add the the comments down here! However,due to it not being attached to a database when you update the site you input will not save "
            }]
        })
    }
    updateName(info){
      let people = this.state.people;
      people.push(info);
      this.setState({people:people})



    }
    render(){
        return(
<div>
    <h1>using props to pass data to other components</h1>
    <h3>This allows you to fill out a form and have the information immediately show below.</h3>
    <h4>It is not linked to a database so the information is not persistent</h4>

            <AddForm updateName={this.updateName.bind(this)}/>
    <PeopleList people={this.state.people}/>
    </div>
        )
    }
}

export default App;
