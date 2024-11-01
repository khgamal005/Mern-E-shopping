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
    uploadProduct : {
        url : `${baseUrl}/api/upload-product`,
        method : 'post'
    },
    allProduct : {
        url : `${baseUrl}/api/get-product`,
        method : 'get'
    },
    updateProduct : {
        url : `${baseUrl}/api/update-product`,
        method  : 'post'
    },
    categoryProduct : {
        url : `${baseUrl}/api/get-categoryProduct`,
        method : 'get'
    },
    categoryWiseProduct : {
        url : `${baseUrl}/api/category-product`,
        method : 'post'
    },
    productDetails : {
        url : `${baseUrl}/api/product-details`,
        method : 'post'
    },
    addToCartProduct : {
        url : `${baseUrl}/api/addtocart`,
        method : 'post'
    },
    addToCartProductCount : {
        url : `${baseUrl}/api/countAddToCartProduct`,
        method : 'get'
    },
    addToCartProductView : {
        url : `${baseUrl}/api/view-card-product`,
        method : 'get'
    },
    updateCartProduct : {
        url : `${baseUrl}/api/update-cart-product`,
        method : 'post'
    },
    deleteCartProduct : {
        url : `${baseUrl}/api/delete-cart-product`,
        method : 'post'
    },
    searchProduct : {
        url : `${baseUrl}/api/search`,
        method : 'get'
    },
    filterProduct : {
        url : `${baseUrl}/api/filter-product`,
        method : 'post'
    }
}










export default SummaryApi