import { DELETE_ARTICLE, INCREMENT } from '../constans'

export const increment = () => ({  
    type: INCREMENT  
})

export const deleteArticle = (id) => ({  
    type: DELETE_ARTICLE,
    payload: { id }  
})