export const fetchAPI= async ()=>{


    let result=await fetch('https://hoblist.com/movieList',{
            method:"POST",
           
            
            headers:{
               
                "Content-Type":"application/json",
            },

            body:{
                category:"movies",
                language:"kannada",
                genre:"all",
                sort:"voting",
            }
        }).then(data=> {return data})

        return result
        

   
        

   
    

  

}