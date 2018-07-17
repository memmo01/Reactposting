import React from 'react';

class SeparateInfo extends React.Component{
    handleClick(){
        let id =this.props.information.id;
        this.props.deleteData(id);
    }
    render(){
        return(
            <div>
                <div className='card'>
                    <div className='card-text apiInfo'>
                    <h3><li>{this.props.information.body}</li></h3>
                    <button type='button' className='btn btn-primary btn-sm' onClick={this.handleClick.bind(this)}>Delete</button>
                    </div>
                    
                </div>
            </div>
        )
    }
}
export default SeparateInfo;



<div class="card">
  <div class="card-header">
    Featured
  </div>
  <div class="card-body">
    <h5 class="card-title">Special title treatment</h5>
    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <a href="#" className="btn btn-primary btn-sm">Go somewhere</a>
  </div>
</div>
