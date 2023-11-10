import styled from "styled-components";
import CartegoryItem from "./BlogItem/CartegoryItem";
import { useState } from "react";
import CartegoryPost from "./BlogItem/CartegoryPost";

function Cartegory(props) {

    const [ categoryTitle , setCategoryTitle] = useState(null)

    return(
        <CartegoryList>{
                    categoryTitle === null ? 
                    <Item>
                        <CartegoryItem title={"스터디"} setCategoryTitle={setCategoryTitle}/>
                        <CartegoryItem title={"프로젝트"} setCategoryTitle={setCategoryTitle}/>
                        <CartegoryItem title={"코테"} setCategoryTitle={setCategoryTitle}/>
                        <CartegoryItem title={"잡다"} setCategoryTitle={setCategoryTitle}/>
                        <li>
                            <div className="addCartegory">
                                <img className="" src="/image/icon/cartegory-icon.png" alt="post" />
                            </div>
                            <span className="title" >카테고리 추가</span>
                        </li>
                    </Item>
                    :
                    <CartegoryPost categoryTitle={categoryTitle}/>}
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
        font-weight: bold;
        font-size: 20px;
        margin-right: 5px;
    }
    .postCount {
        font-size: 15px;
    }
    li {
        list-style: none;
        margin: 50px;
    }
    .addCartegory{
        width: 300px; height: 200px;
        box-sizing: border-box;
        display: flex;
        flex-wrap: wrap;
        border: 2px solid var(--second);
        border-radius: 5px;
        justify-content: center;
        align-items: center;
        margin-bottom: 10px;
        cursor: pointer;
    }
`
export default Cartegory