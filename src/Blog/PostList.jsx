import React, { useEffect, useState } from "react";
import styled from "styled-components";
import postInfo from "../DummyData/postList.json"
import tagList from "../DummyData/tagList.json"
import PostListItem from "./BlogItem/PostListItem";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

function PostList(props){

    const { nickname , categoryName } = useParams()
    const { BlogTagName } = props
    const sessionStorage = window.sessionStorage

    const navigate = useNavigate()

    const [posts , setPosts] = useState([])
    const [postTag , setPostTag] = useState([])
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
        // 포스트리스트태그 받는 axio
        // axios.get("/api/post/list/tag",{
        //     params:{
        //         nickname: nickname
        //     }
        // })
        // .then((response) => {
        //     setPostTag(response.data)
        //     console.log(response.data)
        // })
        // .catch((error) => {
        //     console.log(error)
        // })

        setPostTag(tagList)
        setPosts(postInfo)
    }),[])

    // categoryName에 해당하는 postInfo 받는 axios
    // useEffect(() => {
    //     axios.post("" , {
    //         nickname: nickname,
    //         categoryName : categoryName
    //     })
    //     .then((response) => {
    //         setPosts(response.data)
    //     })
    // },[categoryName])

    // BlogTagName에 해당하는 postInfo 받는 axios
    // useEffect(() => {
    //     axios.post("" , {
    //         nickname: nickname,
    //         tagName : BlogTagName
    //     })
    //     .then((response) => {
    //         setPosts(response.data)
    //     })
    // },[BlogTagName])


    return(
        <>
        {posts.length != 0 ?
            <BlogPostList >{
                categoryName !== undefined || BlogTagName !== "" ?
                <div className="categorytitle">{categoryName !== undefined ? categoryName : BlogTagName}</div>
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
                                    <PostListItem key={index} postInfo={post} postTag={postTag.filter((item) => item.postIndex === post.postIndex)}/>
                                )
                            }
                        }
                        else {
                            return (
                                <PostListItem key={index} postInfo={post} postTag={postTag.filter((item) => item.postIndex === post.postIndex)} />
                            )
                        }
                    })}
                </ul>
            </BlogPostList> :
            <NoBlog>
                <span>등록되어있는 포스트가 없습니다.</span>
                {nickname == sessionStorage.getItem("nickname") ? <div onClick={() => navigate(`/blog/${nickname}/blogWrite`)}>포스트 작성하기</div> : null}
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