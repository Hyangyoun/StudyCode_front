import { useState } from "react";
import styled from "styled-components";

/** 블로그 메인  */

function BlogSkin1Side(props){
    const {menuIndex, changeMenuIndex} = props

    return(
        <Sidebar $menuIndex={menuIndex}>
            <img className="profilePicture" src="/image/icon/profile.png" alt="프로필사진"/>
            <div className="nickName">js싫어요</div>
            <div className="follow">
                <span>팔로우{}</span>
                <span>팔로잉{}</span>
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
            </div >{ menuIndex !== 1 ?
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
    )
}

/** 블로그 스타일 컴포넌트  */
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

export default BlogSkin1Side