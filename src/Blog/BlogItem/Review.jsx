import axios from "axios"
import { useEffect, useRef, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import styled from "styled-components"
import reviewComment from "../../DummyData/ReviewComment.json"

function Review(props) {

    const { setWarning } = props
    const amount = useRef()
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
    const [rereviewIndex , setRereviewIndex] = useState(null)

    /** 신고하기 state */
    const [ report , setReport ] = useState(false)
    const [ reportComment , setReportComment ] = useState("")
    const [ reportInput , setReportInput ] = useState("")
    const [ reportReason , setReportReason ] = useState("A")
    const [replyIndex , setreplyIndex ] = useState(null)

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
    // 댓글info 받는 state
    useEffect(() => {
        axios.get("/api/post/comment",{
            params: {
                postIndex:Number(postIndex)
            }
        })
        .then((response) => {
            setComments(response.data)
        })
        .catch((error) => { console.log(error)})
        // setComments(reviewComment)
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
    
    /** 신고버튼 누를때 나오는 함수 */
    const ClickReport = (item , commentIndex , index) =>{
        if(username){
            setReportComment(item)
            setRereviewIndex(commentIndex)
            setreplyIndex(index)
            setReport(true)
        }
        else{
            setWarning(true)
        }
    }

    /** 신고 접수하는 함수 */
    const ReportComments = () =>{
        if(reportInput != ""){
            const data = {
                postIndex : postIndex,
                reportIndex : rereviewIndex,
                replyIndex : (replyIndex == undefined ? null : replyIndex) ,
                reportReason : reportReason,
                reportComment : reportComment.content,
                reportInput : reportInput
            }
            console.log(data)
        }
        else(
            alert("신고내용을 적어주세요")
            )
            setReportInput("")
    }

    return(
        <Reviews >
            <div ref={amount} className="reviewHead">댓글</div>
            {report ? 
            <div className="IsReport">
                <div>신고하기</div>
                    <ul value={reportReason} onChange={(v) => setReportReason(v.target.value)}>
                        <li><label htmlFor="reasonA">불법정보<input type="radio" name="reason" value="A" id="reasonA" checked/></label></li>
                        <li><label htmlFor="reasonB">욕설/인신공격<input type="radio" name="reason" value="B" id="reasonB"/></label></li>
                        <li><label htmlFor="reasonC">음란성/선정성<input type="radio" name="reason" value="C" id="reasonC"/></label></li>
                        <li><label htmlFor="reasonD">개인정보노출<input type="radio" name="reason" value="D" id="reasonD"/></label></li>
                        <li><label htmlFor="reasonE">글 도배<input type="radio" name="reason" value="E" id="reasonE"/></label></li>
                        <li><label htmlFor="reasonF">기타<input type="radio" name="reason" value="F" id="reasonF"/></label></li>
                    </ul>
                    신고하실 내용을 간단하게 적어주세요
                    <span>{reportComment.nickname + ":" + reportComment.content}</span>
                    <textarea placeholder="신고 대신 답글을 적어 보시는 것은 어떨까요?" value={reportInput} onChange={(e) => setReportInput(e.target.value)}/>
                    <div className="reportBtn">
                        <div onClick={() => {setReport(false)}}>한번 더 생각해보기</div>
                        <div onClick={() => {ReportComments()}}>신고하기</div>
                    </div>
            </div>
            :
            null}
            <ul>
                <li className="reviews">
                    {comments.map((item , index) => {
                        return (
                            <div key={index} >
                                <div className="reviewId">{item.nickname}</div>
                                <div className="content">{item.content}</div>
                                <div className="reviewInfo">
                                    <span className="reviewDate">{item.commentDate}</span>
                                    <div className="rereviewBtn" onClick={() => setRereviewIndex(item.commentIndex)} >답글</div>
                                    <div className="warning" onClick={() => ClickReport(item , item.commentIndex)}>
                                        <img src="/image/icon/warning.png" alt="신고버튼"/>
                                    </div>
                            </div>
                        {/** 커멘트인덱스와 리뷰 인덱스가 같다면 답글을 보여줌 */}
                        {item.commentIndex == rereviewIndex ?
                        <>
                        {item.reply.map((item , index) => {
                            return (
                            <div className="reviewForm" key={index}>
                                <div className="reviewId">{item.nickname}</div>
                                <div className="content">{item.content}</div>
                                <div className="reviewInfo">
                                    <span className="reviewDate">{item.commentDate}</span>
                                    <div className="warning" onClick={() => ClickReport(item ,rereviewIndex ,index)}>
                                        <img src="/image/icon/warning.png" alt="신고버튼"/>
                                    </div>
                                </div>
                            </div>
                            )
                        })}
                        <div className="rereview">{
                            !username ? 
                            null
                            :
                            <div className="reviewForm">
                                <div className="reviewId">{username}</div>
                                <div className="textArea">
                                <textarea className="rereviewInput" placeholder="댓글을 입력하세요"  value={rereviewValue} onChange={(e) => setRereviewValue(e.target.value)}>{rereviewValue}</textarea>
                                <span onClick={() => {setRereviewIndex(0)}} className="closeBtn">X</span>
                                </div>
                                <div className="exportRereview" onClick={() => SubmitRereview(item.commentIndex , item)}>등록</div>
                            </div>}
                        </div>
                        </>
                        :
                        null}
                    </div>)
                    })}
                </li>
            </ul>
            {/* 댓글 입력하는 칸 */}
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
    
    .disabled{
        display: none;
    }

    .reviewHead{
        padding: 5px 10px ;
        font-size: 20px;
        font-weight: bold;
        border-bottom: 1px solid var(--second);
    }
    .IsReport{
        position: fixed;
        width: 500px;
        height: 300px;
        display: flex;
        flex-direction: column;
        align-items: center;
        z-index: 100;
        background-color: var(--second2);
        border: 1px solid var(--second);
        border-radius: 5px;
        font-size: 15px;
        font-size: 16px;
        left: 35%;
        top: 25%;
        & > div:nth-child(1){
            width: 90%;
            height: 30px;
            border-bottom: 1px solid var(--second);
            padding-left: 10px;
            display: flex;
            align-items: center;
            font-weight: bold;
            font-size: 18px !important;
        }
        & > span{
            font-size: 12px !important;
            max-width: 90%;
            max-height: 20px;
            display: block;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }
        & > ul{
            list-style: none;
            width: 90%;
            height: 70px;
            display: flex;
            flex-direction: column;
            flex-wrap: wrap;
            justify-content: center;
            align-items: center;
            background-color: var(--background);
            border-radius:5px;
            margin: 10px;
            padding: 0;
        }
        & > textarea{
            width: 90%;
            height: 60px;
            margin: 10px;
            outline: none;
            resize: none;
        }
        .reportBtn{
            width: 90%;
            height: auto;
            display: flex;
            flex-direction: row;
            justify-content: space-evenly;
            margin: 10px;
            & > div{
                width: 150px;
                height: auto;
                border: 1px solid var(--second);
                border-radius: 5px;
                text-align: center;
                cursor: pointer;
                    &:hover{
                        background-color: var(--second);
                        color: white;
                    }

            }
        }
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
    .deleteBtn{
        width: 16px;
        height: 16px;
        display: flex;
        justify-content: center;
        align-items: center;
        border: 1px solid var(--second);
        margin-left: 20px;
        &:hover{
            background-color: var(--primary);
            color: white;
        }
    }

    //대댓글 작성칸///////////////////////////////////////////////////

    .reviewForm{
        padding: 0 0 0 40px;
        position: relative;
        box-sizing: border-box;

        .textArea{
            display: flex;
            flex-direction: row;
            align-items: center;
        }

        .rereviewInput{
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
        margin-left: 30px;
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