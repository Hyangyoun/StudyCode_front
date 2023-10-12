import React, { useEffect, useState } from "react";
import styled from "styled-components";

function BlogSkin1Footer(props){
    const[postListIndex , setpostListIndex] = useState(1)

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
        <BlogFooter $postListIndex={postListIndex}>
        <ul className="nextbutton">
            <li onClick={() => {setpostListIndex(1)}}>{1}</li>
            <li onClick={() => {setpostListIndex((i) => i + 1)}}>{2}</li>
        </ul>
        </BlogFooter>
    )
}

const BlogFooter = styled.div`
    width:${props => props.$screenSize}px; height: auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin: 0;
    .nextbutton{
        list-style: none;
        margin-top: 15px;
        padding: 0;
        display: flex;
        flex-direction: row;
        cursor: pointer;

        >li{
            width: 40px; height: 40px;
            color: black;
            border-radius: 40px;
            margin: 0 5px;
            display: flex;
            justify-content: center;
            align-items: center;
            &:hover{
                background-color: var(--second);
                color: white;
            }
            &:nth-child(${props => props.$postListIndex}){
                background-color: var(--second);
                color: white;
            }
        }
    }


`

export default BlogSkin1Footer