export const getCredentialsValidate = (value) => {
    let mgs;
    if(value.length === 0) mgs = {title:`Igrese Contraseña`, disabled: true}
    else if(value.length < 4) mgs = {title:`La contraseña debe tener mas de 4 caracteres`, disabled: true}
    else mgs = {title:'Contraseña', disabled: false}
    
    return mgs

}
