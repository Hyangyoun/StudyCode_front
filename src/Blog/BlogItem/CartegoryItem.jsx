import React from "react";
import { useNavigate } from "react-router-dom";

function CartegoryItem(props){

    const {title , userInfo} = props;

    const navigate = useNavigate()

    const style = {
        li: {
            cursor: "pointer",
        }
    }

    return(
        <li onClick={() => navigate(`/blog/${userInfo.nickName}/category/${title}`)} style={style.li}>
            <div className="itemBox">
                <img src="/image/icon/naver.png" alt="post" />
                <img src="/image/icon/sample.png" alt="post" />
                <img src="/image/icon/google.png" alt="post" />
                <img src="/image/icon/kakao.png" alt="post" />
            </div>
            <div title={title} className="title" >{title}</div>
            <span className="postCount">{4}개의 포스트</span>
        </li>
    )
}


export default CartegoryItem