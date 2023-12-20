import axios from "axios"
import { useEffect, useRef, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import styled from "styled-components"

function Review(props) {

    const { setWarning } = props
    const amount = useRef()
    const { nickname } = useParams()
    const sessionStorage = window.sessionStorage
    const navigate = useNavigate()

    /** 리뷰의 맨위위치를 알려주는 함수 */
    function ReviewTop(){
        const ReviewHead = amount.current.offsetTop
        return( props.setEnd(ReviewHead))
    } 

    useEffect(
        () => {
        ReviewTop()
    })
    /** 댓글 생성 삭제 state */

    const [ reviewValue , setReviewValue ] = useState('')
    const [ review , setReview ] = useState([])

    const SubmitReview = () =>{
        axios.post("" , )
    }

    /** 대댓글 생성 삭제 state */
    const [ rereviewValue , setRereviewValue ] = useState('')
    const [reReview, setReReview] = useState(false)

    const ClickRereview = () =>{
        if(sessionStorage.getItem("nickname")){
            setReReview(true)
        }
        else{
            setWarning(true)
        }
    }
    
    /** 신고하기 state */

    const [ report , setReport ] = useState(false)

    const ClickReport = () =>{
        if(sessionStorage.getItem("nickname")){
            setReport(true)
        }
        else{
            setWarning(true)
        }
    }

    return(
        <Reviews >
            <div ref={amount} className="reviewHead">댓글</div>
            <ul>
                <li className="reviews">
                    <div className="review">
                        <div className="reviewId">VKI9008</div>
                        <div className="content">
                            <img src="/image/icon/okTeakYeon.png" alt="내용이미지파일"/>
                            <div>그것도 너를향해</div>
                        </div>
                        <div className="reviewInfo">
                            <span className="reviewDate">2023.09.13</span>
                            <div className="rereviewBtn" onClick={() => ClickRereview()} >답글</div>
                            <div className="warning" onClick={() => ClickReport()}><img src="/image/icon/warning.png" alt="신고버튼"/></div>
                        </div>
                    </div>
                    {reReview ?
                    <div className="rereview">
                        <div className="reviewId">{sessionStorage.getItem('nickname')}</div>
                        <textarea placeholder="댓글을 입력하세요" onChange={(e) => setRereviewValue(e.target.value)}>{rereviewValue}</textarea>
                        <div className="exportRereview">등록</div>
                        <span onClick={() => {setReReview(false)}} className="closeBtn">X</span>
                    </div>
                    : null
                    }
                </li>
            </ul>
            <div className="writeReview">{
                !sessionStorage.getItem('nickname') ?
                <div className="NoReview" onClick={() => navigate("/login")}>로그인 하러가기</div>
                :
                <>
                    <span className="guest">{sessionStorage.getItem('nickname')}</span>
                    <textarea placeholder="댓글을 입력하세요" onChange={(e) => setReviewValue(e.target.value)}>{reviewValue}</textarea>
                    <div className="exportReview" onClick={SubmitReview}>등록</div>
                </>}
            </div>
        </Reviews>
    )
}

const Reviews = styled.div`
    user-select: none; // 드래그시 파란색 없애는 것 
    background-color: var(--second2);
    margin: 15px 0 30px 0;
    width: 100%; 
    height: auto;
    border-radius: 5px;
    overflow: hidden;

    &>ul{
        width: 100%;
        list-style: none;
        padding: 0;
        margin:0;
    }

    .reviewHead{
        padding: 5px 10px ;
        font-size: 20px;
        font-weight: bold;
        border-bottom: 1px solid var(--second);
    }
    .reviews{
        padding-left: 110px;
        border-bottom: 1px solid var(--second);
    }

    .reviewId{                      //대댓글 의 아이디도 같은 클래스를 사용함
        width: fit-content;
        height: 20px;
        font-size: 15px;
        display: flex;
        align-items: center;
        margin: 10px 0;
        cursor: pointer;
        &:before{
            background-image: url("/image/icon/profile.png");
            background-size:100%;
            display: inline-block;
            width: 20px; 
            height: 20px;
            content:"";
            margin-right: 5px
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
        width: 85%;
        height: auto;
        min-height: 110px;
        flex-direction: column;
        display: flex;
        margin:  10px 0;
        position: relative;
        border-top: 1px solid var(--second);
        &>textarea{
            margin: 0;
            padding: 0;
            font-size: 15px;
            width: 100%;
            min-height: 20px;
            border: 0;
            outline: none;
            resize: none;
            overflow: hidden;
        }
    }
    .exportRereview{
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 10px 0 auto auto;
        width: 75px;
        height: 20px;
        background-color: var(--second);
        color: white;
        border-radius: 3px;
        cursor: pointer;
    }
    .closeBtn{
        width: 16px;
        height: 16px;
        display: flex;
        justify-content: center;
        align-items: center;
        border: 1px solid var(--second);
        position: absolute;
        top: 50px;
        left: 105%;
        cursor: pointer;
        &:hover{
            background-color: var(--primary);
            color: white;
        }
    }


    //댓글 작성칸/////////////////////////////////////////////////////
    .writeReview{
        width: 85%;
        height: 170px;
        flex-direction: column;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 35px auto;

        .NoReview{
        width: 150px; 
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 1px solid var(--second);
        border-radius: 5px;
        font-size: 15px;
        cursor: pointer;
        &:hover {
            background-color: var(--second);
            color: white;
        }
        }

        &>textarea{
            margin:0 auto;
            background-color: var(--background);
            padding: 0 10px;
            font-size: 15px;
            width: 100%;
            min-height: 95px;
            border: 0;
            outline: none;
            resize: none;
            overflow: hidden;
            box-sizing: border-box;
        }
    }
    .guest{
        width: 100% ;
        height: 35px;
        font-size: 15px;
        display: flex;
        align-items: center;
        margin: 0 auto;
        background-color: var(--background);
        z-index: 5;
        flex-shrink: 1;
        &:before{
            background-image: url("/image/icon/profile.png");
            background-size:100%;
            display: inline-block;
            width: 20px; 
            height: 20px;
            content:"";
            margin: auto 10px;
        }
}
    .exportReview{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 75px;
        height: 20px;
        margin: auto 0 auto auto;
        background-color: var(--second);
        color: white;
        border-radius: 3px;
        cursor: pointer;
    }

`
export default Review