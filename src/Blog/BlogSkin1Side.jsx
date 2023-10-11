import { useState } from "react";
import styled from "styled-components";

/** 블로그 메인  */

function BlogSkin1Side(props){
    const {menuIndex, changeMenuIndex} = props

    return(
        <Sidebar $menuIndex={menuIndex}>
            <img className="profilepicture" src="/image/icon/profile.png" alt="프로필사진"/>
            <div className="nickname">js싫어요</div>
            <div className="follow">
                <span>팔로우{}</span>
                <span>팔로잉{}</span>
            </div>
            <span className="write">글쓰기</span>
            <div className="cartegoryform" >
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
            </div>
            <a href="./">
            <img className="home" src="/image/icon/home.png" alt="프로필사진"/>
            </a>
        </Sidebar>
    )
}

/** 블로그 스타일 컴포넌트  */
const Sidebar = styled.div`
    width: 250px; height: 1180px;
    border-right: 1px solid var(--second);
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 15px;
    .profilepicture{
        width: 150px; height: auto;
        margin-top: 85px;
        cursor: pointer;
    }

    .nickname{
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

    .cartegoryform{
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
    .home{
        margin-top: 400px;
        width: 30px; height: auto;
        cursor: pointer;
    }
    `

export default BlogSkin1Side