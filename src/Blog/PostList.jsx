import React, { useEffect, useState } from "react";
import styled from "styled-components";
import postInfo from "../DummyData/postList.json"
import PostListItem from "./BlogItem/PostListItem";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

function PostList(props){

    const sessionStorage = window.sessionStorage
    const { nickName } = useParams()

    const navigate = useNavigate()

    const [posts , setPosts] = useState([{}])

    const [inputValue , setInputValue] = useState("")

    useEffect((() => {
        // axios.post("/api/blog/get/post/list", null ,{
        //     params:{
        //         nickName: nickName
        //     }
        // })
        // .then((response) => {
        //     setPosts(response.data)
        //     console.log(response.data)
        // .catch((error) => {
        //     console.log(error)
        // })

        setPosts(postInfo)
    }),[])

    return(
        <>
        {posts ?
            <BlogPostList >
                <div className="searchForm">
                    <input className="searchInput" type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)}/>
                    <img className="searchRight" src="/image/icon/icon_searchright.png" alt="검색버튼" />
                </div>
                <ul>
                    {posts.map((post, index) => {
                        if(inputValue != "") {
                            if(post.title.includes(inputValue.replace(''))) {
                                return (
                                    <PostListItem key={index} title={post.title} content={post.content}
                                    like={post.like} date={post.date} postIndex={post.postIndex} />
                                )
                            }
                        }
                        else {
                            return (
                                <PostListItem key={index} title={post.title} content={post.content}
                                like={post.like} date={post.date} postIndex={post.postIndex} />
                            )
                        }
                    })}
                </ul>
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

    &> ul{
        margin: 0;
        padding: 0;
    }

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