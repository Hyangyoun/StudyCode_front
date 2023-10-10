import React, { useEffect, useState } from "react";
import styled from "styled-components";

/** 윈도우 크기 감지 state */
function BlogSkin1Header(props){
    const [screenSize , setScreenSize] = useState(window.innerWidth - 250)

/** 윈도우 변화 감지 */
    const HandleScreenSize = () => {
        setScreenSize(window.innerWidth - 250)
    }

/** 윈도우 변화를 감시할 이벤트 생성과 삭제 */
    useEffect(()=>{
        window.addEventListener('resize', HandleScreenSize);
        return () => { // cleanup 
            window.removeEventListener('resize', HandleScreenSize);
        }},[])

/** 블로그 헤더  */

    return(
        <BlogHeader $screenSize={screenSize}> 
            <div className="blogName">내 토요일 내놔</div>
            <div className="blogMain">메인(overview)</div>
            <div>
                <ul className="blogMenu">
                    <li>코테</li>
                    <li>스터디&모음</li>
                    <li>프로젝트</li>
                    <li>+</li>
                </ul>
            </div>
        </BlogHeader>
    )
}
const BlogHeader = styled.div`
    width:${props => props.$screenSize}px;
    height: 290px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-bottom :1px solid #C3ACD0 ;
    .blogName{
        margin-top: 80px;
        font-size: 30px;
        font-weight: bold;
    }
    .blogMain{
        margin-top: 80px;
        font-size: 20px;
        font-weight: bold;
    }
    .blogMenu{ 
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-start;
        font-size: 15px;
        > li {
            border :1px solid #C3ACD0 ;
            width: 135px; height: 40px;
            align-items: center;
            justify-content: center;
            cursor: pointer;
        }
        > li:hover {
            background-color: #C3ACD0;
        }
    }

`
export default BlogSkin1Header