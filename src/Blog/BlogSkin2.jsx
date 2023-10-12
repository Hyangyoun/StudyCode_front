import React, { useEffect, useState } from "react";
import styled from "styled-components";

function BlogSkin2(props) {
    const {menuIndex, changeMenuIndex} = props

    const [side, setSide] = useState(false)
    const [screen, Setscreen] = useState(window.innerWidth)

    /** 브라우저 창크기 변경 감지 */
    const GetScreenSize = () => {
        Setscreen(window.innerWidth)
    }

    useEffect(() => {
        window.addEventListener('resize', GetScreenSize)
        return (() => {
            window.removeEventListener('resize', GetScreenSize)
        })
    },[])

    return (
        <>
            <SideBar $side={side}>
                <img src="/image/icon/logo.png" alt="studycode" />
                <div className="profileBox">
                    <img src="/image/icon/profile.png" alt="프로필사진" />
                    <span>js싫어요</span>
                </div>
                <div className="newPost">새 포스트</div>
                <div className="listBox"> Tag
                    <ul>
                        <li>JavaScript</li>
                        <li>Spring</li>
                        <li>React</li>
                    </ul>
                </div>
                <div className="listBox"> Category
                    <ul>
                        <li>프로젝트</li>
                        <li>스터디</li>
                        <li>코테</li>
                    </ul>
                </div>
            </SideBar>
            {side ? <SideBack onClick={() => setSide(!side)}/> : null}
            <Header $menuIndex = {menuIndex} $screen = {screen}>
                <SideBT onClick={() => setSide(!side)} />
                <div className="blogName">내 토요일 내놔</div>
                <div className="menuBox">
                    <div className="menu">
                        <div onClick={() => changeMenuIndex(1)}>Overview</div>
                        <div onClick={() => changeMenuIndex(2)}>Post</div>
                        <div onClick={() => changeMenuIndex(3)}>Category</div>
                        <div onClick={() => changeMenuIndex(4)}>Repository</div>
                    </div>
                    <div className="pointer"/>
                </div>
            </Header>
        </>
    )
}

const SideBar = styled.div`
    width: 250px; height: 100%;
    background-color: var(--background);
    display: flex;
    flex-direction: column;
    align-items: center;
    position: fixed;
    box-sizing: border-box;
    top: 0;
    border: 1px solid var(--primary);
    left: ${(props) => (props.$side ? 0 : -250)}px;
    transition: 0.5s;
    z-index: 2;
    overflow: scroll;

    .profileBox {
        width: 180px; height: 225px;
        display: flex;
        margin-top: 20px;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;
        background-color: var(--second2);
        border: 1px solid var(--second);
        border-radius: 5px;
        box-sizing: border-box;
        font-size: 15px;
        & > img {
            width: 150px; height: 150px;
        }
    }

    .newPost {
        width: 120px; height: 30px;
        margin-top: 35px;
        border: 1px solid var(--second);
        border-radius: 5px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 15px;
        cursor: pointer;

        &:hover {
            background-color: var(--second);
            color: white;
        }
    }

    .listBox {
        font-size: 20px;
        margin-top: 35px;

        &>ul {
            display: flex;
            padding: 0;
            flex-direction: column;
            margin: 15px 0 0 30px;
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

    &>img {
        width: 130px; height: auto;
        margin-top: 40px;
    }
`

const Header = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%; height: 260px;
    border-width: 0 0 1px;
    border-style: solid;
    border-color: var(--second);
    box-sizing: border-box;

    .blogName {
        width: 100%; height: 190px;
        font-size: 30px;
        font-weight: bold;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    
    .menuBox {
        width: 100%; height: 70px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;

        .menu {
            width: 100%; height: 70px;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;

            & > div{
                width: 175px; height: 65px;
                font-size: 20px;
                display: flex;
                align-items: center;
                justify-content: center;
                transition: 0.5s;
                cursor: pointer;
                margin: 0 60px;
                border-bottom: 2px solid white;
            }

            & :not(:nth-child(${props => props.$menuIndex})) {
                opacity: 0.5;
            }
        }
    }

    .pointer {
            position: absolute;
            width: 175px; height: 65px;
            left: ${props => (((props.$screen - 1060) / 2) - 295) + (props.$menuIndex * 295)}px;
            border-bottom: 2px solid var(--primary);
            transition: 0.5s;
        }
`

const SideBT = styled.div`
    width: 50px; height: 50px;
    background-color: var(--second2);
    position: fixed;
    top: 25px;
    left: 25px;
    cursor: pointer;
`

const SideBack = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
    width: 100%; height: 100%;
    background-color: black;
    opacity: 0.45;
`

export default BlogSkin2