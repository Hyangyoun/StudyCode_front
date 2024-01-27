import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";

function BlogSkin1 (props){

    const {category , blogName, userName} = props

    const navigate = useNavigate()

    return(
            <BlogHeader>
               <span className="blogName" onClick={() => navigate(`/blog/${userName}/overView`)}>{blogName}</span>
               <span className="blogMenu">
                   {
                       {
                           overView : "메인",
                           postList : "post",
                           category : "category",
                           repository : "repository",
                           followers : "follower"
                       }[category]
                   }
               </span>
            </BlogHeader>
    )
}


/**블로그 헤더 스타일 */
const BlogHeader = styled.div`
    width: auto;
    min-width: 100%;
    height: auto;
    display: inline-flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    margin-top: 80px;
    border-bottom :1px solid var(--second);
    font-size: 20px;
    font-weight: bold;

    .blogName{
        font-size: 30px!important;
        font-weight: bold;
        cursor: pointer;
    }
    .blogMenu{
        margin: 80px 0 10px 0; 
    }

`
export default BlogSkin1