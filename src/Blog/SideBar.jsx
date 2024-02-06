import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import BlogTagList from "../DummyData/blogTagList.json"
import axios from "axios";

/** 블로그 메인  */

function SideBar(props){

    const {category , userinfo , ClickTag , clickTagName ,isOwner } = props;
    const navigate = useNavigate();
    const sessionStorage = window.sessionStorage
    const userBlogIndex = sessionStorage.getItem("blogIndex")
    
    const [menuIndex, setMenuIndex] = useState();
    //태그 클릭됐을떄 색깔 표시해주는 state
    const [tag , setTag] = useState()
    const [tagList , setTagList] = useState([]) //태그리스트를 axios에서 데이터를 받은 state

    useEffect(() => {
        setMenuIndex({
            overView : 1,
            postList : 2,
            category : 3,
            repository : 4,
        }[category]
        )
    },[category])

    useEffect(() => {
        //태그요청하는 axios
        axios.get("/api/blog/tag",{
            params:{
                blogIndex:userBlogIndex
            }
        })
        .then((response) => {
            setTagList(response.data)
        })
        .catch((error) => {
            console.log("setTagList",error)
        })
        // setTagList(BlogTagList)
    },[])

    useEffect(() => {
        if(clickTagName){
            const tagNumber = tagList.findIndex((i) => clickTagName == i)
            ChooseTag(clickTagName,tagNumber)
        }
    },[tagList])

     // 태그를 누르면 태그index와 tag의 번호가 같은지 확인해 이미 클릭된 태그인지 확인하는 함수
    const ChooseTag = (tagName,tagNumber) =>{
        if(tag == tagNumber){
            ClickTag(null)
            setTag(null)
            }
            else{
                ClickTag(tagName)
                setTag(tagNumber)
                navigate(`/blog/${userinfo.nickname}/postList`)
            }
    }
    
    return(
        <Sidebar $menuIndex={menuIndex}>
            <img  className="profilePicture" src={userinfo.profilePicture ? userinfo.profilePicture : "/image/icon/profile.png"} alt="프로필사진"/>
            <div className="nickName">{userinfo.nickname}</div>
            {isOwner ? <div className="write" onClick={() => navigate(`/blog/${userinfo.nickname}/blogWrite`)}>새 포스트</div>: null}
            <div className="cartegoryForm" >
                <div onClick={() => navigate(`/blog/${userinfo.nickname}/overView`)}>메인(overview)</div>
                <div onClick={() => navigate(`/blog/${userinfo.nickname}/postList`)}>포스트(post)</div>
                <div onClick={() => navigate(`/blog/${userinfo.nickname}/category`)}>category</div>
                <div onClick={() => navigate(`/blog/${userinfo.nickname}/repository`)}>repository</div>
            </div>
            <div className="tagBox"> Tag
                <ul>{
                    tagList.map((item ,index) => {
                        return <li value={item} className={tag == index ? "active" : null} onClick={() => {ChooseTag(item,index)}} key={index}>{item}</li>
                    })
                    }
                </ul>
            </div >
            <div className="logo">
                <img src="/image/icon/logo.png" alt="메인화면으로돌아가기" onClick={() => navigate("/")}/>
                { isOwner ? 
                <div onClick={() => navigate("/blog/config",{state:{isOwner:isOwner}})}>블로그 설정</div> : null}
            </div>
        </Sidebar>
    )
}

/** 블로그 사이드바 스타일 컴포넌트  */
const Sidebar = styled.div`

    width: 250px;
    min-height: 100%;
    height: auto;
    padding-bottom: 40px;
    border-right: 1px solid var(--second);
    display: flex;
    box-sizing: border-box;
    flex-direction: column;
    align-items: center;
    position: absolute;
    left: 0;
    font-size: 15px;
    background-color: var(--background);;
    z-index: 100;

    .profilePicture{
        width: 150px;
        height: auto;
        border-radius: 50%;
        margin-top: 73px;
        cursor: pointer;
    }

    .nickName{
        margin-top: 10px;
        text-align: center;
        font-size: 15px;
        cursor: pointer;
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
            .active{
                color: var(--primary);
                text-decoration: underline;
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

    .logo{
        margin-bottom: 10px;
        margin-top: auto;
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