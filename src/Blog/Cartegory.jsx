import styled from "styled-components";
import { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import categoryInfo from "../DummyData/categoryInfo.json";
import axios from "axios";


function Cartegory(props){

    const navigate = useNavigate();
    const { nickname } = useParams();

    const sessionStorage = window.sessionStorage
    /** 카테고리추가와 관련된 함수 */
    const categoryBox = useRef("");
    const focusInput = useRef();

    /** 카테고리 추가버튼 */
    const [addCategory , setAddCategory] = useState([])
    const [ categoryTitle , setCategoryTitle] = useState();
    const [plusCategory , setPlusCategory] = useState(false);

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

    useEffect(() => {
        // categoryNameList 받는 axios
        // axios.post("" , {
        //     memId : sessionStorage.getItem("memId")
        // })
        // .then((response) =>{
        //     setAddCategory(response.data)
        // })
        // .catch((error) => {
        //     console.log(error)
        // })
        setAddCategory(categoryInfo)

        document.addEventListener("mousedown" , ClickAddcategory)
        return (() => {
            document.removeEventListener("mousedown" , ClickAddcategory)
        })
    },[])

    // 카테고리 추가시 보내는 axios
    const HandleAddCartegory = () =>{
        // if(categoryTitle){
        //     let categoryBox = addCategory
        //     if(!categoryBox.includes(categoryTitle)){
        //         categoryBox.push({ categoryName : categoryTitle })
        //         setAddCategory([...categoryBox])     //기존배열을 지우고 새배열을 출력
        //     }
        //     setCategoryTitle('')
        //     axios.post("" , {
        //         memId: sessionStorage.getItem("memId"),
        //         categoryName : categoryTitle
        //     }).then((response) =>{
        //         setAddCategory(response.data)
        //     })
        //     .catch((error) => console.log(error))
        // }
        return ;
    }

    return(
        <CartegoryList>
                <Item $plusCategory={plusCategory}>{
                    addCategory.map((item ,index) => {
                        return(
                        <li key={index} onClick={() => navigate(`/blog/${nickname}/category/${item.categoryName}`)}>
                            <div className="itemBox">
                                {item.thumnailPath ?
                                <>
                                    <img src={item.thumnailPath[0].thumnailPath} alt="썸네일"/>
                                    <img src={item.thumnailPath[1] ? item.thumnailPath[1].thumnailPath : "/image/icon/non_image.png"} alt="썸네일"/>
                                    <img src={item.thumnailPath[2] ? item.thumnailPath[2].thumnailPath : "/image/icon/non_image.png"} alt="썸네일"/>
                                    <img src={item.thumnailPath[3] ? item.thumnailPath[3].thumnailPath : "/image/icon/non_image.png"} alt="썸네일"/>
                                </>
                                :
                                <img src="/image/icon/logo.png" alt="썸네일."/>
                                }
                            </div>
                            <div title={item.categoryName} className="title" >{item.categoryName}</div>
                            <span className="postCount">{item.categoryPost ? item.categoryPost : 0}개의 포스트</span>
                        </li>)
                    }) 
                }
                    <li onClick={() => setPlusCategory(true)} ref={categoryBox} >
                        {plusCategory ?
                            <>
                                <div className="addCategory">
                                    <input maxLength={20} type="text" placeholder="카테고리 이름" ref={focusInput} value={categoryTitle} onChange={(e) => setCategoryTitle(e.target.value)}/>
                                    <div className="addButton" onClick={HandleAddCartegory} >만들기</div>
                                </div>
                                <span className="title" >카테고리 추가</span>
                            </>
                        :
                            <>
                                <div className="addCategory">
                                    <img className="" src="/image/icon/cartegory-icon.png" alt="카테고리 추가 이미지" />
                                </div>
                                <span className="title" >카테고리 추가</span>
                            </>}
                    </li>
                </Item>
        </CartegoryList>
    )
}

const CartegoryList = styled.div`
    width: 1200px; height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: auto;
`

const Item = styled.ul`
    user-select: none;
    display: flex;
    margin: auto;
    width: 1200px;
    padding: 0;
    flex-direction: row;
    justify-content: flex-start;
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
`
export default Cartegory