import { useEffect, useRef, useState } from "react"
import styled from "styled-components"

function Review(props) {

    const amount = useRef()

    /** 리뷰의 맨위위치를 알려주는 함수 */
    function ReviewTop(){
        const ReviewHead = amount.current.offsetTop
        return( props.ReviewTop(ReviewHead))
    } 

    useEffect(
        () => {
        ReviewTop()
    })

    /** 대댓글 생성 삭제 state */
    const [reReview, setReReview] = useState()

    const AddReReview = () => {
        setReReview(
            <div className="rereview">
                <div className="reviewId"><img src="./image/icon/profile.png" alt="아이디프로필"/>댜대기1</div>
                <textarea>안녕</textarea>
                <div className="closeBtn">X</div>
                <div>작성하기</div>
            </div>
        )
    }

    return(
        <Reviews >
            <div ref={amount} className="reviewHead">댓글</div>
            <ul>
                <li className="review">
                    <div className="reviewId"><img src="./image/icon/profile.png" alt="아이디프로필"/>VKI9008</div>
                    <div className="content">
                        <img src="/image/icon/okTeakYeon.png" alt="내용이미지파일"/>
                        <div>그것도 너를향해</div>
                    </div>
                    <div className="reviewInfo">
                        <span className="reviewDate">2023.09.13</span>
                        <div className="rereviewBtn" onClick={AddReReview}>답글</div>
                        <div className="warning"><img src="/image/icon/warning.png" alt="신고버튼"/></div>
                    </div>
                    <div>{reReview}</div>
                </li>
            </ul>
            <div className="writeReview">
                <div className="guest"><img src="./image/icon/profile.png" alt="게스트프로필"/>다대기1</div>
                <textarea placeholder="댓글을 입력하세요"></textarea>
                <div className="exportReview">등록</div>
            </div>
        </Reviews>
    )
}

const Reviews = styled.div`
    background-color: var(--second2);
    margin: 15px 0 30px 0;
    width: 100%; 
    height: auto;
    border-radius: 5px;

    &>ul{
        width: 100%;
        list-style: none;
        padding: 0;
        margin:0;
    }

    .reviewHead{
        padding-left: 10px;
        font-size: 20px;
        font-weight: bold;
        border-bottom: 1px solid var(--second);
    }
    .review{
        padding-left: 110px;
        border-bottom: 1px solid var(--second);
    }
    .reviewId{
        width: fit-content;
        height: 20px;
        font-size: 15px;
        display: flex;
        align-items: center;
        margin: 10px 0;
        cursor: pointer;
        &>img{
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
        border-bottom: 1px solid var(--second);

    }
    .reviewDate{
        font-size: 9px;
    }
    .rereviewBtn{
        width: 25px;
        height: 17px;
        font-size: 9px;
        display: flex;
        justify-content: center;
        align-items: center;
        border:1px solid var(--second);
        border-radius: 3px;
        margin: 0 20px 0 10px;
        cursor: pointer;
        &:hover{
            background-color: var(--primary);
            color: white;
        }
    }
    .warning{
        cursor: pointer;
    }

    //대댓글 작성칸///////////////////////////////////////////////////

    .rereview{
        width: 100%;
        height: auto;
        min-height: 70px;
        flex-direction: column;
        display: flex;
        margin:  10px 0;
        position: relative;
        overflow: hidden;
        &>textarea{
            margin-left: 40px;
            padding: 35px 10px 0 10px;
            font-size: 15px;
            width: 90%;
            min-height: 20px;
            background-color: var(--background);
            border: 1px solid var(--second);
            outline: none;
            resize: none;
            overflow: hidden;
        }
    }
    .guest{
        width: 91% ;
        height: 35px;
        font-size: 15px;
        display: flex;
        align-items: center;
        position: absolute;
        margin: 0;
        top: 1px;
        left: 50px;
        background-color: var(--background);
        z-index: 5;
        &>img{
            object-fit: fill;
            width: 20px;
            height: auto;
            margin-right: 5px;
        }
}
    .exportReview{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 75px;
        height: 20px;
        background-color: var(--second);
        color: white;
        border-radius: 3px;
        position: absolute;
        top: 135px;
        left: 89%;
        cursor: pointer;
    }



    //댓글 작성칸/////////////////////////////////////////////////////
    .writeReview{
        width: 100%;
        height: auto;
        min-height: 170px;
        flex-direction: column;
        display: flex;
        margin:  35px 0;
        position: relative;
        overflow: hidden;
        &>textarea{
            margin-left: 40px;
            padding: 35px 10px 0 10px;
            font-size: 15px;
            width: 90%;
            min-height: 95px;
            background-color: var(--background);
            border: 1px solid var(--second);
            outline: none;
            resize: none;
            overflow: hidden;
        }
    }
    .guest{
        width: 91% ;
        height: 35px;
        font-size: 15px;
        display: flex;
        align-items: center;
        position: absolute;
        margin: 0;
        top: 1px;
        left: 50px;
        background-color: var(--background);
        z-index: 5;
        &>img{
            object-fit: fill;
            width: 20px;
            height: auto;
            margin-right: 5px;
        }
}
    .exportReview{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 75px;
        height: 20px;
        background-color: var(--second);
        color: white;
        border-radius: 3px;
        position: absolute;
        top: 135px;
        left: 89%;
        cursor: pointer;
    }

`
export default Review