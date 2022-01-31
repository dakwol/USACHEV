// ** create-user.component.js ** //

import React, { Component } from 'react';
import axios from 'axios';

export default class CreateUser extends Component {

    constructor(props) {
        super(props)

        this.onChangeSwiperName = this.onChangeSwiperName.bind(this);
        this.onChangeSwiperModel = this.onChangeSwiperModel.bind(this);
        this.onChangeSwiperImg = this.onChangeSwiperImg.bind(this);
        this.onChangeSwiperInfo = this.onChangeSwiperInfo.bind(this);
        this.onChangeSwiperHar = this.onChangeSwiperHar.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            name: '',
            model: '',
            Img: [],
            info: '',
            har: [],
        }
    }

    onChangeSwiperName(e) {
        this.setState({ name: e.target.value })
    }

    onChangeSwiperModel(e) {
        this.setState({ model: e.target.value })
    }

    onChangeSwiperImg(e) {
        this.setState({ Img: e.target.value })
    }

    onChangeSwiperInfo(e) {
        this.setState({ info: e.target.value })
    }

    onChangeSwiperHar(e) {
        this.setState({ har: e.target.value })
    }

    onSubmit(e) {
        e.preventDefault()

        const userObject = {
            name: this.state.name,
            model: this.state.model,
            Img: this.state.Img,
            info: this.state.info,
            har: this.state.har
        };

        axios.post('http://localhost:4000/swiper/create', userObject)
            .then((res) => {
                console.log(res.data)
            }).catch((error) => {
                console.log(error)
            });

        this.setState({ name: '', model: '', Img: [], info: '', har: [] })
    }


    render() {
        return (
            <div className="wrapper">
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Add User Name</label>
                        <input type="text" value={this.state.name} onChange={this.onChangeSwiperName} className="form-control" />
                    </div>
                    <div className="form-group">
                        <label>Add User model</label>
                        <input type="text" value={this.state.model} onChange={this.onChangeSwiperModel} className="form-control" />
                    </div>
                    <div className="form-group">
                        <label>Add User Img</label>
                        <input type="file" multiple value={this.state.Img} onChange={this.onChangeSwiperImg} className="form-control" />
                    </div>
                    <div className="form-group">
                        <label>Add User info</label>
                        <textarea type="text" value={this.state.info} onChange={this.onChangeSwiperInfo} className="form-control" />
                    </div>
                    <div className="form-group">
                        <label>Add User info</label>
                        <textarea type="text" value={this.state.har} onChange={this.onChangeSwiperHar} className="form-control" />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Create User" className="btn btn-success btn-block" />
                    </div>
                </form>
            </div>
        )
    }
}