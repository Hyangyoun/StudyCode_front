import { useCallback, useEffect, useRef } from "react"
import styled from "styled-components"
import Viewer from "./Viewer"

function Review(props) {

    const amount = useRef()

    const ChangeTop = () => props.ChangeTop(amount)

    useEffect(
        () => {
        setTimeout(ChangeTop,1000)
    })

    return(
        <Reviews >
            <div ref={amount} className="reviewHead">댓글</div>
            <ul>
                <li className="review">
                    <div className="reviewid"><img src="./image/icon/profile.png" alt="아이디프로필"/>VKI9008</div>
                    <div className="content">
                        <img src="/image/icon/okTeakYeon.png" alt="내용이미지파일"/>
                        <div>그것도 너를향해</div>
                    </div>
                    <div className="reviewInfo">
                        <span className="reviewDate">2023.09.13</span>
                        <div className="rereview">답글</div>
                        <div className="warning"><img src="/image/icon/warning.png" alt="신고버튼"/></div>
                    </div>
                </li>
            </ul>
            <div>
                <div>
                    <div className="guest"><img src="./image/icon/profile.png" alt="게스트프로필"/>다대기1</div>
                    <input type="text"/>
                    <div>등록</div>
                </div>
            </div>
        </Reviews>
    )
}

const Reviews = styled.div`
    background-color: var(--second2);
    margin-top: 15px;
    width: 100%; height: auto;

    &>ul{
        width: 100%;
        list-style: none;
        padding: 0;
        margin:0;
    }

    .reviewHead{
        font-size: 20px;
        font-weight: bold;
        border-bottom: 1px solid var(--second);
    }
    .review{
        padding-left: 110px;
        border-bottom: 1px solid var(--second);
    }
    .reviewid{
        width: 100%;
        height: 20px;
        font-size: 15px;
        display: flex;
        align-items: center;
        margin: 10px 0;
        &>img{
            object-fit: fill;
            width: 20px;
            height: auto;
            margin-right: 20px;
        }
    }
    .content{
        width: 100%;
        font-size: 15px;
    }
    .reviewInfo{
        width: 100%;
        height: 30px;
        display: flex;
        flex-direction: row;
        align-items: center;
    }
    .reviewDate{
        font-size: 9px;
    }
    .rereview{
        width: 25px;
        height: 17px;
        font-size: 9px;
        display: flex;
        justify-content: center;
        align-items: center;
        border:1px solid var(--second);
        border-radius: 3px;
        margin: 0 20px 0 10px;
        
        &:hover{
            background-color: var(--primary);
            color: white;
        }
    }
    .guest{
        width: 100%;
        height: 20px;
        font-size: 15px;
        display: flex;
        align-items: center;
        margin: 10px 0;
        &>img{
            object-fit: fill;
            width: 20px;
            height: auto;
            margin-right: 20px;
        }

    }
`
export default Review