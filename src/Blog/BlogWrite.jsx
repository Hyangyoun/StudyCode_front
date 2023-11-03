import styled from "styled-components"
import Editer, { buttonType } from "../MarkDownEditer/Editer";
import React, { useState } from "react";

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

    const [editOver, setEditOver] = useState(""); //에디터 사용을 위해 가져온값

    const [addFolder,setAddFolder] = useState(false) //폴더 추가 버튼

    const [nextButton , setNextButton] = useState(false) //글다쓰고 최종선택으로 넘어가기 직전 버튼

    ////////////////////////////////////최종선택 ////////////////////////////

    const [selectButton , setSelectButton] = useState(true);    // 최종선택에서 공개 비공개 선택버튼

    const [selectCartegory , setSelectCartegory] = useState(false)  //최종선택에서 카테고리 선택버튼

    return(
        <WriteStyle $addFolder={addFolder}  $selectButton={selectButton} 
        $selectCartegory={selectCartegory} $nextButton={nextButton}>
            <div className="head"></div>
            <div className="Form">                 {/**폼을 만든이유는 input세로정렬을 위해 만듬 */}
                <input maxLength={15} className="title" placeholder="제목을 입력하세요"/>
                <div className="tagBox">
                    {tagList.map((item , index) => <div key={index}>{item}</div>)}
                    <input value={tagName} onChange={(e) => {setTagName(e.target.value)}}
                    onKeyDown={handleTagList} className="taginput" placeholder="태그를 입력하세요"/>
                </div>
            </div>
            <div className="writeForm">             {/**writeForm 으로 감싼이유는 inportFile의 위치 고정을 위함 */}
                <Editer value={editOver} setValue={setEditOver} height={500} buttonList={[
                    [buttonType.title1, buttonType.title2, buttonType.title3],
                    [buttonType.bold, buttonType.italic, buttonType.strikethrough],
                    [buttonType.code, buttonType.codeBlock, buttonType.quote, buttonType.link, buttonType.image, buttonType.line]
                ]} />
                <ul className="importFile">
                    <li>파일첨부</li>
                    <li >
                        <div>x</div>
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
                    <li >+</li>
                </ul>
            </div>
            <div className="writeBtn" onClick={() => setNextButton(true)}>다음</div>
{/* ///////////////////////////// 최종선택////////////////////////////////////////////////////////// */}
            <div className="lastPreview">
                <img src="/image/icon/logo.png" alt="로고"/>
                <div className="addSection">
                    <div className="imgSection">
                        <div>
                            <img src="/image/icon/addimage.png" alt="이미지추가"/>
                            <span>썸네일 이미지 추가</span>
                        </div>
                    </div>
                    <div className="categorySection">{
                        selectCartegory ?
                            <div className="chooseCategory">카테고리 선택
                                <ul>
                                    <li>프로젝트</li>
                                    <li>스터디</li>
                                    <li>코테</li>
                                    <li>기타</li>
                                </ul>
                                <div className="chooseButton">
                                    <div>취소</div>
                                    <div  onClick={() => setSelectCartegory(true)}>선택하기</div>
                                </div> 
                            </div>
                            :
                            <>
                                <div className="addcartegory" onClick={() => setSelectCartegory(false)}>
                                    <img src="/image/icon/addcategory.png" alt="카테고리추가"/>카테고리에 추가하기
                                </div>
                                <div className="publicPrivate">
                                    <div onClick={() => setSelectButton(true)}>공개</div>
                                    <div onClick={() => setSelectButton(false)}>비공개</div>
                                </div>
                            </>
                    }</div>
                </div>
                <div className="yesOrNoBtn">
                    <div onClick={() => setNextButton(false)}>다시 수정하기</div>
                    <div>올리기</div>
                </div>
            </div>
        </WriteStyle>
        
    )
}

