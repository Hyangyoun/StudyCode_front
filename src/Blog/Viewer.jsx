import styled from "styled-components"
import Review from "./Review"
import { useState } from "react"

function Viewer(props){

    const [addFolder, setAddFolder] = useState(false) //파일보기위한 버튼

    return(
        <>
            <BlogViewer $addFolder={addFolder}>
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
                    <div onClick={() => {setAddFolder(!addFolder)}} >파일첨부
                        <ul className="fileName">
                            <li >logo.png</li>
                            <li>lddd.png</li>
                        </ul>
                    </div>
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
            </BlogViewer>
                <div className="like"><img src="./image/icon/bigheart1.png" alt="좋아요"/>{12}</div>
            <Review/>
        </>
    )
}

const BlogViewer = styled.div`
    width: 1260px;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items:center;
    margin: auto;
    position: relative;

    .logo{
        width: 195px;
        height: auto;
        margin-top: 70px;
    }
    
.title{
    display: flex;
    align-items: center;
    margin-top: 55px;
    width: 875px;
    height: 60px;
    font-size: 20px;
    font-weight: bold;
    border-bottom: 1px solid var(--primary);
}
    .date{
        width: 875px;
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
        width: 875px;
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
        position: sticky;
        bottom: 100px;
        left: 200px;
        &>img{
            margin-bottom: 10px;
        }
    }
    .filebox{
        margin-top: 150px;
        width: 750px;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        position: relative;
        
        &>div{
            width: 130px;
            height: 35px;
            border-radius: 5px 5px 0 0 ;
            background-color: var(--second2);
            font-size: 15px;
            display: flex;
            align-items: center;
            justify-content: center;
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
        width: 750px;
        display: flex;
        flex-direction: column;
        align-items: center;
        .img{
            width: 100%;
        }
    }
    .contents{
        width: 750px;
        font-size: 15px;
        display: flex;
        align-items: flex-start;
    }
`
export default Viewer