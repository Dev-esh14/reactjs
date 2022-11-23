import { firstNameValidation , emailValidation} from "./Constant";
export const alphaNumeric=(input)=>{
    let result = /^[a-zA-Z0-9\s]{2,50}$/.test(input);
    if(result){
        return true;
    }
    else{
        return firstNameValidation;
    }
     
}

export const emailCheck=(input)=>{
    let result = /^.+@.+\..+$/.test(input);
    if(result){
        return true;
    }
    else{
        return emailValidation;
    }
     
}