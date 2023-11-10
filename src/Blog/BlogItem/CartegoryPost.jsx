import React, { useEffect, useState } from "react";
import postList from "../../DummyData/postList.json"
import BlogPost from "./PostListItem";
import styled from "styled-components";

function CartegoryPost(props){

    const { categoryTitle } = props;

    const [categoryPosts , setCategoryPosts] = useState([])

    useEffect((() => {
        setCategoryPosts(postList)
    })
    ,[])

    return(
            <CategorySection>
                <div className="categorytitle">{categoryTitle}</div>
                <>
                    {categoryPosts.map((category ,index) =>
                    <BlogPost key={index} title={category.title} content={category.content}
                    like={category.like} data={category.date} 
                    />
                    )}
                </>
            </CategorySection>
    )
}

const CategorySection = styled.div`

    width: 100%;
    
    .categorytitle{
        width: 80%;
        height: 30px;
        border-bottom: 1px solid var(--second);
        display: flex;
        align-items: center;
        font-size: 20px;
        font-weight: bold;
        margin: 40px auto 0;
    }
`

export default CartegoryPost