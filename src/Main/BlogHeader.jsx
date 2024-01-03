import { useNavigate, useParams } from "react-router-dom"
import styled from "styled-components"
import { useState } from "react"
import postData from "../DummyData/postInfo.json"

function BlogHeader(props){

    const navigate = useNavigate()

    const sessionStorage = window.sessionStorage

    const { postInfo } =props

    const { nickname } = useParams()
    // 위쪽은 postViewer 에서 실행되고 , 아래는 blogWrite , blogConfig 에서 실행함
    return(
        <BlogHead>
            {postInfo ?<div onClick={() => navigate(`/Blog/${postInfo.nickname}/postList`)}>{postInfo.blogName}</div>
            :
            <div onClick={() => {
                navigate(`/Blog/${sessionStorage.getItem("nickname") ? 
                sessionStorage.getItem("nickname") : '/'}/overView`)}}><img src="/image/icon/logo.png" alt="STUDY_CODE"/></div>}
        </BlogHead>
    )
}

    const BlogHead = styled.div`
        width: 90%;
        height: 150px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: auto;
        & > div{
            font-size: 20px;
            font-weight: bold;
            width: auto;
            height: auto;
            cursor: pointer;
        }
    `
export default BlogHeader