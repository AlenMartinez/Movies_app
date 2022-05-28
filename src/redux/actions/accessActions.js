import accessService from '../../service/accessService'
import { createHashHistory } from "history";

const history = createHashHistory();


export const loginAction = (state) => {
       let {user, password } = state
        return accessService.getLoginRequest(user, password)
}

export const logoutAction = (state) => {
        localStorage.removeItem('token');
        history.go("/login");
}