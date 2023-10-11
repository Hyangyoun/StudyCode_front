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
        <BlogPost $screenSize={screenSize}>
            <ul>
                <li>
                    <img src="/image/icon/sample.png" alt="썸네일" />
                    <span className="title">내 토요일 내놔</span>
                    <span className="content">미안하다 이거 보여줄려고 어그로끌었다.. 
                    나루토 사스케 싸움수준 ㄹㅇ실화냐? 진짜 세계관최강자들의 싸움이다...</span>
                    <ul className="tagUl">
                            <li>#JavaScript</li>
                            <li>#JavaScript</li>
                    </ul>
                    <div>
                        <span className="like">15</span>
                        <span className="tiny">2023.09.13</span>
                    </div>
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
    li {
        display: flex;
        flex-direction: column;
        width: 700px; height: 630px;
        background-color: var(--background);
        border-radius: 5px;
        &:not(:last-child) {
            margin-right: 40px;
        }

        &>img{
            width: 700px; height: 370px;
            border-radius: 5px 5px 0 0;
            overflow: hidden;
            margin-top: 30px;
        }
        .title {
            font-size: 20px;
            margin: 20px 0 ;
        }
        .content {
            font-size: 12px;
            margin: 0 7px 45px;
        }
        .tiny {
            font-size: 10px;
        }
        .like {
            font-size: 10px;
            margin: 0 7px 0 auto;
            &::before{
                content: url("./image/icon/heart.png");
            }
        }
    }
    .tagUl {
            width: 500px; height: 117px;
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            flex-wrap: wrap;
            padding: 0;
            &>li {
                display: flex;              
                width: 103px; height: 25px;
                background-color: var(--background);
                border-radius: 50px;
                align-items: center;
                justify-content: center;
                font-size: 15px;
                color: var(--primary);
                margin: 0 10px;
            }
    }
`
export default BlogSkin1Post