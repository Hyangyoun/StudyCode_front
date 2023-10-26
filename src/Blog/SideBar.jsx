import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

/** 블로그 메인  */

function SideBar(props){
    const {menuIndex, changeMenuIndex} = props;
    const navigate = useNavigate();

    return(
        <Sidebar $menuIndex={menuIndex}>
            <img className="profilePicture" src="/image/icon/profile.png" alt="프로필사진"/>
            <div className="nickName">js싫어요</div>
            <div className="follows" >
                {menuIndex !== 5 ?
                <> 
                <span onClick={() => changeMenuIndex(4)}>팔로우{}</span>
                <span onClick={() => changeMenuIndex(4)}>팔로잉{}</span>
                <div className="write">새 포스트</div>
                </>
                :
                <div className="blogName">내 토요일 내놔</div>
                }
            </div>
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
            </div >
            { menuIndex === 2 || menuIndex === 3 ?
                <div className="searchForm">
                    <input className="searchInput" type="text" />
                    <img className="searchRight" src="/image/icon/icon_searchright.png" alt="검색버튼"/>
                </div>
                :
                null
            }
            <div className="logo">
                <img src="/image/icon/logo.png" alt="메인화면으로돌아가기" onClick={() => navigate("/")}/>
                <div>블로그 설정</div>
            </div>
        </Sidebar>
    )
}

/** 블로그 사이드바 스타일 컴포넌트  */
const Sidebar = styled.div`
    width: 250px;
    min-height: 965px;
    padding-bottom: 40px;
    border-right: 1px solid var(--second);
    display: flex;
    box-sizing: border-box;
    flex-direction: column;
    align-items: center;
    position: relative;
    font-size: 15px;
    background-color: var(--background);
    z-index: 100;

    .profilePicture{
        width: 150px; height: auto;
        margin-top: 85px;
        cursor: pointer;
    }

    .nickName{
        margin-top: 10px;
        text-align: center;
        cursor: pointer;
    }
    .follows{
        margin-top: 15px;
    }

    div>span{
        margin:0 10px ;
            cursor: pointer;
            margin: 0 10px 0;
    }

    .write{
        margin-top: 10px;
        color: var(--primary);
        width: 120px; height: 30px;
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

    .blogName{
        font-size: 20px;
        font-weight: bold;
        cursor: pointer;
    }
    .cartegoryForm{
        margin-top: 70px;
        >div{
            width: 135px; height: 40px;
            margin: 10px 0;
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
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: 40px 0 60px;
    }
    
    .searchInput{
        box-sizing: border-box;
        width: 150px; height: 30px;
        padding-right: 30px;
        outline: none;
    }

    .searchRight{
        position: relative;
        left: 60px;
        bottom: 27px;
    }
    .logo{
        bottom: 40px;
        position: absolute;
        cursor: pointer;
        > img{
            width: 150px;
            height: auto;
        }
        > div{
            margin-top: 5px;
            text-align: center;
            font-size: 12px;
            color: var(--second);
            &:hover {
                color: var(--primary);
            }
        }
    }
    `

export default SideBar