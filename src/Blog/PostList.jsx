import React, { useEffect, useState } from "react";
import styled from "styled-components";
import PostList1 from "../DummyData/PostList1.json"

function PostList(props){

    const [isBlog , setIsBlog] = useState(true)
    const [posts , setPosts] = useState([])

    useEffect((() => {
        setPosts(PostList1)
    }),[])

    return(
        <>
        {isBlog ?
            <BlogPost >
                {posts.map((post) =>
                    <li className="post" key={post.Index} value={post.memId}>
                        <img  src="/image/icon/sample.png" alt="썸네일" />
                        <span className="title" >{post.title}</span>
                        <div className="content" >{post.content}</div>
                        <ul className="tagUl">
                            <li>JavaScript</li>
                            <li>React</li>
                            <li>JavaScriptttttttttttt</li>
                        </ul>
                        <div className="likeDiv">
                            <span className="like">{post.like}</span>
                            <span>{post.postDate}</span>
                        </div>
                    </li>
                )}
            </BlogPost> :
            <NoBlog>
                <span>등록되어있는 포스트가 없습니다.</span>
                <div>포스트 작성하기</div>
            </NoBlog>
        }</>
    )
}

const BlogPost = styled.ul`
    width:100%; height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: auto;
    padding: 0;

    .post {
        margin-top: 40px;
        display: flex;
        flex-direction: column;
        width: 700px; height: 580px;
        background-color: var(--background);
        border-bottom:1px solid var(--second);
        &>img{
            width: 700px; height: 370px;
            border-radius: 5px 5px 0 0;
            overflow: hidden;
            cursor: pointer;
        }
        .title {
            font-size: 20px;
            font-weight: bold;
            margin: 20px 0 ;
            cursor: pointer;
        }
        .content {
            font-size: 15px;
            margin-bottom: 15px;
            overflow:hidden;
            text-overflow: ellipsis;  	// ... 을 만들기 
            white-space: nowrap; 		// 아래줄로 내려가는 것을 막기위해
        }
        .likeDiv{
            margin-top: 20px;
            font-size: 12px;
        }
        .like {
            cursor: pointer;
            margin-right: 10px;
            &::before{
                object-fit: fill;
                width: auto; height: 15px;
                content: url("./image/icon/heart.png");
            }
        }
    }
    .tagUl {
            display: flex;
            flex-direction: row;
            justify-content: flex-start;
            align-items: center;
            flex-wrap: wrap;
            padding: 0;
            &>li {
                display: block;               //block일때만 textoverflow 사용가능
                width: 103px; height: 25px;
                background-color: var(--second2);
                border-radius: 50px;
                font-size: 15px;
                color: var(--primary);
                margin: 5px 5px 0;
                box-sizing: border-box;
                padding: 0 10px;
                overflow:hidden;
                text-overflow: ellipsis;  	// 로 ... 을 만들기 
                white-space: nowrap; 		// 아래줄로 내려가는 것을 막기위해
                text-align: center;
                cursor: pointer;
            }
            & > li:nth-child(6n-5){
                margin-left: 0;
            }
    }
`
const NoBlog = styled.div`
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
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