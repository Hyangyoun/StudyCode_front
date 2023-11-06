import styled from "styled-components"
import Editer, { buttonType } from "../MarkDownEditer/Editer";
import React, { useState } from "react";
import PostPreview from "./PostPreview";

function BlogWrite(props){

    //////////////////// tag 입력받는 영역/////////////////////////////

    const [tagList , setTagList] = useState([]) //tag리스트 공간 state

    const [tagName , setTagName] = useState('') //input 값받는 state

    const handleTagList = (e) => {
        if(e.key === "Enter"){            //키보드 값을 받을때는 e.key 사용
            let copy = tagList
            if(!copy.includes(tagName)){
                copy.push(tagName)
                setTagList([...copy])     //기존배열을 지우고 새배열을 출력
            }
            setTagName('')
        }
        else if(e.key === "Backspace"){   
            let copy = tagList
            if(!tagName){
                copy.pop()                 //배열값에서 끝에값을 지움
                setTagList([...copy])      ////기존배열을 지우고 새배열을 출력
            }
        }
    }
    
    ///////////////////////////////////각종 기타 버튼들//////////////////////

    const [chooseFolder, SetChooseFolder] = useState(null); //폴더이름선택 버튼

    const [WriteValue, setWriteValue] = useState(""); //에디터 사용을 위해 가져온값

    const [addFolder,setAddFolder] = useState(false) //폴더 추가 버튼

    const [nextButton , setNextButton] = useState(false) //글다쓰고 최종선택으로 넘어가기 직전 버튼

    return(
        <WriteStyle $addFolder={addFolder} $nextButton={nextButton}>
            <input maxLength={15} className="title" placeholder="제목을 입력하세요"/>
            <div className="tagBox">
                {tagList.map((item , index) => <div key={index}>{item}</div>)}
                <input value={tagName} onChange={(e) => {setTagName(e.target.value)}}
                onKeyDown={handleTagList} className="taginput" placeholder="태그를 입력하세요"/>
            </div>
            <Editer value={WriteValue} setValue={setWriteValue} height={500} buttonList={[
                [buttonType.title1, buttonType.title2, buttonType.title3],
                [buttonType.bold, buttonType.italic, buttonType.strikethrough],
                [buttonType.code, buttonType.codeBlock, buttonType.quote, buttonType.link, buttonType.image, buttonType.line]
            ]} />
            <div className="importFile">
                <div className="attachSection">
                    <div>파일첨부</div>
                    <ul>
                        <li>
                            <span>x</span>
                            test.jsx
                            <div onClick={() => setAddFolder(!addFolder)}>{chooseFolder === null ? "폴더선택" : chooseFolder}
                                <ul className="selectFolder">
                                    <li onClick={() => SetChooseFolder(null)}>선택안함</li>
                                    <li onClick={() => SetChooseFolder("react")}>react</li>
                                    <li onClick={() => SetChooseFolder("javascript")}>javascript</li>
                                    <li onClick={() => SetChooseFolder("java")}>java</li>
                                    <li onClick={() => SetChooseFolder("기타")}>기타</li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <span>x</span>
                            Page.jsx
                            <div onClick={() => setAddFolder(!addFolder)}>{chooseFolder === null ? "폴더선택" : chooseFolder}
                                <ul className="selectFolder">
                                    <li onClick={() => SetChooseFolder(null)}>선택안함</li>
                                    <li onClick={() => SetChooseFolder("react")}>react</li>
                                    <li onClick={() => SetChooseFolder("javascript")}>javascript</li>
                                    <li onClick={() => SetChooseFolder("java")}>java</li>
                                    <li onClick={() => SetChooseFolder("기타")}>기타</li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                    <span>+</span>
                </div>
                <div className="previewBT">미리보기</div>
            </div>
            <div className="writeBtn" onClick={() => setNextButton(true)}>다음</div>
            <PostPreview setNextButton={setNextButton} nextButton={nextButton}/>
        </WriteStyle>
    )
}

const WriteStyle = styled.div`
    width: 85%;
    height: auto;
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;

    .title{                             ///////////////타이틀/////////////
        font-size: 20px;
        font-weight: bold;
        outline: none;
        border: 0;
        border-bottom: 2px solid var(--second);
        background-color: var(--background);
        margin: 0 auto;
        width: 100%;
        height: 60px;
    }
    
    .tagBox{
        width: 100%;
        padding: 10px 0;
        display: flex;
        flex-direction: row;
        align-items: center;
        flex-wrap: wrap;
        
        .taginput{                             ///////////////태그안에 입력값/////////////
            width: 200px;
            height: 25px;
            font-size: 15px;
            outline: none;
            border: 0;
            background-color: var(--background);
            color: var(--second);
            margin-bottom: 10px;
            padding: 0 2px;
            &::placeholder{
                color: var(--second);
                font-size: 15px;
            }
        }

        & > div {                             ///////////////태그/////////////
            width: auto;
            height: 25px;
            flex-shrink: 0;
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: var(--second);
            border-radius: 10px;
            padding: 0 10px;
            margin-bottom: 10px;
            margin-right: 10px;
            font-size: 15px;
            flex-wrap: nowrap; 
        }
    }

    .importFile {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin-top: 10px;

        .attachSection {
            width: 410px;
            user-select: none;
            font-size: 15px;

            > span {
                width: 100%;
                height: 20px;
                display: inline-block;
                background-color: var(--second2);
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 15px;
                cursor: pointer;
            }

            > div {
                font-size: 20px;
                border-bottom: 1px solid var(--second);
                padding-left: 10px;
            }

            > ul {
                padding: 0;
                margin: 0;

                > li {
                    height: 30px;
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    border-bottom: 1px solid var(--second);
                    padding: 0 10px;
                    position: relative;

                    > span {
                        margin-right: 10px;
                        cursor: pointer;
                    }

                    > div {
                        margin-left: auto;

                        &::after {
                            content: url("./image/icon/arrow1.png");
                        }
                    }

                    .selectFolder{          /////////////파일첨부안에 내용들
                        display: ${(props) => props.$addFolder ? "block" : "none"};
                        width: 80px;
                        height: auto;
                        padding: 0;
                        list-style: none;
                        position: absolute;
                        right: 10px;
                        border: 1px solid var(--second);
                        background-color: var(--background);
                        z-index: 100;

                        &>li{                 ///////////////파일첨부안에 내용속성
                            width: auto;
                            height: 20px;
                            margin: auto;
                            font-size: 12px;
                            padding-left:5px;
                            display: flex;
                            align-items: center;

                            &:hover{
                                background-color: var(--second);
                            }
                            &:first-child{
                                justify-content: center;
                            }
                            &:not(:first-child):before{
                                margin-right: 5px;
                                content: url("./image/icon/folder.png");
                            }
                                
                        }
                    }
                }
            }
        }
        
        .previewBT {
            user-select: none;
            width: 115px;
            height: 30px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            background-color: var(--second);
            border-radius: 5px;
            cursor: pointer;
        }
    }

    .writeBtn{                               ///////////////다음으로 넘어가는 버튼/////////////
        margin: 100px auto 20px;
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