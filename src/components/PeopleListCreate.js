import React from 'react';

class PeopleListCreate extends React.Component{
    render(){
        console.log("____")
        console.log(this.props)
        console.log(Object.keys(this.props.people))
        
        return(
            <div>
              <br/>
               <strong><i><li>{this.props.people.name} {this.props.people.age} yrs old</li></i></strong>
              <i> {this.props.people.type}</i> <br/>
              
              
               <strong>Comments: </strong><br/>
               {this.props.people.post}
                <br/>
                </div>
        )
    }
}

export default PeopleListCreate;