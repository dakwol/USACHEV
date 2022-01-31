import React, { Component, useState } from 'react';
import ModelD from '../3d/ModelD';



class DataTable extends Component {

    render() {

        return (
       
            <div className='swiperSl'>
            <div className='left'>
              <h1 className='swipe-title'>{this.props.obj.name}</h1>
                <ModelD />
               
            </div>
            <div className='right-side'>
              <div className='img-grid'>
                    { this.props.obj.Img.map((Img) => <img key={Img} src={Img}/> )}
                    
              </div>
              <div className='Info__slide'>
                <h1 className='info__title'>Описание</h1>
                
                <p className='info__text'>
                  {this.props.obj.info}
                </p>
              </div>
              <div className='haracters__slide'>
                <h1 className='har__title'>Характеристики модели</h1>
                <ul className='har__text'>
                { this.props.obj.har.map((har) => <li key={har}>{har}</li> )}
                </ul>
              </div>
            </div>
           
          </div>

        );
    }
}

export default DataTable;

