import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

function Header(props) {
    const [search,setSearch] = useState("");
    const [tooltip,setTooltip] = useState(false);
    const [login, setLogin] = useState(true)
    
    const navigate = useNavigate()

    const ClickProfile = () => {
        if(login) {
            setTooltip(!tooltip)
        }
        else navigate("/login")
    }

    return(
        <div>
            <Head>
                <div>
                    <img className="logo" src="/image/icon/logo.png" alt="StudyCode" onClick={() => navigate("/")} />
                    <div className="searchForm">
                        <img className="searchLeft" src="/image/icon/icon_search.png" alt="화살표" />
                        <input type="text" />
                        <img className="searchRight" src="/image/icon/icon_searchright.png" alt="검색버튼"/>
                    </div>
                    <div className="profileBox">
                        <img className="myImg"
                        src="/image/icon/profile.png"
                        alt="프로필"
                        onClick={ClickProfile} />
                        {tooltip ? <ul className="tooltips">
                        <li>마이페이지</li>
                        <li onClick={() => navigate("/blog/overView")}>내 블로그</li>
                        <li>내 팔로우</li>
                        <li>로그아웃</li>
                        </ul> : null}
                    </div>
                </div>
                <HBtn>
                    <li>BLOG</li>
                    <li>Q&A</li>
                    <li>Community</li>
                </HBtn>
            </Head>
        </div>
    )
}

    
const Head = styled.div`
    background-color: var(--background);
    width: 1200px;height: 290px;
    display:flex;
    flex-direction: column;
    align-items: center;
    margin:auto;
    border-bottom :1px solid var(--second) ;
    border-width: 0 0 1px 0;

    &>div {
        margin-top: 110px;
        width: 1200px; height: auto;
        display:flex;
        margin-bottom: 60px;
        align-items: center;
        justify-content: space-between;
    }

    .logo{
        width: 198px; height: auto;
        cursor: pointer;
    }
    .searchForm{
        position: relative;
        display: flex;
        align-items: center;
    
        &>input{
            width: 598px; height: 38px;
            border-bottom :1px solid var(--primary) ;
            border-width: 0 0 1px 0;
            padding: 12px 20px 0;
            box-sizing: border-box;
            font-size: 15px;
            outline: none;
            background-color:  var(--background);
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
        margin-right: 50px;
    }
    .myImg{
        width: 50px; height: 50px;
        cursor: pointer;
    }
    .tooltips{
        border :1px solid var(--second2) ;
        background-color: white;
        margin: 0;
        width: 116px; height: 140px;
        display: flex;
        position: relative;
        right: 65px;
        flex-direction: column;
        font-size: 15px;
        padding: 0;
        cursor: pointer;
        li:hover{
            background-color: var(--second);
            font-weight: bold;
        }
        &>li {
            display: flex;
            flex-direction: row;
            align-items: center;
            padding-left: 10px;
            height: 35px;
        }
    }
`

const HBtn = styled.ul`
    width: 1200px; height: auto;
    display:flex;
    align-items: center;
    justify-content: center;
    margin: 0;

    li{
        font-size: 15px;
        width: 185px; height:50px;
        background-color: var(--second2);
        border-radius: 50px;
        margin: 0 30px;
        display:flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
    }
`

export default Header