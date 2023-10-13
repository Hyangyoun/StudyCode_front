import React, { useEffect, useState } from "react";
import styled from "styled-components";

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
        <BlogPost $screenSize={screenSize} >
            <ul>
                <li className="post">
                    <img src="/image/icon/sample.png" alt="썸네일" />
                    <span className="title">내 토요일 내놔</span>
                    <span className="content">미안하다 이거 보여줄려고 어그로끌었다.. 
                    나루토 사스케 싸움수준 ㄹㅇ실화냐? 진짜 세계관최강자들의 싸움이다...</span>
                    <ul className="tagUl">
                        <li>#JavaScript</li>
                        <li>#JavaScript</li>
                    </ul>
                    <span className="like">15</span>
                    <span className="tiny">2023.09.13</span>
                </li>
            </ul>
        </BlogPost>
    )
}

const BlogPost = styled.div`
    width:${props => props.$screenSize}px; height: auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin: 0;
    ul{
        margin: 0;
    }
    .post {
        display: flex;
        flex-direction: column;
        width: 700px; height: 600px;
        background-color: var(--background);
        border-bottom:1px solid var(--second);

        &>img{
            width: 700px; height: 370px;
            border-radius: 5px 5px 0 0;
            overflow: hidden;
            margin-top: 30px;
            cursor: pointer;

        }
        .title {
            font-size: 20px;
            margin: 20px 0 ;
            cursor: pointer;

        }
        .content {
            font-size: 15px;
            margin-bottom: 20px;

        }
        .tiny {
            margin: 0 5px 0 auto;
            font-size: 12px;
        }
        .like {
            font-size: 12px;
            margin: 0 5px 0 auto;
            cursor: pointer;
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
            cursor: pointer;
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
            }
    }
`
export default BlogSkin1Post