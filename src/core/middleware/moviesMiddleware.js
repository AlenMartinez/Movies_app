export const fulFilledMovies = (state, payload) => {
        state.loading = true
        return state

}

export const pendingMovies = (state, payload) => { 
        state.loading = false
        state.data = payload
        return state
}

export const rejectedMovies = (state, payload) =>{
   
    return state
}