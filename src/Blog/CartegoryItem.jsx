import styled from "styled-components"


function CartegoryItem(props){

    const {title , setCategoryTitle} = props

    return(
            <li onClick={() => setCategoryTitle(title)}>
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