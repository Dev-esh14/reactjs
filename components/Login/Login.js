import './Login.css';
import React,{useState} from 'react';
import {useNavigate} from 'react-router-dom';


export default function Login(){

const[getForm,setForm]=useState({
  email:'',
  password:''
});

const onChangeHandler=(event)=>{
  //alert(event.target.name);

  setForm({...getForm,[event.target.name]:event.target.value});
}  

const onSubmitHandler=(event)=>{
  event.preventDefault();
  if(sessionStorage.getItem('email')==getForm.email && sessionStorage.getItem('password')==getForm.password){
    navigate('/dashboard');
  }
}

const navigate=useNavigate();

    return(
        <div>
            <div className="container">
              <div className="row">
                <div className="col-4">

                </div>
                <div className="col-4">
                  <form>        
                      <div className="form-group">
                        <label>Email</label>
                        <input type="email"
                         className="form-control" 
                         id="email"
                         name="email"
                         value={getForm.email} 
                         onChange={onChangeHandler}
                         placeholder="Enter email"></input>
                      
                      </div>
                      <div className="form-group">
                        <label>Password</label>
                        <input type="password" 
                        className="form-control" 
                        id="password"
                        name="password"
                        value={getForm.password} 
                        onChange={onChangeHandler}
                        placeholder="Password"></input>
                      </div>
                  
                      <button type="submit" 
                      className="btn btn-success"
                      onClick={onSubmitHandler}>Submit</button>
                    </form>
              </div>
                <div className="col-4">
                    
              </div>
              </div>
     
          </div>
        </div>
    );
}