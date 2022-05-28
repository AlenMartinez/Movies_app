export const getDestructUrl = (url) => {
    if(url){
        const param = /(&offset=[0-9]+([,][0-9]+)*)/gi;
        let destrucParam = url.match(param);

        if(typeof destrucParam == 'object'){
            let deleteParamInser = destrucParam[0]
            url =  deleteParamInser.replace("&offset=", "")

        }
        return url
    
    }

  
}
//eliminar duplicados
export const  getUniqueListBy = (arr, key) => {
    return [...new Map(arr.map(item => [item[key], item])).values()]
}

export const dataCardsVerific = (data) =>{
    if (Object.keys(data).length > 1)  return true
    else  return false
   
}