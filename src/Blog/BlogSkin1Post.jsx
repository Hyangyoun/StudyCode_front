import React, { useEffect, useState } from "react";
import styled from "styled-components";
import BlogSkin1Footer from "../Blog/BlogSkin1Footer";

function BlogSkin1Post(props){

    const [screenSize , setScreenSize] = useState(window.innerWidth - 250) //윈도우 크기 감지 state

    /** 윈도우 변화 감지 */
    const HandleScreenSize = () => {
        setScreenSize(window.innerWidth - 250)
    }

//윈도우 변화를 감시할 이벤트 생성과 삭제
    useEffect(()=>{
        window.addEventListener('resize', HandleScreenSize);
        return () => { // cleanup 
            window.removeEventListener('resize', HandleScreenSize);
        }
    },[])

    return(
    <>
        <BlogPost $screenSize={screenSize} >
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
                        <span className="tiny">2023.09.13</span>
                    </div>
                </li>
            </ul>
        </BlogPost>
        <BlogSkin1Footer/>
    </>
    )
}

const BlogPost = styled.div`
    width:${props => props.$screenSize}px; height: auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    ul{
        margin: 0;
    }
    .post {
        margin-top: 30px;
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
            display: inline-block;
            font-size: 12px;

        }
        .like {
            cursor: pointer;
            &::before{
                object-fit: fill;
                width: auto; height: 15px;
                content: url("./image/icon/heart.png");
            }
        }
        .tiny {
            margin-left: 10px;
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
export default BlogSkin1Post