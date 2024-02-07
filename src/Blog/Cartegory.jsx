import styled from "styled-components";
import { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import categoryInfo from "../DummyData/categoryInfo.json";
import axios from "axios";


function Cartegory(props){

    const navigate = useNavigate();
    const { nickname } = useParams();
    const {CLickCategory , isOwner } = props;

    /** 카테고리추가와 관련된 함수 */
    const categoryBox = useRef("");
    const focusInput = useRef();

    /** 카테고리 추가버튼 */
    const [addCategory , setAddCategory] = useState([]);
    const [ categoryTitle , setCategoryTitle] = useState("");
    const [plusCategory , setPlusCategory] = useState(false);

    const [changeCss , setChangeCss] = useState(false);
    const windowSize = window.outerWidth;
    const sessionStorage = window.sessionStorage
    const userBlogIndex = sessionStorage.getItem("blogIndex")

    useEffect(() => {
        if(plusCategory){
            focusInput.current.focus();
        }
    },[plusCategory])

    const ClickAddcategory = (event) => {
            if(!categoryBox.current.contains(event.target)){
                setPlusCategory(false)
            }
    }

    const ChangeWindow = () => {
        if(windowSize > 1240){
            setChangeCss(false)
        }
        else if(windowSize <= 1240){
            setChangeCss(true)
        }
    }

    useEffect(() => {
        // categoryNameList 받는 axios
        axios.get("/api/category/info",{
            params: {
                blogIndex:userBlogIndex
            }
        })
        .then((response) =>{
            setAddCategory(response.data)
        })
        .catch((error) => {
            console.log(error)
        })
        // setAddCategory(categoryInfo)
        ChangeWindow()
        document.addEventListener("mousedown" , ClickAddcategory)
        window.addEventListener("resize" , ChangeWindow)
        return (() => {
            document.removeEventListener("mousedown" , ClickAddcategory)
            window.removeEventListener("resize" , ChangeWindow)
        })
    },[])

    // 카테고리 추가시 보내는 axios
    const HandleAddCartegory = () =>{
        if(categoryTitle){
            let categoryBox = addCategory
            if(!categoryBox.includes(categoryTitle)){
                categoryBox.push({
                    categoryName : categoryTitle,
                    thumbnailPath : 2 //썸네일에 따라 달라질예정
                })
                setAddCategory([...categoryBox])     //기존배열을 지우고 새배열을 출력
                axios.post("/api/category/create" , {
                        blogIndex:userBlogIndex,
                        categoryName : categoryTitle
                    }).catch((error) => console.log(error))
                window.location.reload()
            }
        }
    }

    return(
        <Item $plusCategory={plusCategory} $changeCss={changeCss}>{
            addCategory.map((item ,index) => {
                return(
                <li key={index} onClick={() => CLickCategory(item.categoryIndex , item.categoryName)}>
                    <div className="itemBox">
                        {item.thumbnailPath.length > 0 ?
                        <>{item.thumbnailPath.map((item , index) => {
                            return <img key={index} src={item[index] ? item[index] : "/image/icon/non_image.png"} alt="썸네일"/>
                        })
                        }</>
                        :
                        <img src="/image/icon/logo.png" alt="썸네일."/>
                        }
                    </div>
                    <div title={item.categoryName} className="title" >{item.categoryName}</div>
                    <span className="postCount">{item.postCount ? item.postCount : 0}개의 포스트</span>
                </li>)
            })}
            {isOwner ?
            <li onClick={() => setPlusCategory(true)} ref={categoryBox} >
                {plusCategory ?
                    <>
                        <div className="addCategory">
                            <input maxLength={20} type="text" placeholder="카테고리 이름" ref={focusInput} value={categoryTitle} onChange={(e) => setCategoryTitle(e.target.value)}/>
                            <div className="addButton" onClick={() => HandleAddCartegory()} >만들기</div>
                        </div>
                        <span className="title" >카테고리 추가</span>
                    </>
                :
                    <>
                        <div className="addCategory">
                            <img className="" src="/image/icon/cartegory-icon.png" alt="카테고리 추가 이미지" />
                        </div>
                        <span className="title" >카테고리 추가</span>
                    </>
                }
            </li>
            :
            null}
            {addCategory.length == 0 ? <span className="NoCategory">
                {isOwner ? null: "카테고리가 없습니다" }
                </span> : null}
        </Item>
    )
}

const Item = styled.ul`
    user-select: none;
    display: flex;
    margin: auto;
    width:${props => props.$changeCss ? "auto" : "1200px"};
    padding: 0;
    flex-direction: row;
    justify-content: ${props => props.$changeCss ? "center" : "flex-start"};
    align-items: center;
    flex-wrap: wrap;
    .itemBox{
        width: 300px; height: 200px;
        display: flex;
        justify-content: space-around;
        align-items: center;
        flex-wrap: wrap;
        box-sizing: border-box;
        border: 2px solid var(--second);
        border-radius: 5px;
        margin-bottom: 10px;
        > Img{
        width: 130px;
        max-height: 70px;
        height: auto;
    }
    }
    .title {
        width: 100%;
        font-weight: bold;
        font-size: 20px;
        margin-right: 5px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    .postCount {
        font-size: 15px;
    }
    li {
        list-style: none;
        margin: 50px;
        max-width: 300px;
        display: flex;
        flex-direction: column;
        cursor: pointer;
    }
    .addCategory{
        width: 300px; height: 200px;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        border: 2px solid var(--second);
        border-radius: 5px;
        background-color:${props => props.$plusCategory ? "var(--second2)" : "var(--background)" };
        justify-content: center;
        align-items: center;
        margin-bottom: 10px;
        cursor: ${props => props.$plusCategory ? "auto" : "pointer"};
            & > input{
                width: 250px;
                height: 35px;
                box-sizing: border-box;
                padding-left: 10px;
                outline: none;
                border: 0px;
                margin-bottom: 20px;
            }
            .addButton{
                width: 100px;
                height: 30px;
                border: 1px solid var(--second);
                border-radius: 5px;
                background-color: var(--second);
                color: white;
                font-size: 15px;
                display: flex;
                justify-content: center;
                align-items: center;
                cursor: pointer;
            }
    }
    .NoCategory{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 500px;
        font-size: 20px;
        color: var(--primary);
    }
`
export default Cartegory