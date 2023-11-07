import { useNavigate } from "react-router-dom"
import styled from "styled-components"

function BlogHeader(props){

    const navigate = useNavigate()

    return(
        <BlogHead>
            <img onClick={() => navigate("/Blog")} src="/image/icon/logo.png" alt="로고"/>
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
        & > img{
            width: 200px;
            height: auto;
            cursor: pointer;
        }
    `
export default BlogHeader