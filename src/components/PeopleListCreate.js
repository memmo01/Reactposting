import React from 'react';

class PeopleListCreate extends React.Component{
    render(){
        console.log(this.props.people.img)
        
        return(
            <div>
                name: {this.props.people.name} <br/>
                <img src={this.props.img} alt="profile"/><br/>
                age: {this.props.people.age} yrs old
                </div>
        )
    }
}

export default PeopleListCreate;