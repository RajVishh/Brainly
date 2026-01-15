export const getCards =async()=>{
    
    const response = await axios.get(`http://localhost:3000/user/${UserId}/content`)
    console.log("response",response.data.brains)
    
    return response
  }