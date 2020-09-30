
// check empty
export const required = (value)=>{
    let err;
    if(value){
        err = undefined
    }else{
        err = '* input not empty! *'
    }
    return err
}