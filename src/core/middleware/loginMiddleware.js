import { createHashHistory } from "history";

 const history = createHashHistory();

export const fulFilledLogin = (state, payload) => {
    if (payload.response) {
        if(payload.response.status === 401){
            state = {
                    error: true,
                    alertStatus: true,
                    type: 'error',
                    title: 'Credenciales del usuarios no encontrado'
                }
            return state
        }
    }
    if ('access' in payload) {
        state.loading = false
        state.data = payload
        localStorage.setItem('token', payload.access);
        history.go("/");
        return state
    }


    return state

}

export const pendingLogin = (state, payload) => { 
            return state = {
                loading: true,
                error: false,
                alertStatus: false,
            }
}

export const rejectedLogin = (state, payload) =>{
    if(localStorage.getItem('toke')){
        localStorage.removeItem("toke");
    }
    state.error = true;
    state.alertStatus = true;
    state.type = 'error'
    state.title = 'Credenciales incorrectas';
    history.go("/login");
    return state
}