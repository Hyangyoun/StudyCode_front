import React , {useState, useEffect, useRef} from "react";
import categoryInfo from "../../DummyData/categoryInfo.json"
import styled from "styled-components";
import axios from "axios";

function PostConfig(props) {
    
    const UploadImage = useRef()
    const { setNextButton , SendWriteData } = props

    // 최종선택에서 공개 비공개 선택버튼
    const [ selectButton , setSelectButton ] = useState(true);    
    const [ close, setClose ] = useState(false)

    //카테고리 state
    const [ openButton , setOpenButton ] = useState(false)
    const [chooseCategory , setChooseCategory] = useState("") //선택한 카테고리가 앞에 표시됨.
    const [categoryIndex , setCategoryIndex] = useState('')   //카테고리 인덱스를 받는state 번호에따라 css변화를 주기위한 state
    const [Categorys , setCategorys] = useState([])                  
    const [ previewImage , setPreviewImage ] = useState('')

    // 애니메이션 관련효과 useEffect
    useEffect(() => {
        let timer;
        if(close) {
            timer = setTimeout(() => setNextButton(), 500)
        }
        return () => clearTimeout(timer)
    },[close, setNextButton])

    /** 카테고리 선택시 카테고리 이름과 카테고리 넘버 까지 같이 받는 함수 */
    const HandleChooseCategory = (categoryName , e) =>{
        setChooseCategory(categoryName)
        setCategoryIndex(e.target.value)
    }

    // 이미지추가
    const AddImage = (e) => {
        const newFile = e.target.files[0]
        if(newFile){
        const reader = new FileReader();      //이미지 미리보기를 구현하기 위해 FileReader API를 사용함 (FileReader는 웹 API) 
        reader.readAsDataURL(newFile);        //readAsDataURL을 통해 파일을 URL로 만들 수 있음, 파일 정보를 주소처럼 사용 
        reader.onloadend = () => {
            setPreviewImage(reader.result);   //그 파일을 띄움
        };
        }
    };

    useEffect(() => {
        setCategorys(categoryInfo)
    })

    return(
        <LastPreview $selectButton={selectButton} $close={close}>
            <img src="/image/icon/logo.png" alt="로고"/>
            <div className="addSection">
                <div onClick={() => UploadImage.current.click()} className="imgSection">
                    <div>
                        <input type="file" accept="image/*" ref={UploadImage} style={{display: "none"}} onChange={AddImage}/>
                        <img src={previewImage ?`${previewImage}` : "/image/icon/addimage.png"} alt={previewImage ? "썸네일" : "이미지추가"}/>
                        <span>썸네일 이미지 추가</span>
                    </div>
                </div>
                <div className="categorySection">{
                    openButton ?
                    <div className="chooseCategory">카테고리 선택
                        <ul>
                            {Categorys.map((item ,index) => {
                                return(<li className={categoryIndex === index ? "active" : null} onClick={(e) => HandleChooseCategory(item.categoryName,e)} value={index} key={index}>
                                    {item.categoryName}</li> )
                            })
                            }
                        </ul>
                        <div className="chooseButton">
                            <div onClick={() => {setOpenButton(false);
                                setChooseCategory("")}}>
                                취소
                            </div>
                            <div onClick={() => setOpenButton(false)}>선택하기</div>
                        </div> 
                    </div>
                    :
                    <>
                    <div className='addcartegory' onClick={() => setOpenButton(true)}>
                        {chooseCategory ? chooseCategory : <><img src="/image/icon/addcategory.png" alt="카테고리추가"/>{"카테고리에 추가하기"}</>}
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
                <div onClick={() => SendWriteData(previewImage,selectButton,chooseCategory)}>올리기</div>
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
                        overflow:hidden;
                        cursor:pointer;
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

                                &.active{
                                    background-color:var(--second);
                                    color: white;
                                }
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
                        &:hover{
                            background-color:var(--second);
                            color:white;
                        }
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