const WriteStyle = styled.form`
    width: 100%;
    height: auto;

    .head{                              ///////////////로고/////////////
        width: 90%;
        height: 150px;
        background-color: aqua;
        margin: auto;
    }

    .Form{                             ///////////////타이틀이랑태그/////////////
        width: 85%;
        margin: auto;
        display: flex;
        flex-direction: column;

        .title{                             ///////////////타이틀/////////////
            font-size: 20px;
            font-weight: bold;
            outline: none;
            border: 0;
            border-bottom: 2px solid var(--second);
            background-color: var(--background);
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
        &>input{                             ///////////////taginput과 서로영행받음(추측)/////////////
            width: 90%;
            height: 60px;
        }
    }

    .writeForm{                             ///////////////글쓰기 공간/////////////
        position: relative;
    
        .importFile{                        ///////////////파일첨부/////////////
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
            &>li{                             ///////////////파일첨부안에 내용속성/////////////
                height: 30px;
                font-size: 15px;
                font-weight: normal;
                border-bottom: 1px solid var(--second);
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 0;

                    &:first-child{         ////////// 파일첨부 글씨
                        font-size: 20px;
                        position: relative;
                    }

                    div:first-child{       //////////X 버튼
                        margin-left: 15px;
                        margin-right: 10px;
                        cursor: pointer;
                    }
                    div:last-child{        //////////// 폴더선택
                        display: block;
                        width:80px;
                        text-align: end;
                        margin-left: 255px;
                        overflow:hidden;
                        white-space: nowrap; 		// 아래줄로 내려가는 것을 막기위해
                        cursor: pointer;
                    }
                    div:last-child:after{  //////////// 화살표
                        content: url("./image/icon/arrow1.png");
                    }
                    &:last-child{           /////////////// +버튼
                        background-color: var(--second2);
                        justify-content: center;
                        border-bottom: 0;
                        cursor: pointer;
                    }
                    .selectFolder{          /////////////파일첨부안에 내용들
                        display: ${(props) => props.$addFolder ? "block" : "none"};
                        width: 80px;
                        height: auto;
                        padding: 0;
                        list-style: none;
                        position: absolute;
                        right: 5px;
                        border: 1px solid var(--second);
                        background-color: var(--background);

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
    .writeBtn{                               ///////////////다음으로 넘어가는 버튼/////////////
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

    /////////////////////////////////////// 최종선택 칸////////////////////////////

    .lastPreview{ 
        width: 100%;
        height: 100%;
        position: fixed;
        transition: 1.5s ease-in-out;
        transition-delay: 0s;
        top: ${props => props.$nextButton ? 0 : 100}vh;
        left: 0px;
        background-color: var(--background);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        .addSection{                            /////////////// 공간나누는 영역/////////////
            width: 875px;
            height: 450px;
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            margin: 20px auto 0;

            .imgSection{                        ///////////////왼쪽 그림 영역/////////////
                width: 50%;
                height: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
                border-right: 1px solid var(--second);

                &>div{                 ///////////////왼쪽 그림과 글씨 정렬하는 div/////////////
                    width: 400px;
                    height: 250px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    flex-direction: column;
                    background-color: var(--second2);

                    &>img{
                        margin-bottom: 15px;
                    }
                    &>span{
                        font-size: 15px;
                        color: var(--second);
                    }
                }
            }

            .categorySection{           ///////////////오른쪽 카테고리 영역/////////////
                width: 50%;
                display: flex;
                align-items:center;
                flex-direction: column;
                font-size: 15px;

                .chooseCategory{           ///////////////카테고리 선택(카테고리추가하기를 누르면 나타나는영역)/////////////
                    width: 310px;
                    height: 355px;
                    display: flex;
                    flex-direction: column;
                    list-style: none;

                    &>ul{                 ///////////////카테고리 선택 영역/////////////
                        width: 100%;
                        height: 320px;
                        padding: 0;
                        margin: 0;
                        overflow: hidden;
                        border: 1px solid var(--second);
                        
                        &>li{              ///////////////카테고리들/////////////
                            width: 100%;
                            height: 25px;
                            display: flex;
                            align-items: center;
                            padding-left: 10px;
                            border-bottom: 1px solid var(--second);
                            
                            &:hover{
                                background-color: var(--second);
                                color: white;
                            }
                        }
                    }
                
                .chooseButton{                 ////////카테고리추가 누르면 나오는 취소 선택 버튼
                    display: flex;
                    flex-direction: row;
                    justify-content: end;
                    align-items: center;
                    margin-top: 10px;
                    font-size: 15px;
                    &>div:first-child{          ////////취소 버튼
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        width: 45px;
                        height: 20px;
                        color: var(--primary);
                        cursor: pointer;
                    }
                    
                    &>div:last-child{           ////////선택 버튼
                        width: 70px;
                        height: 25px;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        border: 1px solid var(--second);
                        border-radius: 3px;
                        color: var(--second);
                        cursor: pointer;
                        &:hover{
                            background-color: var(--primary);
                            color: white;
                        }
                    }
                }
                }

                .addcartegory{                 ////////카테고리에 추가하기 
                    width: 400px;
                    height: 40px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    border: 1px solid var(--second);
                    border-radius: 5px;
                    margin-bottom: 75px;
                    cursor: pointer;
                }

                .publicPrivate{                 ////////공개 비공개 유무 버튼영역div
                    width: 400px;
                    display: flex;
                    flex-direction: row;
                    justify-content: space-between;

                    &>div{                      ////////공개 비공개 유무 버튼
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        width: 180px;
                        height: 40px;
                        border-radius: 5px;
                        border:1px solid var(--second);
                        color: var(--second);
                        font-weight: normal;
                        cursor: pointer;
                        
                        &:hover{
                            border:1px solid var(--primary);
                            color: var(--primary);
                            font-weight: bold;
                        }

                        &:${props => props.$selectButton ? "first-child" : "last-child"}{
                        border:1px solid var(--primary);
                        color: var(--primary);
                        font-weight: bold;
                        }

                    }
                
                }
            }
        }
        .yesOrNoBtn{                 ////////마지막 수정 아니면 올리기 버튼
            width: 610px;
            height: 35px;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            margin: 30px auto 0;
            &>div{
                width: 265px;
                background-color: var(--second);
                border-radius: 20px;
                display: flex;
                justify-content: center;
                align-items: center;
                cursor: pointer;
            }
        }
    }
`
export default BlogWrite