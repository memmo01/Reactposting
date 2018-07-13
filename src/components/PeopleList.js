import React from 'react';
import PeopleListCreate from './PeopleListCreate';


class PeopleList extends React.Component{
    render(){

        let individualUser;
        individualUser = this.props.people.map(peoples=>{
                return <PeopleListCreate key={peoples.id} people={peoples}/>
        })

        return(

            <div>
                {individualUser}

                </div>
        )
    }
}


export default PeopleList;