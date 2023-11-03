import { useEffect, useRef, useState } from "react"
import styled from "styled-components"

function Review(props) {

    const amount = useRef()

    /** 리뷰의 맨위위치를 알려주는 함수 */
    function ReviewTop(){
        const ReviewHead = amount.current.offsetTop
        return( props.setEnd(ReviewHead))
    } 

    useEffect(
        () => {
        ReviewTop()
    })

    /** 대댓글 생성 삭제 state */
    // textarea 에러 문제 해결해야함//
    const [reReview, setReReview] = useState(<div></div>)

    const [inputValue , setInputValue] = useState('')
    
    const HandleInputValue = (e) => {
        setInputValue(e.target.value)
    }

    function AddReReview() {
        return (
            setReReview(
            <div className="rereview">
                <div className="reviewId"><img src="./image/icon/profile.png" alt="아이디프로필"/>댜대기1</div>
                <textarea placeholder="댓글을 입력하세요" onChange={HandleInputValue}>{inputValue}</textarea>
                <div className="exportRereview">등록</div>
                <span onClick={() => {setReReview(<div></div>)}} className="closeBtn">X</span>
            </div>
            )
        )
    }

    return(
        <Reviews >
            <div ref={amount} className="reviewHead">댓글</div>
            <ul>
                <li className="reviews">
                    <div className="review">
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
                    </div>
                    <div>{reReview}</div>
                </li>
            </ul>
            <div className="writeReview">
                <span className="guest"><img src="./image/icon/profile.png" alt="게스트프로필"/>다대기1</span>
                <textarea placeholder="댓글을 입력하세요"></textarea>
                <div className="exportReview">등록</div>
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
    .review{
    }
    .reviewId{                      //대댓글 의 아이디도 같은 클래스를 사용함
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
        margin: 35px auto;

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
        &>img{
            object-fit: fill;
            width: 20px;
            height: auto;
            margin: 0 10px;
            
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