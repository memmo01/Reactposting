import AddForm from './components/addForm';
import './App.css';
import Infoapi from './components/apiInfo';
import PeopleList from './components/PeopleList';
import React from 'react';
import uuid from 'uuid';
import $ from 'jquery';

class App extends React.Component{
    constructor(){
        super()
        this.state={people:[],
        things:[],
        counter:0,
        buttonText:"Show Data"};
    }

    //adding data to people state
    getPeople(){
             this.setState({
            people:[{
                id:uuid.v4(),
                name:"michael",
                age:20,
                type:"informative",
                post:"This is a sample posting here that is in the system already"
            },{
                id:uuid.v4(),
                name:"laura",
                age:20,
                type:"informative",
                post:"this is another sampling post. If you fill in the information above, you can also add the the comments down here! However,due to it not being attached to a database when you update the site you input will not save "
            }]
        })
    }

    //adding data to things state using api call
    getAPI(){
        $.ajax({
            url:"https://jsonplaceholder.typicode.com/posts",
            method:'GET',
            dataType:'json',
            success:function(data){
                this.setState({
                    things:data
                })                
            }.bind(this)
        })

    }

    //when system start it loads the people state
    componentDidMount(){
        this.getPeople()
    }


//creates a toggle button by alternating counter state from 0 to 1 or 1 to 0
    changeCount(x,buttonTxt){
        this.setState({
            counter:x,
            buttonText:buttonTxt
        })
    }


    //when button is pressed information is displayed or not displayed
    updateApiList(){
        
    if(this.state.counter === 0){
        this.changeCount(1,"Hide Data")
        this.getAPI()

    }else if(this.state.counter === 1){
         this.changeCount(2,"Show Data")
         $(".apiList").css("display","none")
   
    }
    else if(this.state.counter === 2){
      this.changeCount(1,"Hide data")
         $(".apiList").css("display","block");
         
    }

    }


//updates people state
    updateName(info){
      let people = this.state.people;
      people.push(info);
      this.setState({people:people})

    }


    handleDelete(id){
        let index =(this.state.things.findIndex(x=>x.id === id));
        this.state.things.splice(index,1);
        this.setState({things:this.state.things})
  
    }


    render(){
        return(

    <div className="App-container">
        
        <header>
           
            <h1>using props to pass data to other components</h1>
            <h3>This allows you to fill out a form and have the information immediately show below.</h3>
            <h4>It is not linked to a database so the information is not persistent</h4>
        </header>

        <section id='form'>
            <AddForm updateName={this.updateName.bind(this)}/>
        </section>


        <section id="userList">    
            <PeopleList people={this.state.people}/>
        </section>
    
        <section id="apiCall">
            <h1><u>API call example:</u></h1>
            <button onClick={this.updateApiList.bind(this)}>{this.state.buttonText}</button>
        
            <div className="apiList">
                <Infoapi deleteData={this.handleDelete.bind(this)} information={this.state.things}/>
            </div>
    
        </section>
    </div>
        )
    }
}

export default App;
