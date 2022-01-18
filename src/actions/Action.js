import{SEARCH_CARD,DELETE_CARD,LIKE_CARD,DISLIKE_CARD} from './ActionType'
export  const searchCard=(category)=>({
    type: SEARCH_CARD,
    payload:category
})
export const likeCard=(id,img,title,category,likes,dislikes)=>(
    {type:LIKE_CARD,
        payload:{id,img,title,category,likes,dislikes
        }})
export const dislikeCard=(id,img,title,category,likes,dislikes)=>(
    {type:DISLIKE_CARD,
        payload:{id,img,title,category,likes,dislikes
        }}
)
export const deleteCard=(id)=>(
    {type:DELETE_CARD,
        payload:id
    }
)
