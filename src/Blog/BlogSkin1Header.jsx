import React, { useEffect, useState } from "react";
import styled from "styled-components";

function BlogSkin1Header(props){

    const {menuIndex, changeMenuIndex} = props

    const [menuClick, setMenuClick] = useState(1) // 코테 스터디 등 메뉴 클릭 감지 state
    const [menu , setMenu] =useState(true) //코데 스터디 등 메뉴의 보이기 유무 state
    const [screenSize , setScreenSize] = useState(window.innerWidth - 250) //윈도우 크기 감지 state

/** menuIndex 변화 감지 */
    useEffect(() => {
        if(menuIndex === 2){
            return setMenu(false)
        }
        else setMenu(true)
    },[menuIndex])

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
        <BlogHeader $screenSize={screenSize} $menuClick={menuClick}>
            <div className="blogName">내 토요일 내놔</div>
            <div className="blogMain">
                {menuIndex === 1 ? "메인" :  menuIndex === 2 ? "post" : menuIndex === 3 ? "repository" : null}
            </div>
            <div>
                {menu ? null:<ul className="blogMenu">
                    <li onClick={() => setMenuClick(1)}>코테</li>
                    <li onClick={() => setMenuClick(2)}>스터디&모음</li>
                    <li onClick={() => setMenuClick(3)}>프로젝트</li>
                    <li>+</li>
                </ul>}
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
    border-bottom :1px solid var(--second) ;
    .blogName{
        margin-top: 80px;
        font-size: 30px;
        font-weight: bold;
        cursor: pointer;
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
            border :1px solid var(--second) ;
            width: 135px; height: 40px;
            align-items: center;
            justify-content: center;
            cursor: pointer;
        }
        > li:hover {
            color: white;
            background-color: var(--second);
        }
        :nth-child(${props =>props.$menuClick}){
            background-color: var(--second);
            color: white;
        }

    }

`
export default BlogSkin1Header