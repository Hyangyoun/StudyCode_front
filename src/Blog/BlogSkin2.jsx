import React, { useState } from "react";
import styled from "styled-components";

function BlogSkin2(props) {
    const [side, setSide] = useState(false)

    return (
        <>
            <SideBT onClick={() => setSide(!side)} />
            <SideBar side={side}>
                <img src="/image/icon/logo.png" alt="studycode" />
                <div className="profileBox">
                    <img src="/image/icon/profile.png" alt="프로필사진" />
                    <span>js싫어요</span>
                </div>
                <div className="newPost">새 포스트</div>
            </SideBar>
            {side ? <SideBack onClick={() => setSide(!side)}/> : null}
        </>
    )
}

const SideBar = styled.div`
    width: 250px; height: 100%;
    background-color: #FFFBF5;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: fixed;
    box-sizing: border-box;
    top: 0;
    border: 1px solid #674188;
    left: ${(props) => (props.side ? 0 : -250)}px;
    transition: 0.5s;
    z-index: 2;

    .profileBox {
        width: 180px; height: 225px;
        display: flex;
        margin-top: 20px;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;
        background-color: #F7EFE5;
        border: 1px solid #C3ACD0;
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
        border: 1px solid #C3ACD0;
        border-radius: 5px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 15px;
        cursor: pointer;

        &:hover {
            background-color: #C3ACD0;
            color: white;
        }
    }

    &>img {
        width: 130px; height: auto;
        margin-top: 40px;
    }
`

const SideBT = styled.div`
    width: 50px; height: 50px;
    background-color: #F7EFE5;
    margin: 25px 0 0 25px;
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