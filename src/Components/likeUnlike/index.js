import React, {useState} from "react";
import {Button, Card} from "react-bootstrap";
import {dislikeCard, likeCard} from "../../actions/Action";
import {connect} from "react-redux";
function LikeUnlike (props){
    const [state, setState] = useState({
        id: props.id,
        likes: props.like,
        disLike: props.dislike,

    })
    return(
<div>

</div>

    )
}

const mapDispatchToProps = dispatch => (
    {
        editLike: (id, likes) => dispatch(likeCard(id,likes)),
        // editdisLike: (id, img, title, category, likes, dislikes) => dispatch(dislikeCard(id, img, title, category, likes, dislikes))
    })
export default connect(null,mapDispatchToProps)(LikeUnlike)
