import React from 'react';
import $ from 'jquery';
import {browserHistory} from 'react-router';


export default class UserForm extends React.Component {
    constructor() {
        super();
        
        this.state = {
            bio: '',
            email: '',
            img: '',
            compentencies: [],
            _id: ''
        };
        
        this.handleInput = this.handleInput.bind(this);
        this.getUser =this.getUser.bind(this);
        this.updateUser = this.updateUser.bind(this);
    }
    
    getUser() {
        $.ajax({
            url: '/api/me',
            dataType: 'json',
            cache: false,
            success: function(data) {
                this.setState({
                    _id: data._id,
                    bio: data.bio,
                    img: data.img,
                    email: data.email,
                    compentencies: data.compentencies
                  });
            }.bind(this),
            error: function(xhr, status, err) {
                console.error('/api/me', status, err.toString());
            }.bind(this)
        });
    }
    
    handleInput(e) {
        let target = e.target;
        let name = target.name;
        let value = target.value;
        
        if(name == 'compentencies') {
            value = value.split('***');
        }
        
        this.setState({
            [name]: value
        });
    }
    
    updateUser() {
        let data = {...this.state};
        $.ajax({
            url: `/api/${this.state._id}/update`,
            data: data,
            dataType: 'json',
            type: 'POST',
            success: (data) => {
                console.log(data);
                browserHistory.push('/');
            },
            error: (xhr, status, err) => {
                console.error(err);
                browserHistory.push('/update');
            }
        });
    }
    
    componentDidMount() {
        this.getUser();
    }
    
    render() {
        return (
            <div className="form-body formBody">
                <form className="container">
                  <div className="form-group">
                    <label >Bio</label>
                    <textarea 
                      type="text"
                      rows="4"
                      className="form-control"
                      placeholder="Title" 
                      name="bio" 
                      value={this.state.bio} 
                      onChange={this.handleInput}/>
                  </div>
                  <div className="form-group">
                    <label >Compentencies</label>
                    <textarea 
                      type="text" 
                      className="form-control"
                      placeholder="Compentencies" 
                      name="compentencies" 
                      value={this.state.compentencies.join('***')}
                      onChange={this.handleInput}/>
                  </div>
                  <div className="form-group">
                    <label >IMG</label>
                    <input 
                      type="text" 
                      className="form-control"
                      placeholder="Image" 
                      name="img" 
                      value={this.state.img}
                      onChange={this.handleInput}/>
                  </div>
                  <div className="form-group">
                    <label>Email</label>
                    <input 
                      type="email" 
                      className="form-control"
                      placeholder="Email" 
                      name="email" 
                      value={this.state.email}
                      onChange={this.email}/>
                  </div>
                  <span  className="btn btn-primary" onClick={this.updateUser}>Submit</span>
                </form>
            </div>
        );
    }
}