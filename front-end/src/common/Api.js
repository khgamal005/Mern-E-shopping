const baseUrl =  "http://localhost:8080"


const SummaryApi={
    signUp:{
        url : `${baseUrl}/api/signup`
    },
    signIN:{
        url :`${baseUrl}/api/signin`,
    
    },
    current_user : {
        url : `${baseUrl}/api/user-details`,
        method : "get"
    },
    logout_user : {
        url : `${baseUrl}/api/userLogout`,
        
    },
    allUser : {
        url : `${baseUrl}/api/all-user`,
        
    },
    updateUser : {
        url : `${baseUrl}/api/update-user`,
        method : "post"
    },
}










export default SummaryApi