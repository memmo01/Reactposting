import React from 'react';
import SeparateInfo from './separateInfo';
import uuid from 'uuid'

class Infoapi extends React.Component{
    handleDelete(id){
        this.props.deleteData(id)
    }
    render(){
        let listInfo = this.props.information.map(random=>{
                return <SeparateInfo deleteData={this.handleDelete.bind(this)} key={uuid.v4()} information={random}/>
        })
        return(
            <div>
            
                {listInfo}
                </div>
        )
    }
}

export default Infoapi;