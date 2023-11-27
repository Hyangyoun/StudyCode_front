import React , {useState, useEffect} from "react";
import styled from "styled-components"

function PostConfig({setNextButton , ClickPost}) {

    const [selectButton , setSelectButton] = useState(true);    // 최종선택에서 공개 비공개 선택버튼

    const [selectCartegory , setSelectCartegory] = useState(false)  //최종선택에서 카테고리 선택버튼

    const [close, setClose] = useState(false)

    useEffect(() => {
        let timer;

        if(close) {
            timer = setTimeout(() => setNextButton(), 500)
        }

        return () => clearTimeout(timer)
    },[close, setNextButton])
    

    return(
        <LastPreview $selectButton={selectButton} $close={close}>
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
                                <div  onClick={() => setSelectCartegory(false)}>선택하기</div>
                            </div> 
                        </div>
                        :
                        <>
                            <div className="addcartegory" onClick={() => setSelectCartegory(true)}>
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
            <div onClick={() => setClose(true)}>다시 수정하기</div>
            <div onClick={() => ClickPost()}>올리기</div>
        </div>
    </LastPreview>

    )
}

const LastPreview = styled.div`
            width: 100%;
            height: 100%;
            position: fixed;
            top: 0;
            left: 0;
            background-color: var(--background);
            display: flex;
            flex-direction: column;
            translate: 0.5s;
            justify-content: center;
            align-items: center;
            animation: slideConifg 0.5s;
            ${props => props.$close ? `
                transform: translateY(100%);
                transition: 0.5s;
            `:null}

            @keyframes slideConifg {
                0% {
                    transform: translateY(100%);
                }
                
                100% {
                    transform: translateY(0%);
                }
            }
    
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
        
`

export default PostConfig