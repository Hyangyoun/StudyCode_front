import styled from "styled-components"
import Review from "./Review"

function Viewer(props){
    return(
        <>
            <BlogViewer>
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
                <div className="contents">
                    <div >파일첨부
                        <div className="fileName">test.jsx</div>
                    </div>
                    <img src="/image/icon/sample.png" alt="썸네일" />
                </div>
            </BlogViewer>
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
    padding: 0;
    margin: auto;

    &>div{
        flex-direction: row;
    }
    .logo{
        width: 195px;
        height: auto;
        margin-top: 70px;
    }
    .date{
        width: 875px;
        height: auto;
        display: flex;
        /* justify-content: flex-start; */
        font-size:12px;
        margin-top: 5px;
        padding-left:5px;
        &>span:nth-child(2){
            margin-left: 20px;
        }

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
    .tagbox{
        width: 875px;
        height: auto;
        display: flex;
        /* justify-content: flex-start; */
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
        & > li:nth-child(6n-5){
                margin-left: 0;
            }
    }
    .contents{
        margin-top: 180px;
        width: 750px;
        >div{
            width: 130px;
            height: 35px;
            border-radius: 5px 5px 0 0 ;
            background-color: var(--second2);
            display: flex;
            align-items: center;
            position: relative;
        }
        >img{
            width: 100%;
        }
    }
    .fileName{
        width: 200px;
        min-height: 100px;
    }
`
export default Viewer