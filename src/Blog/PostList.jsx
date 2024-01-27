import React, { useEffect, useState } from "react";
import styled from "styled-components";
import postInfo from "../DummyData/postList.json"
import PostListItem from "./BlogItem/PostListItem";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

function PostList(props){

    const { nickname , categoryName } = useParams()
    const { BlogTagPost , clickTagName, BlogCategoryPost ,isOwner } = props
    // const sessionStorage = window.sessionStorage
    const username = window.sessionStorage.getItem("nickname")
    const navigate = useNavigate()

        /** post와 관련된 state */
    const [posts , setPosts] = useState([])
    const [inputValue , setInputValue] = useState("")

    useEffect((() => {
        // 포스트리스트 받는 axio
        // axios.get("/api/post/list",{
        //     params:{
        //         nickname: nickname
        //     }
        // })
        // .then((response) => {
        //     setPosts(response.data)
        //     console.log(response.data)
        // })
        // .catch((error) => {
        //     console.log(error)
        // })

        setPosts(postInfo)
        console.log("post")
    }),[posts])

    //태그가 적용된 state를 포스트에 넣어서 랜더링함

    useEffect(() => {
        console.log("tag")
        setPosts(BlogTagPost)
    },[BlogTagPost])

    useEffect(() => {
        console.log("category")
        setPosts(BlogCategoryPost)
    },[BlogCategoryPost])

    return(
        <>
        {posts != null ?
            <BlogPostList >{
                categoryName !== undefined || clickTagName !== null ?
                <div className="categorytitle">{categoryName || clickTagName !== null ? categoryName || clickTagName : null}</div>
                :
                <div className="searchForm">
                    <input className="searchInput" type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)}/>
                    <img className="searchRight" src="/image/icon/icon_searchright.png" alt="검색버튼" />
                </div>
                }
                <ul>
                    {posts.map((post, index) => {
                        if(inputValue != "") {
                            if(post.title.replace(/\s+/g, "").includes(inputValue)) { // /\s+/g 빈칸 정규식
                                return (
                                    <PostListItem key={index} postInfo={post} postTag={post.tagName}/>
                                )
                            }
                        }
                        else {
                            return (
                                <PostListItem key={index} postInfo={post} postTag={post.tagName}/>
                            )
                        }
                    })}
                </ul>
            </BlogPostList> :
            <NoBlog>
                <span>등록되어있는 포스트가 없습니다.</span>
                {isOwner ? <div onClick={() => navigate(`/blog/${nickname}/blogWrite`)}>포스트 작성하기</div> : null}
            </NoBlog>
        }</>
    )
}

const BlogPostList = styled.div`

    width: 100%;
    height: auto;

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