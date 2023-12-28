import axios from "axios"
import { useEffect, useRef, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import styled from "styled-components"
import reviewComment from "/studycode_front/studycode_front/src/DummyData/ReviewComment.json"

function Review(props) {

    const { setWarning } = props
    const amount = useRef()
    const reviewForm = useRef()
    const { nickname , postIndex } = useParams()
    const navigate = useNavigate()
    let date = new Date();

    const sessionStorage = window.sessionStorage
    const username = window.sessionStorage.getItem("nickname")

    //댓글 관련 state
    const [comments , setComments] = useState([])
    /** 댓글 생성 삭제 state */
    const [ reviewValue , setReviewValue ] = useState('')
    /** 대댓글 생성 삭제 state */
    const [ rereviewValue , setRereviewValue ] = useState('')
    const [rereviewButton , setRereviewButton] = useState(false)
    const [rereviewIndex , setRereviewIndex] = useState(0)

    /** 신고하기 state */
    const [ report , setReport ] = useState(false)

    /** 리뷰의 맨위위치를 알려주는 함수 */
    function ReviewTop(){
        const ReviewHead = amount.current.offsetTop
        return( props.setEnd(ReviewHead))
    } 
    /** 댓글 위치 감지하는함수 */
    useEffect(
        () => {
        ReviewTop()
    })
    /** 댓글 닫아주는 함수 */
    const CloseRereview =(e) => {
        if(!reviewForm.current.contains(e.target)){
            setRereviewIndex(0)
        }
    }

    // 댓글info 받는 state
    useEffect(() => {
        // axios.post("/api/post/comment",{
        //     postIndex:Number(postIndex)
        // })
        // .then((response) => {
        //     setComments(response.data)
        // })
        // .catch((error) => { console.log(error)})
        setComments(reviewComment)
        document.addEventListener("mousedown" , CloseRereview)
        return (() => 
            document.removeEventListener("mousedown" , CloseRereview))
    },[])

    /** 댓글 작성 함수 */
    const SubmitReview = () =>{
        if(reviewValue){
        // axios.post("" ,{
        //     postIndex:Number(postIndex),
        //     memId:sessionStorage.getItem("memId"),
        //     content:reviewValue
        // } )
        // .catch((error) => {
        //     console.log(error)
        // })
        console.log(comments)
        let commentsList = comments
        // date.toLocaleDateString()만 하면 2023. 12. 27. 이런식으로 나와서 바꿔주고 맨뒤에꺼 지워주는것으로 해결
        let commentsDate = date.toLocaleDateString().replace(/. /g,"-").slice(0 ,-1)
            commentsList.push({
                "commentIndex": commentsList.length + 1,
                "nickname": username,
                "content": reviewValue,
                "commentDate": commentsDate,
                "reply": []
            })
            setComments([...commentsList])     //기존배열을 지우고 새배열을 출력
            setReviewValue('')
        }
        const data ={
            postIndex:Number(postIndex),
            memId:sessionStorage.getItem("memId"),
            content:reviewValue
        }
        // console.log(data)
    }

    /**대댓글 작성 함수 */
    const SubmitRereview = (commentIndex,item) =>{
        if(rereviewValue){

        // axios.post("" ,{
        //     postIndex:Number(postIndex),
        //     commentIndex:commentIndex,
        //     memId:sessionStorage.getItem("memId"),
        //     content:rereviewValue
        // } )
        // .catch((error) => {
        //     console.log(error)
        // })
        const rereviewList = item.reply
        let rereviewDate = date.toLocaleDateString().replace(/. /g,"-").slice(0 , -1)
        rereviewList.push({
            "content": rereviewValue,
            "nickname": username,
            "commentDate": rereviewDate
        })
        setRereviewValue("")
        }

        const data ={
            postIndex:Number(postIndex),
            commentIndex:commentIndex,
            memId:sessionStorage.getItem("memId"),
            content:rereviewValue
        }
        console.log(data)
    }

    /** 답글 버튼 클릭시 회원인지 확인하는함수 나오는 함수 */
    const ClickRereview = (i) =>{
        if(!username){
            setWarning(true)
        }
        setRereviewIndex(i)
    }
    
    /** 신고버튼 누를때 나오는 함수 */
    const ClickReport = () =>{
        if(username){
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
                <li ref={reviewForm} className="reviews">
                    {comments.map((item , index) => {
                    return (
                    <div key={index} >
                        <div className="reviewId">{item.nickname}</div>
                        <div className="content">
                            <div>{item.content}</div>
                        </div>
                        <div className="reviewInfo">
                            <span className="reviewDate">{item.commentDate}</span>
                            <div className="rereviewBtn" onClick={() => ClickRereview(item.commentIndex)} >답글</div>
                            <div className="warning" onClick={() => ClickReport()}><img src="/image/icon/warning.png" alt="신고버튼"/></div>
                        </div>
                        {/** 커멘트인덱스와 리뷰 인덱스가 같다면 답글을 보여줌 */}
                        {item.commentIndex == rereviewIndex ?
                        <>
                        {item.reply.map((item , index) => {
                            return (
                            <div  className="reviewForm">
                                <div className="reviewId">{item.nickname}</div>
                                <div className="content">
                                    <div>{item.content}</div>
                                </div>
                                <div className="reviewInfo">
                                    <span className="reviewDate">{item.commentDate}</span>
                                    <div className="warning" onClick={() => ClickReport()}><img src="/image/icon/warning.png" alt="신고버튼"/></div>
                                </div>
                            </div>
                            )
                        })}
                        <div className="rereview">
                            <div className="reviewForm">
                                <div className="reviewId">{username}</div>
                                <textarea placeholder="댓글을 입력하세요"  value={rereviewValue} onChange={(e) => setRereviewValue(e.target.value)}>{rereviewValue}</textarea>
                                <div className="exportRereview" onClick={() => SubmitRereview(item.commentIndex , item)}>등록</div>
                                <span onClick={() => {setRereviewIndex(0)}} className="closeBtn">X</span>
                            </div>
                        </div>
                        </>
                        :
                        null}
                    </div>)
                    })}
                </li>
            </ul>
            <div className="writeReview">{
                !username ?
                <div className="NoReview" onClick={() => navigate("/login")}>로그인 하러가기</div>
                :
                <>
                    <span className="guest">{username}</span>
                    <textarea placeholder="댓글을 입력하세요" value={reviewValue} onChange={(e) => setReviewValue(e.target.value)}>{reviewValue}</textarea>
                    <div className="exportReview" onClick={() =>SubmitReview()}>등록</div>
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
    //안보이는 css
    .disabled{
        display: none;
    }

    .reviewHead{
        padding: 5px 10px ;
        font-size: 20px;
        font-weight: bold;
        border-bottom: 1px solid var(--second);
    }
    .reviews{
        padding-left: 80px;
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
    .reviewForm{
        padding: 0 0 0 40px;
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
        margin: 0 0 0 10px;
        cursor: pointer;
        &:hover{
            background-color: var(--primary);
            color: white;
        }
    }
    .warning{
        margin: 0 0 0 20px;
        cursor: pointer;
    }

    //대댓글 작성칸///////////////////////////////////////////////////

    .reviewForm{
        position: relative;
        box-sizing: border-box;

        &>textarea{
            margin: 0;
            padding: 0;
            font-size: 15px;
            width: 91%;
            min-height: 20px;
            border: 0;
            outline: none;
            resize: none;
            overflow: hidden;
        }

    .rereview{
        width: 85%;
        height: auto;
        min-height: 110px;
        flex-direction: column;
        display: flex;
        margin:  10px 0;
        border-top: 1px solid var(--second);
    }
    .exportRereview{
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 10px 0 auto auto;
        width: 75px;
        height: 20px;
        position: absolute;
        left: 82%;
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
        top: 40px;
        left: 95%;
        cursor: pointer;
        &:hover{
            background-color: var(--primary);
            color: white;
        }
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