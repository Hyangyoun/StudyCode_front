import styled from "styled-components"
import Editer, { buttonType } from "../MarkDownEditer/Editer";
import React, { useState } from "react";

function BlogWrite(props){

    const [editOver, setEditOver] = useState(""); //에디터 사용을 위해 가져온값

    const [addFolder,setAddFolder] = useState(false) //폴더 추가 버튼

    return(
        <WriteStyle $addFolder={addFolder}>
            <div className="head"></div>
            <div className="Form">                 {/**폼을 만든이유는 input세로정렬을 위해 만듬 */}
                <input maxLength={10} className="title" placeholder="제목을 입력하세요"/>
                <input className="tags" placeholder="태그를 입력하세요"/>
            </div>
            <div className="writeForm">             {/**writeForm 으로 감싼이유는 inportFile의 위치 고정을 위함 */}
                <Editer value={editOver} setValue={setEditOver} height={700} buttonList={[
                    [buttonType.title1, buttonType.title2, buttonType.title3],
                    [buttonType.bold, buttonType.italic, buttonType.strikethrough],
                    [buttonType.code, buttonType.codeBlock, buttonType.quote, buttonType.link, buttonType.image, buttonType.line]
                ]} />
                <ul className="importFile">
                    <li>파일첨부</li>
                    <li >
                        <div>x</div>
                        test.jsx
                        <div onClick={() => setAddFolder(!addFolder)}>폴더선택
                            <ul className="selectFolder">
                                <li>선택안함</li>
                                <li>react</li>
                                <li>javascript</li>
                                <li>java</li>
                                <li>기타</li>
                            </ul>
                        </div>
                    </li>
                    <li >+</li>
                </ul>
            </div>
            <div className="writeBtn">다음</div>
        </WriteStyle>
    )
}

const WriteStyle = styled.form`
    width: 100%;
    height: auto;
    .head{
        width: 90%;
        height: 200px;
        background-color: aqua;
        margin: auto;
    }
    .Form{
        width: 85%;
        margin: auto;
        display: flex;
        flex-direction: column;
        &>input{
            width: 90%;
            height: 60px;
        }
        .title{
            font-size: 20px;
            font-weight: bold;
            outline: none;
            border: 0;
            border-bottom: 2px solid var(--second);
            background-color: var(--background);
        }
        .tags{
            font-size: 20px;
            outline: none;
            border: 0;
            background-color: var(--background);
            color: var(--second);
            
            &::placeholder{
                color: var(--second);
            }
        }
    }
    .writeForm{
        position: relative;
    
        .importFile{
            user-select: none; // 드래그시 파란색 없애는 것 
            width: 410px;
            height: auto;
            list-style: none;
            margin: 0;
            padding: 0;
            font-size: 20px;
            position: absolute;
            left: 8%;
            top:94%;
            &>li{
                height: 30px;
                font-size: 15px;
                font-weight: normal;
                border-bottom: 1px solid var(--second);
                display: flex;
                align-items: center;
                padding: 0;

                    &:first-child{
                        font-size: 20px;
                        position: relative;
                    }

                    div:first-child{        //X 버튼
                        margin-left: 15px;
                        margin-right: 10px;
                        cursor: pointer;
                    }
                    div:last-child{         // 폴더선택
                        margin-left: 255px;
                        cursor: pointer;
                    }
                    div:last-child:after{   // 화살표
                        content: url("./image/icon/arrow1.png");
                    }
                    &:last-child{           // +버튼
                        background-color: var(--second2);
                        justify-content: center;
                        border-bottom: 0;
                        cursor: pointer;
                    }
                    .selectFolder{
                        display: ${(props) => props.$addFolder ? "block" : "none"};
                        width: 80px;
                        height: auto;
                        list-style: none;
                        padding-left:5px;
                        position: absolute;
                        right: 5px;
                        border: 1px solid var(--second);
                        background-color: var(--background);

                        &>li{
                            margin: 5px auto;
                            font-size: 12px;

                                &:not(:first-child):before{
                                    margin-right:5px ;
                                    content: url("./image/icon/folder.png");
                                }
                                
                        }
                    }
            }
        }
    }
    .writeBtn{
        margin: 140px auto 20px;
        width: 260px;
        height: 35px;
        background-color: var(--background);
        border: 1px solid var(--second);
        border-radius: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        &:hover{
            background-color: var(--second);
            color: white;
        }
    }
`
export default BlogWrite