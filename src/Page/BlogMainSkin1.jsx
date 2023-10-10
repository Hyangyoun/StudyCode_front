import React, { useState } from "react";
import styled from "styled-components";

function BlogMainSkin1(){
    return(
        <Sidebar>
            <div>
                <img src="./image/icon/profile.png" alt="프로필사진"/>
                <div className="nickname">js싫어요</div>
                <div>
                    <span className="myfollow">팔로우{}</span>
                    <span className="myfollowing">팔로잉{}</span>
                </div>
            </div>
        </Sidebar>
    )
}

const Sidebar = styled.div`
    width: 250px; height: 1180px;
    border-right: 1px solid #C3ACD0;
    display: flex;
    flex-direction: column;
    align-items: center;
    img{
        width: 150px; height: auto;
        margin-top: 85px;
    }
    .nickname{
        margin-top: 10px;
        align-items: center;
        text-align: center;
    }
    .myfollow{

    }
    .myfollowing{

    }
`
export default BlogMainSkin1