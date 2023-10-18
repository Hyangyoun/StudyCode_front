import React, { useEffect, useState } from "react";
import styled from "styled-components";
import BlogSkin1Post from "../Blog/BlogSkin1Post";
import BlogSkin1Followers from "../Blog/BlogSkin1Followers";
import BlogSkin1Repo from "../Blog/BlogSkin1Repo";
import BlogSkin1Main from "../Blog/BlogSkin1Main";


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
        <BlogSection>
        <Sidebar $menuIndex={menuIndex}>
        <img className="profilePicture" src="/image/icon/profile.png" alt="프로필사진"/>
        <div className="nickName">js싫어요</div>
        <div className="follow">
            <span onClick={() => changeMenuIndex(4)}>팔로우{}</span>
            <span onClick={() => changeMenuIndex(4)}>팔로잉{}</span>
        </div>
        <span className="write">글쓰기</span>
        <div className="cartegoryForm" >
            <div onClick={() => changeMenuIndex(1)} className="overview">메인(overview)</div>
            <div onClick={() => changeMenuIndex(2)} className="post">포스트(post)</div>
            <div onClick={() => changeMenuIndex(3)} className="repository">repository</div>
        </div>
        <div className="tagBox"> Tag
            <ul>
                <li>JavaScript</li>
                <li>Spring</li>
                <li>React</li>
            </ul>
        </div >{ menuIndex === 2 || menuIndex === 3 ?
        <div className="searchForm">
            <input className="searchInput" type="text" />
            <img className="searchRight" src="/image/icon/icon_searchright.png" alt="검색버튼"/>
        </div> : null}
        <div className="home">
            <a href="./">
                <img src="/image/icon/home.png" alt="메인화면으로돌아가기"/>
            </a>
        </div>
    </Sidebar>
        <BlogHeader $screenSize={screenSize} $menuClick={menuClick} $menuIndex={menuIndex}>
            <div className="blogName">내 토요일 내놔</div>
            <div className="blogMain">
                {menuIndex === 1 ? "메인" :  menuIndex === 2 ? "post" : menuIndex === 3 ? "repository" : null}
            </div>
            <div>
                {menu ? null:
                <ul className="blogMenu">
                    <li onClick={() => setMenuClick(1)}>코테</li>
                    <li onClick={() => setMenuClick(2)}>스터디&모음</li>
                    <li onClick={() => setMenuClick(3)}>프로젝트</li>
                    <li>+</li>
                </ul>}
            </div>
                {menuIndex === 1 ? <BlogSkin1Main/> :  menuIndex === 2 ? <BlogSkin1Post/> :
                menuIndex === 3 ? <BlogSkin1Repo/> : menuIndex === 4 ? <BlogSkin1Followers/> : null}
        </BlogHeader>
        </BlogSection>
    )
}
const BlogSection = styled.div`
    display: flex;
    flex-direction: row;
    
    div{
        display: flex;
        flex-direction: column;
    }
`
/** 블로그 사이드바 스타일 컴포넌트  */
const Sidebar = styled.div`
    width: 250px; height: auto;
    min-height: 100%;
    padding-bottom: 40px;
    border-right: 1px solid var(--second);
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 15px;

    .profilePicture{
        width: 150px; height: auto;
        margin-top: 85px;
        cursor: pointer;
    }

    .nickName{
        margin-top: 10px;
        align-items: center;
        text-align: center;
        cursor: pointer;
    }

    .follow{
        margin-top: 15px;
        display: flex;
        flex-direction: row;
        >span{
            cursor: pointer;
            margin: 0 10px 0 10px;
        }
    }

    .write{
        margin-top: 10px;
        display: flex;
        justify-content:center;
        color: var(--primary);
        cursor: pointer;
        &:hover{
            font-weight: bold;
        }
    }

    .cartegoryForm{
    margin-top: 70px;
        >div{
            width: 135px; height: 40px;
            margin: 10px;
            border: 1px solid var(--second);
            display: flex;
            justify-content: center;
            align-items: center;
        }
        >div:hover{
            border: 1px solid var(--primary);
            font-weight: bold;
            cursor: pointer;
        }
        :nth-child(${props =>props.$menuIndex}){
            border: 1px solid var(--primary);
            font-weight: bold;
            cursor: pointer;
        }
    }

    .tagBox {
        margin-top: 40px;
        font-size: 20px;
        &>ul {
            display: flex;
            flex-direction: column;
            margin: 15px 0 0 30px;
            padding: 0;
            font-size: 15px;
            > li {
                display: flex;
                cursor: pointer;
            }
            > li:hover {
                color: var(--primary);
                text-decoration: underline;
            }
            li:not(:last-child) {
                margin-bottom: 10px;
            }
        }
    }

    .searchForm{
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 40px;
    }
    
    .searchInput{
        box-sizing: border-box;
        width: 150px; height: 30px;
        padding-right: 30px;
    }

    .searchRight{
        position: relative;
        left: 60px;
        bottom: 27px;
    }
    .home{
        width:30px; height: auto;
        margin-top: 20%;
        top: 900px;
        position: sticky;
        cursor: pointer;
    }
    `

const BlogHeader = styled.div`
    width:${props => props.$screenSize}px;
    height: 290px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-bottom :${props => props.$menuIndex === 3 ? null : props.$menuIndex === 4 ? null : 1}px solid var(--second);
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
            display: flex;
            flex-direction: row;
            list-style: none;
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