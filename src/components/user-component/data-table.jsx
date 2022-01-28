import React, { Component } from 'react';
import ModelD from '../3d/ModelD';

class DataTable extends Component {
    render() {
        return (
            <div className='swiperSl'>
            <div className='left'>
              <h1 className='swipe-title'>{this.props.obj.name}</h1>
                <ModelD />
              {this.props.obj.Model}
            </div>
            <div className='right-side'>
              <div className='img-grid'>
                    <img src={this.props.obj.Img}/>
              </div>
            </div>
          </div>

        );
    }
}

export default DataTable;