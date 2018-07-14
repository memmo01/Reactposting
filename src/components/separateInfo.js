import React from 'react';

class SeparateInfo extends React.Component{
    handleClick(){
        let id =this.props.information.id;
        this.props.deleteData(id);
    }
    render(){
        return(
            <div>
                <h3><li>{this.props.information.body}</li><button onClick={this.handleClick.bind(this)}>Delete</button></h3>
                </div>
        )
    }
}
export default SeparateInfo;