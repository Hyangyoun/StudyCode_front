import React, { useEffect, useState } from "react";
import styled from "styled-components";
import BlogHeader from "../Main/BlogHeader";
import tagList from "../DummyData/tagList.json"
import axios from "axios";

function BlogConfig(props) {

    //api 받는 state
    const [userInfo , setUserInfo] = useState([]);
    //blogconfig state
    const [blogNameInput , setBlogNameInput ] = useState('');
    const [selectSkin, setSelectSkin] = useState(1);
    //카테고리 선택 state
    const [categoryButton , setCategoryButton] = useState(false)
    const [categoryNameInput , setCategoryNameInput] = useState('');
    const [selectCategory , setSelectCategory] = useState(-1);

    useEffect(() => {
        // axios.post("/api/blog/??" , null , {
        //     params:{
        //         mem_id : mem_id,
        //     }
        // }).then((response) => {
        //     console.log(response)
        //     setUserInfo(response.data)
        // }).catch((error) =>{
        //     console.log(error)
        // })
        let test = []
        tagList.map((item) => {
            return test.push(item.tagName)
        })
        setUserInfo(test)
    } , [])
    
    // 카테고리 추가 버튼
    const HandleAddButton = () => {
        setCategoryButton(!categoryButton)
        setCategoryNameInput('')
        setSelectCategory(-1)
    }

    const HandleAddCategory = () => {
        if(categoryNameInput){
                if(!userInfo.includes(categoryNameInput)){
                    userInfo.push(categoryNameInput)
                    setUserInfo([...userInfo])     
                }
            setCategoryNameInput('')
        }
        return ;
    }

    const RemoveCategory = (event) => {
        let copy = userInfo
        setUserInfo( copy.filter((e) => e != event) )
        }

        /**데이터 보내는 양식 */
    const HandleSaved = () =>{
        const data = {
            // "mem_id" : ,
            "blogName" : blogNameInput,
            "blogSkin" : selectSkin,
            "AddcategoryName" : userInfo ,
            // "selectCategoryName" : selectCategory === -1 ? "분류없음" : selectCategory,
        }
        if(blogNameInput){
            console.log(data)
        }
        else(alert(`블로그이름을 입력해주세요`))
    }

    return (
        <>
            <BlogHeader />
            <ConfigSection $select={selectSkin} $selectCategory={selectCategory}>
                <div className="partBox">
                    <div className="partName">블로그 이름</div>
                    <input value={blogNameInput} onChange={(e) => setBlogNameInput(e.target.value)} className="nameInput" type="text" placeholder="블로그 이름 입력" />
                </div>
                <div className="partBox">
                    <div className="partName">블로그 스킨</div>
                    <div className="imgBox">
                        {selectSkin === 1 ? 
                        <>
                            <img src="/image/Source/BlogSkin1Overview.png" alt="sampleImage" />
                            <img src="/image/Source/BlogSkin1Post.png" alt="sampleImage" />
                        </>
                        :
                        <>
                            <img src="/image/Source/BlogSkin2Overview.png" alt="sampleImage" />
                            <img src="/image/Source/BlogSkin2Post.png" alt="sampleImage" />
                        </>
                        }

                    </div>
                    <div className="skinButton">
                        <div onClick={() => setSelectSkin(1)}>스킨 1</div>
                        <div onClick={() => setSelectSkin(2)}>스킨 2</div>
                    </div>
                </div>
                <div className="partBox">
                    <div className="partName">카테고리 설정</div>
                    <div className="categoryPosition">
                    <ul className="category">
                    {
                        userInfo.map((item , index) => {
                            return (
                            <li onClick={() => {setSelectCategory(index)}} key={index}>
                                <span>{item}</span><div onClick={() => RemoveCategory(item)}>x</div>
                            </li>)
                        })
                    }
                        <li className="addButton" onClick={HandleAddButton}>+</li>
                    </ul>
                    {categoryButton ? 
                        <div className="AddCategory">
                        <input value={categoryNameInput} onChange={(e) => setCategoryNameInput(e.target.value)} maxLength={20} type="text" placeholder="카테고리 명" />
                        <div onClick={HandleAddCategory}>추가하기</div>
                    </div>
                    :
                    null}
                    </div>
                </div>
                <div className="done" onClick={HandleSaved}>설정 완료하기</div>
            </ConfigSection>
        </>
    )
}

