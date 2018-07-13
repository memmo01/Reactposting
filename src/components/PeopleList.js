import React from 'react';
import PeopleListCreate from './PeopleListCreate';


class PeopleList extends React.Component{
    render(){

        let x;
        x = this.props.people.map(peoples=>{
                return <PeopleListCreate people={peoples}/>
        })

        return(

            <div>
                {x}

                </div>
        )
    }
}


export default PeopleList;