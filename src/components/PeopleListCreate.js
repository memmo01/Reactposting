import React from 'react';

class PeopleListCreate extends React.Component{
    render(){
        console.log("____")
        console.log(this.props)
        console.log(Object.keys(this.props.people))
        
        return(
            <div>
              <br/>
              <div className="card">
                  <div className="card-body">
                        <div className="card-title"><strong><i><li>{this.props.people.name} {this.props.people.age} yrs old</li></i></strong>
                    </div>
                    <div className="card-text">
                    <i> {this.props.people.type}</i> <br/>
                    
                    
                    <strong>Comments: </strong><br/>
                    {this.props.people.post}
                <br/>
                </div>
                </div>
                </div>
                </div>
        )
    }
}


<div class="card">
  <div class="card-header">
    Featured
  </div>
  <div class="card-body">
    <h5 class="card-title">Special title treatment</h5>
    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>

export default PeopleListCreate;