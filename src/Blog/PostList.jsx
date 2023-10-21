import React, { useEffect, useState } from "react";
import styled from "styled-components";

function PostList(props){

    return(
                <BlogPost >
                    <ul>
                        <li className="post">
                            <img src="/image/icon/sample.png" alt="썸네일" />
                            <span className="title">내 토요일 내놔</span>
                            <span className="content">미안하다 이거 보여줄려고 어그로끌었다.. 
                            나루토 사스케 싸움수준 ㄹㅇ실화냐? 진짜 세계관최강자들의 싸움이다...</span>
                            <ul className="tagUl">
                                <li>JavaScript</li>
                                <li>React</li>
                            </ul>
                            <div className="likeDiv">
                                <span className="like">15</span>
                                <span>2023.09.13</span>
                            </div>
                        </li>
                    </ul>
                </BlogPost>
    )
}

const BlogPost = styled.div`
    width:80%; height: auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    ul{
        margin: 0;
        padding: 0;
    }
    .post {
        margin-top: 40px;
        display: flex;
        flex-direction: column;
        width: 700px; height: 600px;
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
            margin-bottom: 20px;
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
                display: flex;              
                width: 103px; height: 25px;
                background-color: var(--second2);
                border-radius: 50px;
                align-items: center;
                justify-content: center;
                font-size: 15px;
                color: var(--primary);
                margin: 0 5px;
                cursor: pointer;
            }
    }
`

export default PostList