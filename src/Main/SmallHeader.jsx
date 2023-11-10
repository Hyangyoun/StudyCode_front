import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

function SmallHeader(props) {
    const [search,setSearch] = useState("");

    const navigate = useNavigate()

    return(
        <div>
            <Head>
                <div>
                    <img className="logo" src="/image/icon/logo.png" alt="StudyCode" onClick={() => navigate("/")}/>
                    <div className="searchForm">
                        <img className="searchLeft" src="/image/icon/icon_search.png" alt="화살표" />
                        <input type="text" />
                        <img className="searchRight" src="/image/icon/icon_searchright.png" alt="검색버튼"/>
                    </div>
                    <div className="profileBox">
                        <img className="myImg"
                        src="/image/icon/profile.png"
                        alt="프로필"/>
                    </div>
                </div>
            </Head>
        </div>
    )
}

const Head = styled.div`
    background-color: var(--background);
    width: 1200px;height: 149px;
    display:flex;
    flex-direction: column;
    align-items: center;
    margin:auto;
    border-bottom :1px solid var(--second) ;
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
        position: relative;
    }
    .myImg{
        width: 50px; height: 50px;
        cursor: pointer;
    }
`
export default SmallHeader