import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import { useState } from "react"
import postData from "../DummyData/postInfo.json"

function BlogHeader(props){

    const navigate = useNavigate()

    const { postInfo } =props


    return(
        <BlogHead>
            <div onClick={() => navigate(`/Blog/${postInfo.nickName}/postList`)}>{postInfo.nickName}</div>
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