import axios from "axios";


const PostInstance = axios.create(
    {
        baseURL:"https://jsonplaceholder.typicode.com/posts",

    }
)


export const GetAllPost = async () => {
  const post = await PostInstance.get()
    if (post.status === 200) {
        return { data :post.data,success: true}
    }
    return { data : [] ,success: false}
}


export const GetPostById = async (id) => {
    const post = await PostInstance.get(`/${id}`)
    if (post.status === 200) {
        return { data :post.data,success: true}
    }
    return { data : {} ,success: false}
}
