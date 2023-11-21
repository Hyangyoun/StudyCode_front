import { useState } from "react";
import styled from "styled-components";

function BlogSkin1 (props){

    const {category , userInfo} = props

    return(
        <BlogBody>
            <BlogHeader>
               <span >{userInfo.name}</span>
               <span className="blogMenu">
                   {
                       {
                           overView : "메인",
                           postList : "post",
                           category : "category",
                           repository : "repository",
                           follower : "follower"
                       }[category]
                   }
               </span>
            </BlogHeader>
        </BlogBody>
    )
}

const BlogBody = styled.div`
    display: flex;
    flex-direction: row;
    height: auto;
    width:100%;
    position: relative;
`
/**블로그 헤더 스타일 */
const BlogHeader = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    margin-top: 80px;
    border-bottom :1px solid var(--second);
    font-size: 20px;
    font-weight: bold;

    .blogName{
        margin-top: 80px;
        font-size: 30px;
        font-weight: bold;
        cursor: pointer;
    }
    .blogMenu{
        margin: 80px 0 10px 0; 
    }
    .categorys{ 
        width: 685px;
        height: auto;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        font-size: 15px;
        padding: 0;
        margin: 0 0 10px 0;
        flex-flow: row wrap;
        > li {
            display: flex;
            list-style: none;
            border :1px solid var(--second);
            width: 135px; height: 40px;
            align-items: center;
            justify-content: center;
            cursor: pointer;

        }
        > li:hover {
            color: white;
            background-color: var(--second);
        }
    }

`
export default BlogSkin1