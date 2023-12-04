import styled from "styled-components"
import Review from "./BlogItem/Review"
import { useEffect, useRef, useState } from "react"
import BlogHeader from "../Main/BlogHeader";
import postData from "../DummyData/postInfo.json"
import tagList from "../DummyData/tagList.json"
import postFileList from "../DummyData/postFileList.json"
import MDviewer from "../MarkDownEditer/MDviewer";
import axios from "axios";
import { useParams } from "react-router-dom";

function PostViewer(props){

    const [changePosition , setChangePosition] = useState(false); //포시션 바꾸기위해 넣은 state

    const heartButton = useRef();  //하트버튼 참조용으로 만듦

    const [end , setEnd] = useState() // 댓글 위치 받음

    const [ changeHeart , setChangeHeart] = useState(false); // 하트 색 변경

    const [postInfo , setPostInfo] = useState({}) //postinfo받는 state

    const [postTag , setPostTag] = useState([]) //postTag받는 state

    const [postFile , setPostFile] = useState([]) //postFile 받는 state

    const { postIndex } =useParams()

    useEffect(() => {

        /** postdata 받아오는 axios */
        // axios.get("/api/post/info",{
        //     params:{
        //         postIndex : postIndex
        //     }
        // })
        // .then((response) => {
        //     setPostInfo(response.data)
        // })
        // .catch((error) => {console.log(error)})
        
        /** tag 받아오는 axios */
        // axios.get("/api/post/info/tag", {
        //     params:{
        //         postIndex : postIndex
        //     }
        // })
        // .then((response) => {
        //     setPostTag(response.data)
        // })
        // .catch((error) => {console.log(error)})

        // 여기는 아직 안고침
        /** file 받아오는 axios */
        // axios.post("/api/blog/get/post/file" , null ,{
        //     params:{
        //         postIndex : postIndex
        //     }
        // })
        // .then((response) => {
        //     setPostFile(response.data)
        // })
        // .catch((error) => {console.log(error)})
        setPostFile(postFileList)
        setPostInfo(postData)
        setPostTag(tagList)
    },[])
    
    /** 스크롤 이벤트를 받는 함수 */
    const ScrollEvent = () => {
        if(window.scrollY <= end - 170 ) {
            heartButton.current.style.position = "fixed"
            setChangePosition(false)
        }
        else {
            heartButton.current.style.position = "absolute"
            setChangePosition(true)
        }
    }

    /** 스크롤 변화가있을때마다 변화감지함 */
    useEffect(() => {
        document.addEventListener("scroll",ScrollEvent);
        return(() => {
            document.removeEventListener("scroll",ScrollEvent);
        })
    })

    function HandleDownLoad(item){
        const data = `${item.filePath}`
        const pom = document.createElement('a');
        const blob = new Blob(["\ufeff"+data], {type: 'text/csv;charset=utf-8;'});
        const url = window.URL.createObjectURL(blob);

        pom.href = url;
        pom.setAttribute('download', item.fileName + "성공");
        pom.click();
        pom.remove();
        }


    const [addFolder, setAddFolder] = useState(false) //파일보기위한 버튼

    return(
        <>
            <BlogHeader postInfo={postInfo}/>
            <ViewerStyle $addFolder={addFolder} $changePosition={changePosition} $end={end}>
                <div  className="heart">
                    <div className="like" ref={heartButton} onClick={() => {setChangeHeart(!changeHeart)}}>
                        <img src={ changeHeart ? "/image/icon/bigheart2.png" : "/image/icon/bigheart1.png"} alt="좋아요"/>{postInfo.recommend}
                    </div>
                </div>
                <div  className="post">
                    <div className="title" >{postInfo.title}</div>
                    <div className="date">
                        <span >{postInfo.nickname}</span>
                        <span>&#183;</span>
                        <span >{postInfo.postDate}</span>
                    </div>
                    <div className="tagbox">
                        { postTag.map((item,index) => {
                            return <li key={index}>{item.tagName}</li>
                        }) }
                        <div className="filebox">
                            <div className="fileBtn" onClick={() => {setAddFolder(!addFolder)}} >파일첨부</div>
                            <ul className="fileName">
                                {postFile.map((item ,index) => {
                                    return <li key={index} onClick={() => HandleDownLoad(item)} title={item.fileName}>{item.fileName}</li>
                                })}
                            </ul>
                        </div>
                    </div>
                    <MDviewer content={postInfo.content} width={"1000px"} />
                    
                    <Review setEnd={setEnd}/>
                </div >
            </ViewerStyle >
        </>
    )
}

const ViewerStyle = styled.div`
    user-select: none; // 드래그시 파란색 없애는 것 
    width: 1000px;
    height: auto;
    display: flex;
    flex-direction: row;
    margin: auto;
    position: relative;

    .heart{
        height: 100%;
        position: absolute;
        top: 120px;
        left: -15%;
        z-index: 10;
        margin: auto;
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
        top:${props => props.$changePosition ? props.$end - 220 : 220}px;
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
    
    .title{
        display: flex;
        align-items: center;
        margin-top: 0px;
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
        align-items: center;
        font-size:12px;
        padding-left:5px;
        &>span:nth-child(2){
            margin: 0 10px;
            font-weight: bold;
        }
    }
    .tagbox{
        width: 100%;
        height: auto;
        display: flex;
        flex-wrap: wrap;
        >li {
            display: block;               //block일때만 textoverflow 사용가능
            width: auto;
            height: 25px;
            flex-shrink: 0;
            background-color: var(--second2);
            border-radius: 10px;
            font-size: 15px;
            color: var(--primary);
            margin: 5px 5px 0;
            box-sizing: border-box;
            padding: 2px 10px ;
            cursor: pointer;
        }
        & > li:nth-child(7n-6){
                margin-left: 0;
            }
    }

    .filebox{
        width: auto;
        display: flex;
        margin-left: auto;
        flex-direction: column;
        align-items: flex-end;
        position: relative;
        
        .fileBtn{
            width: 130px;
            height: 35px;
            margin-top: 5px;
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
                width: 100%;
                display: block;
                box-sizing: border-box;
                white-space: nowrap; //한줄로 마무리
                overflow: hidden;
                text-overflow: ellipsis;
                cursor: pointer;
                &::before{
                    margin-right: 10px;
                    padding-top: 5px;
                    content: url("/image/icon/File.png");
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
        margin: 15px 45px 0 ;
        display: flex;
    }
`
export default PostViewer