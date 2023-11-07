import React, { useEffect, useState } from "react";
import styled from "styled-components";
import postInfo from "../DummyData/postList.json"
import BlogPost from "./BlogPost";

function PostList(props){

    const [isBlog , setIsBlog] = useState(true)
    const [posts , setPosts] = useState([])

    useEffect((() => {
        setPosts(postInfo)
    }),[])

    return(
        <>
        {isBlog ?
            < >
                {posts.map((post ,index) =>
                <BlogPost key={index} title={post.title} content={post.content}
                  like={post.like} data={post.data} 
                />
                )}
            </> :
            <NoBlog>
                <span>등록되어있는 포스트가 없습니다.</span>
                <div>포스트 작성하기</div>
            </NoBlog>
        }</>
    )
}

const NoBlog = styled.div`
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 500px;
    font-size: 20px;
    color: var(--primary);

    & > div{
        width: 150px; height: 40px;
        margin-top: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 1px solid var(--second);
        border-radius: 5px;
        font-size: 15px;
        cursor: pointer;

        &:hover {
            background-color: var(--second);
            color: white;
        }
    }
`


export default PostList