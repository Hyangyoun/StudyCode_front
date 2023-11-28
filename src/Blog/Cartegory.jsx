import styled from "styled-components";
import CartegoryItem from "./BlogItem/CartegoryItem";
import { useRef, useState } from "react";
import CartegoryPost from "./BlogItem/CartegoryPost";
import { useEffect } from "react";

function Cartegory(props) {
    const { userInfo } = props

    /** 카테고리추가와 관련된 함수 */
    const categoryBox = useRef("");
    const focusInput = useRef();

    /** 카테고리 추가버튼 */
    const [ClickCategory , setClickCategory] = useState(null)
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
        document.addEventListener("mousedown" , ClickAddcategory)
        return (() => {
            document.removeEventListener("mousedown" , ClickAddcategory)
        })
    },[])

    const HandleAddCartegory = () =>{
        if(categoryTitle){
            let categoryBox = addCategory
            if(!categoryBox.includes(categoryTitle)){
                categoryBox.push(categoryTitle)
                setAddCategory([...categoryBox])     //기존배열을 지우고 새배열을 출력
            }
            setCategoryTitle('')
        }
        return ;
    }

    return(
        <CartegoryList>
                <Item $plusCategory={plusCategory}>{
                    addCategory.map((item ,index) => {
                        return <CartegoryItem key={index} title={item} userInfo={userInfo}/>
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
                                    <img className="" src="/image/icon/cartegory-icon.png" alt="post" />
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
        width: 130px; height: 70px;
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