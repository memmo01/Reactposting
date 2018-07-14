import React from 'react';
import uuid from 'uuid';

class AddForm extends React.Component{
    constructor(){
        super()
        this.state={
            newPerson:{}
        }
    }
    static defaultProps ={
        categories:["Informative", "Funny", "Crazy"]
    }

    handleSubmit=(e)=>{
  

        this.setState({newPerson:{
            id:uuid.v4(),
            name:this.refs.name.value,
            age:this.refs.age.value,
            type:this.refs.type.value,
            post:this.refs.post.value,

        }},function(){
            this.props.updateName(this.state.newPerson)
        })
        this.refs.name.value="";
        this.refs.age.value="";
        this.refs.post.value="";
    
       e.preventDefault()
    }

    render(){

        let opt =this.props.categories.map(cat=>{
            return <option key={cat} value={cat}>{cat}</option>
        })
        return(
            <div>

            <form onSubmit={this.handleSubmit.bind(this)}>
                <label>Enter your name: </label><br/>
                <input type="text" ref="name"/><br/>
                <label>Enter your age: </label><br/>
                <input type="text" ref="age"/><br/>
                <label> Type of post</label><br/>
                <select ref='type'>
                    {opt}
                    </select><br/>
                    <label> Enter your post:</label><br/>
                    <textarea rows='6' cols='50' ref='post'/><br/>
                    <input type="submit" name="submit"/>
                </form>
                </div>
        )
    }
}

export default AddForm;