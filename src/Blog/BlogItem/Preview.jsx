import React, { useState, useEffect } from "react";
import styled from "styled-components";
import MDviewer from "../../MarkDownEditer/MDviewer";

function Preview({title, content, tag, setPreview}) {

    const [close, setClose] = useState(false);

    let date = new Date();

    useEffect(() => {
        let timer;
        if(close) {
            timer = setTimeout(() => setPreview(!close), 500)
        }
        return () => clearTimeout(timer)
    },[close, setPreview])
    
    return (
        <PreviewBox $close={close}>
            <div className="closeButton" onClick={() => setClose(true)}>X</div>
            <div  className="post">
                <img className="logo" src="/image/icon/logo.png" alt="로고"/>
                <div className="title" >{title}</div>
                <div className="date">
                    <span >js싫어요</span>
                    <span >{date.toLocaleDateString()}</span>
                </div>
                <div className="tagbox">
                    {tag != null ? tag.map((item, index) => {
                        return <li key={index}>{item}</li>
                    }): null}
                </div>
                <MDviewer content={content} />
            </div >
        </PreviewBox>
    )
}

const PreviewBox = styled.div`
    width: 100%; height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    overflow-y: scroll;
    background-color: var(--background);
    animation: slide 0.5s;
    ${props => props.$close ? `
        transform: translateX(100%);
        transition: 0.5s;
    `:null}

    @keyframes slide {
        0% {
            transform: translateX(100%);
        }
    
        100% {
            transform: translateX(0%);
        }
    }

    &::-webkit-scrollbar {
        display: none;
    }

    .closeButton {
        width: 30px; height: 30px;
        position: fixed;
        top: 20px;
        right: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 30px;
        color: var(--second);
        border: 1px solid var(--second);
        border-radius: 5px;
        cursor: pointer;
        z-index: 300;
    }

    .post{
        width: 1000px;
        height: auto;
        display: flex;
        margin: auto;
        flex-direction: column;
        align-items:center;
        position: relative;

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
            position: relative;
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
    }
    
`

export default Preview