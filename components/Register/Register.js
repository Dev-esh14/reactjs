import './Register.css';
import {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {alphaNumeric} from '../../helper/Validation';


export default function Register(){

    const [getForm,setForm]=useState({
      firstName:'salman',
      lastName:'',
      email:'',
      password:''
    });

    
    const [getValidation,setValidation]=useState({
      firstName:'',
      lastName:'',
      email:'',
      password:''
    });


    const navigate = useNavigate();

    const onChangeHandler=(event)=>{
          setForm({...getForm,[event.target.name]:event.target.value});
    }

    const onSubmitHandler=(event)=>{
      event.preventDefault();
      console.log(getForm);
      if(alphaNumeric(getForm.firstName)==true && alphaNumeric(getForm.lastName)==true){
        sessionStorage.setItem('email',getForm.email);
        sessionStorage.setItem('password',getForm.password);
        navigate('/');
      }
      else{
        setValidation({
          ...getValidation,
          firstName:alphaNumeric(getForm.firstName),
          lastName:alphaNumeric(getForm.lastName)
        })
      }
   

    }
    return (<div>
            <div className="container">
              <div className="row">
                <div className="col-4">

                </div>
                <div className="col-4">
                  <form>
                      <div className="form-group">
                          <label>First Name</label>
                          <input type="text"  onChange={onChangeHandler} value={getForm.firstName} name="firstName" className="form-control" id="firstName"  placeholder="Enter first name"/>
                          <div className="text-danger">{getValidation.firstName}</div>
                        </div>
                        <div className="form-group">
                          <label>Last Name</label>
                          <input type="text" onChange={onChangeHandler} value={getForm.lastName} name ="lastName" className="form-control" id="lastName"  placeholder="Enter last name"/>
                          <div className="text-danger">{getValidation.lastName}</div>
                        </div>
                        
                      <div className="form-group">
                        <label>Email address</label>
                        <input type="email"  onChange={onChangeHandler} value={getForm.email} name="email" className="form-control" id="email" placeholder="Enter email"/>
                        <div className="text-danger">{getValidation.email}</div>
                      </div>
                      <div className="form-group">
                        <label>Password</label>
                        <input type="password" onChange={onChangeHandler} value={getForm.password} name="password" className="form-control" id="password" placeholder="Password"/>
                        <div className="text-danger">{getValidation.password}</div>
                      </div>
                  
                      <button onClick={onSubmitHandler} type="submit" className="btn btn-success">Submit</button>
                    </form>
              </div>
                <div className="col-4">
                    
              </div>
              </div>
     
          </div>
    </div>)
}