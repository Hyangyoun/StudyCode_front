import React, { useEffect, useState } from "react";
import styled from "styled-components";
import postInfo from "../DummyData/postList.json"
import BlogPost from "./BlogPost";
import { useNavigate } from "react-router-dom";

function PostList(props){

    const navigate = useNavigate()

    const [isBlog , setIsBlog] = useState(true)

    const [posts , setPosts] = useState([])

    useEffect((() => {
        setPosts(postInfo)
    }),[])

    return(
        <>
        {isBlog ?
            <BlogPostList >
                <div className="searchForm">
                    <input className="searchInput" type="text" />
                    <img className="searchRight" src="/image/icon/icon_searchright.png" alt="검색버튼"/>
                </div>
                {posts.map((post ,index) =>
                <BlogPost key={index} title={post.title} content={post.content}
                  like={post.like} data={post.date} 
                />
                )}
            </BlogPostList> :
            <NoBlog>
                <span>등록되어있는 포스트가 없습니다.</span>
                <div onClick={() => navigate("blogWrite")}>포스트 작성하기</div>
            </NoBlog>
        }</>
    )
}

const BlogPostList = styled.div`

    width: 100%;
    height: auto;

    .searchForm{
    display: flex;
    justify-content: end;
    align-items: center;
    margin: 50px 80px 20px;
    position: relative;
    }
    
    .searchInput{
        box-sizing: border-box;
        width: 150px; height: 30px;
        padding: 0 0 0 30px;
        outline: none;
    }

    .searchRight{
        position: absolute;
        right: 124px;
        bottom: 4px;
    }

`

const NoBlog = styled.div`
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 80%;
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