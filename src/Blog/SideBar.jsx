import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import BlogTagList from "../DummyData/blogTagList.json"

/** 블로그 메인  */

function SideBar(props){

    const { nickname } = useParams()
    const {category , userinfo , ClickTag} = props;
    const navigate = useNavigate();
    // const sessionStorage = window.sessionStorage
    const username = window.sessionStorage.getItem("nickname")

    const [menuIndex, setMenuIndex] = useState();
    /** 태그와 관련된 state */
    const [tagList , setTagList] = useState([])
    const [tag , setTag] = useState()

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
        // axios.get("api" , {
        //     params:{
        //         nickname:nickname
        //     }
        // })
        // .then((response) => {
        //     setTagList(response.data);
        // })
        // .catch((error) => {
        //     console.log(error);
        // });
        setTagList(BlogTagList)
    })

    const ChooseTag = (tagName,e) =>{
        if(tag == e.target.value){
            ClickTag('')
            setTag()
        }
        else{
            ClickTag(tagName)
            setTag(e.target.value)
        }
        navigate(`/blog/${nickname}/postList`)
    }
    return(
        <Sidebar $menuIndex={menuIndex}>
            <img  className="profilePicture" src={userinfo.profile ? userinfo.profile : "/image/icon/profile.png"} alt="프로필사진"/>
            <div className="nickName">{nickname}</div>
            <div className="follows" >
                <span onClick={() => navigate(`/blog/${nickname}/followers`)}>팔로우{userinfo.followers}</span>
                <span onClick={() => navigate(`/blog/${nickname}/followers`)}>팔로잉{userinfo.followers}</span>
            </div>
                {nickname == username ? 
                <div className="write" onClick={() => navigate(`/blog/${nickname}/blogWrite`)}>새 포스트</div>: null}
            <div className="cartegoryForm" >
                <div onClick={() => navigate(`/blog/${nickname}/overView`)} className="overview">메인(overview)</div>
                <div onClick={() => navigate(`/blog/${nickname}/postList`)} className="post">포스트(post)</div>
                <div onClick={() => navigate(`/blog/${nickname}/category`)} className="post">category</div>
                <div onClick={() => navigate(`/blog/${nickname}/repository`)} className="repository">repository</div>
            </div>
            <div className="tagBox"> Tag
                <ul>{
                    tagList.map((item ,index) => {
                        return <li value={index} className={tag == index ? "active" : null} onClick={(e) => {ChooseTag(item.tagName,e)}} key={index}>{item.tagName}</li>
                    })
                    }
                </ul>
            </div >
            <div className="logo">
                <img src="/image/icon/logo.png" alt="메인화면으로돌아가기" onClick={() => navigate("/")}/>
                { nickname == username ? 
                <div onClick={() => navigate(`/blog/config`)}>블로그 설정</div> : null}
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
    .follows{
        margin-top: 15px;
    }

    .follows>span{
        font-size: 15px;
        margin:0 10px ;
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