const ConfigSection = styled.div`
    width: 85%;
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;

    .partBox {
        width: 100%;
        margin-top: 50px;
    }

    .partName {
        font-size: 20px;
        font-weight: bold;
        display: flex;
        align-items: center;
        width: 100%; height: 30px;
        padding-left: 10px;
        border-bottom: 1px solid var(--second);
    }

    .nameInput {
        border: 1px solid var(--second);
        outline: none;
        margin-top: 10px;
        width: 270px; height: 40px;
        font-size: 15px;
        padding: 0 10px;
    }

    .imgBox {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-around;
        height: 500px;
        margin: 20px auto auto;
        border: 1px solid var(--second2);
        border-radius: 5px;

        > img {
            width: 550px; height: 413px;
            border: 1px solid var(--second);
        }
    }

    .skinButton {
        width: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-around;
        margin-top: 10px;

        &>div:nth-child(${props => props.$select ===1 ? 1 : 2}) {
            border-color: var(--primary);
            color: var(--primary);
        }
        &>div {
            border-color: var(--second);
            color: var(--second);
        }

        > div {
            width: 250px; height: 50px;
            border: 1px solid var(--second);
            border-radius: 5px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 20px;
            font-weight: bold;
            cursor: pointer;
        }
    }

    .categoryPosition{
        position: relative;

            .category {
                padding: 0;
                width: 400px; height: 220px;
                overflow-y: scroll;
                border: 1px solid var(--second);
                display: flex;
                flex-direction: column;
                align-items: center;
        
                &::-webkit-scrollbar {
                    /* position: absolute;
                    top: 0;
                    right: 0; */
                    width: 8px;
                }
        
                &::-webkit-scrollbar-track {
                    background: transparent;
                    border-radius: 10px;
                }
        
                &::-webkit-scrollbar-thumb {
                    background: var(--second);
                    border-radius: 10px;
                }
        
                > li {
                    width: 350px; height: 30px;
                    margin: 5px 0;
                    display: flex;
                    align-items: center;
                    border: 1px solid var(--second);
                    padding: 0 10px;
                    flex-shrink: 0;
                    cursor: pointer;
                }
        
                span {
                    font-size: 12px;
                    display: inline-block;
                    text-align: center;
                    width: 100%;
                    position: relative;
                    margin: auto;
                }

                div{
                    margin-bottom: 7px;
                }

                &> :nth-child(${props => props.$selectCategory + 1}){
                    color: white;
                    background-color: var(--second);
                }
        
                .addButton {
                    cursor: pointer;
                    color: black  !important;
                    background-color: var(--second2);
                    justify-content: center;
                }
            }
            
            .AddCategory{
                position: absolute;
                left: 401px;
                top: 0;
                width: 405px;
                height: 130px;
                background-color: var(--background);
                border: 1px solid var(--second);
                border-radius: 5px;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;

                & > input{
                    width: 375px;
                    height: 50px;
                    font-size: 15px;
                    outline: none;
                    box-sizing: border-box;
                    padding-left: 10px;
                }
                & > div{
                    width: 110px;
                    height: 40px;
                    margin: 10px 0 0 265px;
                    border: 1px solid var(--second);
                    border-radius: 5px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    &:hover{
                        cursor: pointer;
                        color: white;
                        background-color: var(--second);
                    }
                }
            }
    }

    .done {
        width: 150px;
        height: 40px;
        background-color: var(--second);
        border-radius: 5px;
        color: white;
        margin: 40px 0;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 15px;
        cursor: pointer;
    }
`

export default BlogConfig