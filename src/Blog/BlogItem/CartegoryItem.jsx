import React from "react";

function CartegoryItem(props){

    const {title , setCategoryTitle} = props;

    const style = {
        li: {
            cursor: "pointer",
        }
    }

    return(
        <li onClick={() => setCategoryTitle(title)} style={style.li}>
            <div className="itemBox">
                <img src="/image/icon/naver.png" alt="post" />
                <img src="/image/icon/sample.png" alt="post" />
                <img src="/image/icon/google.png" alt="post" />
                <img src="/image/icon/kakao.png" alt="post" />
            </div>
            <span className="title" >{title}</span>
            <span className="postCount">{4}개의 포스트</span>
        </li>
    )
}


export default CartegoryItem