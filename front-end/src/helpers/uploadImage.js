const url = `https://api.cloudinary.com/v1_1/davb7cdki/image/upload`
// https://api.cloudinary.com/v1_1/:cloud_name/:action

const uploadImage  = async(image) => {
    const formData = new FormData()
    formData.append("file",image)
    formData.append("upload_preset","e-shopping")
    

    const dataResponse = await fetch(url,{
        method : "post",
        body : formData
    })

    return dataResponse.json()

}

export default uploadImage 