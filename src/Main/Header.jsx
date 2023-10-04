import React from "react";
import styled from "styled-components"

function Header(props) {
    return(
    <div>
                <Head>
                    <div className="logo">ㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇ</div>
                        <div className="searchForm">
                            <img className="searchLeft" src="./image/icon/icon_search.png" alt="123" />
                            <input type="text" />
                            <img className="searchRight" src="./image/icon/icon_searchright.png" alt="12"/>
                        </div>
                <div className="myImg">이미지</div>
                        <div className="navBtn">BLOG</div>
                        <div className="navBtn">Q&A</div>
                        <div className="navBtn">Community</div>
                </Head>
    </div>
    )
}

    
const Head = styled.div`
    background-color: #FFFBF5;
    width: 1200px;height: 290px;
    display: flex;
    align-items: center;
    margin: auto;
    position: relative;
    border-bottom :1px solid #C3ACD0 ;
    border-width: 0 0 1px 0;
.logo{
    width: 198px;height:41px;
    margin-right: 103px;
    display: inline-block;
}
.searchForm{
    bottom: 25px;
    position: relative;
    &>input{
        width: 598px; height: 38px;
        border-bottom :1px solid #674188 ;
        border-width: 0 0 1px 0;
        padding: 15px 0 0 20px;
        outline: none;
        background-color:  #FFFBF5;
    }
    &>.searchLeft{
        position: relative;
        top:52px;
        margin: auto;
        object-fit: cover;
    }
    &>.searchRight{
        position: relative;
        object-fit: cover;
        left: 597px;
        bottom :25px ;
    }
}
.myImg{
    width: 50px; height: 50px;
}
.navBtn{
    width: 185px; height:53px;
    background-color: #F7EFE5;
    border-width: 0px;
    border-radius: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    
}

`
export default Header