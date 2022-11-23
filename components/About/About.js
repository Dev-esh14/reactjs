import './About.css';
import expense from '../../assets/expense.jpg';

export default function About(){
    return(
        <div>
             <div className="container-fluid">
              <div className="row">
                <div className="col-12">
                  <img className="img-about" src={expense}/>
                </div>
               </div> 
              </div>

        </div>
    );
}