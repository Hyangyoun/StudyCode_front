import React, { useState } from "react";
import styled from "styled-components";

function SMHeader(props) {
    const [search,setSearch] = useState("");
    const [tooltip,setTooltip] = useState(false);
    return(
        <div>
            <Head>
                <div>
                    <img className="logo" src="./image/icon/logo.png" alt="StudyCode" />
                    <div className="searchForm">
                        <img className="searchLeft" src="./image/icon/icon_search.png" alt="화살표" />
                        <input type="text" />
                        <img className="searchRight" src="./image/icon/icon_searchright.png" alt="검색버튼"/>
                    </div>
                    <div className="profileBox">
                        <img className="myImg"
                        src="./image/icon/profile.png"
                        alt="프로필"
                        onClick={() => {setTooltip(!tooltip)}} />
                        {tooltip ? <ul className="tooltips">
                        <li>마이페이지</li>
                        <li>내 블로그</li>
                        <li>내 팔로우</li>
                        <li>로그아웃</li>
                        </ul> : null}
                    </div>
                </div>
                </Head>
        </div>
    )
}

const Head = styled.div`
    background-color: #FFFBF5;
    width: 1200px;height: 149px;
    display:flex;
    flex-direction: column;
    align-items: center;
    margin:auto;
    border-bottom :1px solid #C3ACD0 ;
    border-width: 0 0 1px 0;

&>div {
    margin-top: 75px;
    width: 1200px; height: auto;
    display:flex;
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
    margin-right: 50px;
}
.myImg{
    width: 50px; height: 50px;
    cursor: pointer;
}
.tooltips{
    border :1px solid #F7EFE5 ;
    background-color: #ffffff;
    margin: 0;
    width: 116px; height: 140px;
    display: flex;
    position: relative;
    right: 65px;
    flex-direction: column;
    font-size: 15px;
    cursor: pointer;
    li:hover{
        background-color: #C3ACD0;
    }
    &>li {
        align-items: center;
        padding-left: 10px;
        height: 35px;
    }
}
`
export default SMHeader