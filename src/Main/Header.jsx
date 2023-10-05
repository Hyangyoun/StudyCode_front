import React, { useState } from "react";
import styled from "styled-components";

function Header(props) {
    const [search,setSearch] = useState([]);
    const [tooltip,setTooltip] = useState(true);
    return(
        <div>
                <Head>
                <img className="logo" src="./image/icon/logo.png" alt="12" />
                        <div className="searchForm">
                            <img className="searchLeft" src="./image/icon/icon_search.png" alt="123" />
                            <input type="text" />
                            <img className="searchRight" src="./image/icon/icon_searchright.png" alt="12"/>
                        </div>
                    <div className="profileBox">
                        <img className="myImg"
                        src="./image/icon/profile.png"
                        alt="123"
                        onClick={() => {setTooltip((t) => !t)}}/>
                        {tooltip ? <ul className="tooltips">
                        <li>마이페이지</li>
                        <li>내 블로그</li>
                        <li>내 팔로우</li>
                        <li>로그아웃</li>
                        </ul> : null}
                    </div>
                </Head>
                <HBtn>
                    <li className="navBtn">BLOG</li>
                    <li className="navBtn">Q&A</li>
                    <li className="navBtn">Community</li>
                </HBtn>
        </div>
    )
}

    
const Head = styled.div`
    background-color: #FFFBF5;
    width: 1200px;height: 149px;
    display:flex;
    align-items: center;
    justify-content: space-between;
    margin:auto;
.logo{
    width: 198px;
    cursor: pointer;

}
.searchForm{
    position: relative;
    display: flex;
    align-items: center;
   
    &>input{
        width: 598px; height: 38px;
        border-bottom :1px solid #674188 ;
        border-width: 0 0 1px 0;
        padding: 12px 20px 0;
        box-sizing: border-box;
        font-size: 15px;
        outline: none;
        background-color:  #FFFBF5;
    }
    &>.searchLeft{
        position: absolute;
        margin: auto;
        object-fit: cover;
        top: 15px;
        left: 3px;
    }
    &>.searchRight{
        position: absolute;
        object-fit: cover;
        top: 14px;
        right: 1px;
        cursor: pointer;
    }
}
.profileBox{
    width: 50px; height: 50px;
    margin-right: 93px;
}
.myImg{
    width: 50px; height: 50px;
    cursor: pointer;
}
.tooltips{
    list-style: none;
    border-bottom :1px solid #F7EFE5 ;
    background-color: #ffff;
    margin-top: 0px;
    width: 116px; height: 133px;
    display: flex;
    position: relative;
    right: 65px;
    padding: 0;
    flex-direction: column;
    justify-content: space-evenly;
    font-size: 15px;
    cursor: pointer;
    li:hover{
        background-color: #C3ACD0;
    }
}
`

const HBtn = styled.ul`
    font-size: 15px;
    list-style: none;
    background-color: #FFFBF5;
    width: 1160px;height: 141px;
    display:flex;
    align-items: center;
    justify-content: center;
    margin: auto;
    border-bottom :1px solid #C3ACD0 ;
    border-width: 0 0 1px 0;

.navBtn{
    width: 185px; height:53px;
    background-color: #F7EFE5;
    border-width: 0px;
    border-radius: 50px;
    margin: 0 30px;
    display:flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
}
`

export default Header