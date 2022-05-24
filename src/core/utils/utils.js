export const getDestructUrl = (url) => {
    console.log(url,'getDestructUrl')
    if(url){
        const param = /(&offset=[0-9]+([,][0-9]+)*)/gi;
        let destrucParam = url.match(param);
        console.log(destrucParam,'destrucParam')
        if(typeof destrucParam == 'object'){
            console.log(destrucParam,'destrucParam')
            let deleteParamInser = destrucParam[0]
            url =  deleteParamInser.replace("&offset=", "")

        }
        return url
    
    }

  
}