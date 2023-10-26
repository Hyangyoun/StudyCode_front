import styled from "styled-components"
import Review from "./Review"
import { useEffect, useRef, useState } from "react"

function Viewer(props){

    const heartButton = useRef();  //하트버튼 참조용으로 만듦

    const [end , setEnd] = useState() // 댓글 위치 받음

    const [ changeHeart , setChangeHeart] = useState(false); // 하트 색 변경

    /** 스크롤 이벤트를 받는 함수 */
    const ScrollEvent = () => {
        if(window.scrollY >= 100 && window.scrollY <= end.current.offsetTop - 230) {
            heartButton.current.style.position = "fixed"
        }
        else {
            heartButton.current.style.position = "static"
            
        }
    }

    /** 스크롤 변화가있을때마다 변화감지함 */
    useEffect(() => {
        document.addEventListener("scroll",ScrollEvent);
        return(() => {
            document.removeEventListener("scroll",ScrollEvent);
        })
    })


    const [addFolder, setAddFolder] = useState(false) //파일보기위한 버튼

    return(
        <>
            <BlogViewer $addFolder={addFolder} >
                <div  className="heart">
                    <div className="like" ref={heartButton} onClick={() => {setChangeHeart(!changeHeart)}}>
                        {changeHeart ? 
                        <img src="./image/icon/bigheart2.png" alt="좋아요"/> : <img src="./image/icon/bigheart1.png" alt="좋아요"/>}{12}
                    </div>
                </div>
                <div  className="post">
                    <img className="logo" src="/image/icon/logo.png" alt="로고"/>
                    <div className="title" >내토요일 내놔</div>
                    <div className="date">
                        <span >js싫어요</span>
                        <span >2023.09.14</span>
                    </div>
                    <div className="tagbox">
                        <li>JavaScript</li>
                        <li>React</li>
                        <li>JavaScriptttttttttttt</li>                    
                    </div>
                    <div className="filebox">
                        <div className="fileBtn" onClick={() => {setAddFolder(!addFolder)}} >파일첨부</div>
                        <ul className="fileName">
                            <li >logo.png</li>
                            <li>lddd.png</li>
                        </ul>
                    </div>
                    <div className="images" >
                        <img src="/image/icon/sample.png" alt="썸네일" />
                    </div>
                    <div className="images" >
                        <img src="/image/icon/sample.png" alt="썸네일" />
                    </div>
                    <div className="contents">
                        <span>이거 보여줄려고 어그로 끌었다</span>
                    </div>
                    <Review ChangeTop={setEnd}/>
                </div >
            </BlogViewer >
        </>
    )
}

const BlogViewer = styled.div`
    width: 85%;
    height: auto;
    display: flex;
    flex-direction: row;
    margin: auto;
    position: relative;
    .heart{
        height: 80%;
        position: absolute;
        top: 230px;
        left: -6%;
        z-index: 10;

    }
    .like{
        width: 55px;
        height: 100px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background-color: var(--second2);
        border: 1px solid var(--second);
        border-radius: 35px;
        top:125px;
        cursor: pointer;

        &>img{
            width: 27px;
            height: auto;
            margin-bottom: 10px;
        }
    }

    .post{
        width: 100%;
        height: auto;
        display: flex;
        flex-direction: column;
        align-items:center;
        position: relative;

    }
    .logo{
        width: 195px;
        height: auto;
        margin: 70px auto 0;
        cursor: pointer;
    }
    
.title{
    display: flex;
    align-items: center;
    margin-top: 55px;
    width: 100%;
    height: 60px;
    font-size: 20px;
    font-weight: bold;
    border-bottom: 1px solid var(--primary);
}
    .date{
        width: 100%;
        height: auto;
        display: flex;
        font-size:12px;
        margin-top: 5px;
        padding-left:5px;
        &>span:nth-child(2){
            margin-left: 20px;
        }
}
    .tagbox{
        width: 100%;
        height: auto;
        display: flex;
        flex-wrap: wrap;
        >li {
            display: block;               //block일때만 textoverflow 사용가능
            width: 103px; height: 25px;
            background-color: var(--second2);
            border-radius: 50px;
            font-size: 15px;
            color: var(--primary);
            margin: 5px 5px 0;
            box-sizing: border-box;
            padding: 0 10px;
            overflow:hidden;
            text-overflow: ellipsis;  	// 로 ... 을 만들기 
            white-space: nowrap; 		// 아래줄로 내려가는 것을 막기위해
            text-align: center;
            cursor: pointer;
        }
        & > li:nth-child(7n-6){
                margin-left: 0;
            }
    }

    .filebox{
        margin-top: 150px;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        position: relative;
        
        .fileBtn{
            width: 130px;
            height: 35px;
            border-radius: 5px 5px 0 0 ;
            background-color: var(--second2);
            font-size: 15px;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
        }
    }
        .fileName{
            display: ${(props) => props.$addFolder ? "inline" : "none"};
            width: 200px;
            height: auto;
            min-height: 100px;
            box-sizing: border-box;
            list-style: none;
            margin: 0;
            padding-left: 15px;
            background-color: var(--second2);
            font-size: 15px;
            position: absolute;
            right: 0;
            top: 35px;
        &>li{
            display: flex;
            align-items: center;
            box-sizing: border-box;
            cursor: pointer;
            &::before{
                margin-right: 10px;
                padding-top: 5px;
                content: url("./image/icon/File.png");
            }
            &:hover{
                text-decoration: underline;
            }
            &:last-child{
                margin-bottom: 5px;
            }
        }
        }
    .images{
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        .img{
            width: 100%;
        }
    }
    .contents{
        width: 100%;
        font-size: 15px;
        display: flex;
        align-items: flex-start;
    }
`
export default Viewer