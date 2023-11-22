import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import userInfo from "../DummyData/BlogInfo.json"

function BlogHeader(props){

    const navigate = useNavigate()

    return(
        <BlogHead>
            <div onClick={() => navigate(`/Blog/${userInfo.nickName}/postList`)}>{userInfo.name}</div>
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