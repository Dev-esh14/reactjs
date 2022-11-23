import './Dashboard.css';
import Modal from './Modal';
import {useState} from 'react';
import {alphaNumeric} from '../../helper/Validation';

export default function Dashboard(){

  const[getModal,setModal] = useState(false);

  const[getList,setList] = useState([]);

  const [getForm,setForm]=useState({
    expenseName:'',
    amount:0,
    paidBy:'',
    date:''
  });

  const [getValidation,setValidation]=useState({
    expenseName:'',
    amount:'',
    paidBy:'',
    date:''
  });

  const onChangeHandler=(event)=>{
    setForm({...getForm,[event.target.name]:event.target.value});
}

   const onCloseHandler=()=>{
            setModal(!getModal);
    }

    const clearHandler=()=>{
      setForm({
        expenseName:'',
        amount:'',
        paidBy:'',
        date:''
      })
      setValidation({
        expenseName:'',
        amount:'',
        paidBy:'',
        date:''
      })
    }
    const onSubmitHandler=(event)=>{
      event.preventDefault();
      console.log(getForm);
      if(alphaNumeric(getForm.expenseName)==true && alphaNumeric(getForm.paidBy)==true){
        setList([...getList,getForm])
        console.log(getList);
        onCloseHandler();
        clearHandler();
      }
      else{
        setValidation({
          ...getValidation,
          expenseName:alphaNumeric(getForm.expenseName),
          paidBy:alphaNumeric(getForm.paidBy)
        })
      }
   

    }

    return (<div>
        {getModal && <Modal onSubmit={onSubmitHandler} getValidation={getValidation} getForm={getForm} text="expense" onUpdate={onChangeHandler} onClose={onCloseHandler} />}
         <div className="container-fluid">
              <div className="row">
                <div className="col-3">
               
                    <form>        
                        <div className="form-group">
                          <label>Expense name</label>
                          <input type="email" className="form-control" id="email" placeholder="Enter email"/>
                        
                        </div>       
                        <button type="submit" className="btn btn-success">Search</button>
                      </form>
                </div>
                <div className="col-9">
                <button onClick={onCloseHandler} style={{float:"right",marginTop:"20px"}} type="submit" className="btn btn-success">ADD</button>
                </div>
                
              </div>

              <div className="row">
                  <div className="col-12">
                    <table className="table table-bordered">
                        <thead>
                          <tr>
                            <th scope="col">#</th>
                            <th scope="col">Expense Name</th>
                            <th scope="col">Amount</th>
                            <th scope="col">Paid by</th>
                            <th scope="col">Date</th>
                            <th scope="col">Edit</th>
                            <th scope="col">Delete</th>
                          </tr>
                        </thead>
                        <tbody>
                          {getList.map((input,index)=>{

                            return(
                              <tr key={index}>
                              <th scope="row">{index}</th>
                              <td>{input.expenseName}</td>
                              <td>{input.amount}</td>
                              <td>{input.paidBy}</td>
                              <td>{input.date}</td>
                              <td><i  data-toggle="modal" data-target="#edit" className="fa fa-pencil-square-o" aria-hidden="true"></i></td>
                              <td><i className="fa fa-trash" aria-hidden="true"></i></td>
                            </tr>
                            )

                          })}
                         
                 
                       
                        </tbody>
                      </table>
                  </div>
              </div>
     
          </div>




  <div className="modal fade" id="edit" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog" role="document">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div className="modal-body">
          
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
          <button type="button" className="btn btn-primary">Save changes</button>
        </div>
      </div>
    </div>
  </div>
    </div>)
}