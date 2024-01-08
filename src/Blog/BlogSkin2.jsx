import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import BlogTagList from "../DummyData/blogTagList.json"

function BlogSkin2(props) {
    const {category ,userinfo ,ClickTag} = props

    const [menuIndex, setMenuIndex] = useState()
    const [tagList , setTagList] = useState([])
    const [tag , setTag] = useState()

    const {nickname} = useParams()
    
    const navigate = useNavigate();

    // const sessionStorage = window.sessionStorage
    const username = window.sessionStorage.getItem("nickname")

    const [side, setSide] = useState(false)
    const sideRef = useRef()

    /** 사이드바 자동 닫힘 함수 */
    const CloseSide = (event) => {
        if(!sideRef.current.contains(event.target)) {
            setSide(false)
        }
    }

    useEffect(() => {
        document.addEventListener('mousedown', CloseSide)
        return (() => {
            document.removeEventListener('mousedown', CloseSide)
        })
    },[])

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


    return (
        <>
            <SideBar $side={side} ref={sideRef}>
                <img src={"/image/icon/logo.png"} alt="studycode" />
                { nickname == username ?
                <span onClick={() => navigate("/blog/config")}>블로그 설정</span> : null}
                <div className="profileBox">
                    <img src={userinfo.profile ? userinfo.profile : "/image/icon/profile.png"} alt="프로필사진" />
                    <span>{nickname}</span>
                </div>
                <div className="followBox">
                    <span onClick={() => navigate(`/blog/${nickname}/followers`)}>팔로우{userinfo.followers}</span>
                    <span onClick={() => navigate(`/blog/${nickname}/followers`)}>팔로잉{userinfo.followers}</span>
                </div>
                {nickname == username ? 
                <div className="newPost" onClick={() => navigate(`/blog/${nickname}/blogWrite`)}>새 포스트</div> : null}
                <div className="listBox"> Tag
                    <ul>{
                    tagList.map((item, index) => {
                        return <li value={index} className={tag == index ? "active" : null}
                        onClick={(e) => {ChooseTag(item.tagName,e)}} key={index}>{item.tagName}</li>
                    })}</ul>
                </div>
                <div className="listBox"> Category
                    <ul>
                        <li>프로젝트</li>
                        <li>스터디</li>
                        <li>코테</li>
                    </ul>
                </div>
            </SideBar>
            {side ? <SideBack /> : null}
            <Header $menuIndex = {menuIndex}>
                <SideBT onClick={() => setSide(!side)}>
                    <img src="/image/icon/sideBT.png" alt="사이드버튼" />
                </SideBT>
                <div className="blogName">{userinfo.name}</div>
                <div className="menuBox">
                    <div className="menu">
                        <div onClick={() => navigate(`/blog/${nickname}/overView`)}>Overview</div>
                        <div onClick={() => navigate(`/blog/${nickname}/postList`)}>Post</div>
                        <div onClick={() => navigate(`/blog/${nickname}/category`)}>Category</div>
                        <div onClick={() => navigate(`/blog/${nickname}/repository`)}>Repository</div>
                    </div>
                </div>
            </Header>
        </>
    )
}

const SideBar = styled.div`
    width: 250px; height: 100%;
    background-color: var(--background);
    display: flex;
    flex-direction: column;
    align-items: center;
    position: fixed;
    box-sizing: border-box;
    top: 0;
    border: 1px solid var(--primary);
    left: ${(props) => (props.$side ? 0 : -250)}px;
    transition: 0.5s;
    z-index: 2;

    .profileBox {
        width: 180px; height: 225px;
        display: flex;
        margin-top: 20px;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;
        background-color: var(--second2);
        border: 1px solid var(--second);
        border-radius: 5px;
        box-sizing: border-box;
        font-size: 15px;
        & > img {
            width: 150px; 
            height:auto;
            border-radius: 50%;
        }
    }

    .followBox {
        display: flex;
        flex-direction: row;
        font-size: 15px;
        margin-top: 10px;
        cursor: pointer;
        &>span:last-child {
            margin-left: 10px;
        }
    }

    .newPost {
        width: 120px; height: 30px;
        margin-top: 35px;
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

    .listBox {
        font-size: 20px;
        margin-top: 35px;

        &>ul {
            display: flex;
            padding: 0;
            flex-direction: column;
            margin: 15px 0 0 30px;
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

    &>img {
        width: 130px; height: auto;
        margin-top: 40px;
    }

    &>span {
        font-size: 12px;
        cursor: pointer;
        margin-top: 3px;
        color: var(--second);
        &:hover {
            color: var(--primary);
        }
    }
`

const Header = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    align-items: center;
    width: 95%; height: 260px;
    border-width: 0 0 1px;
    border-style: solid;
    border-color: var(--second);
    box-sizing: border-box;
    margin: 0 auto;

    .blogName {
        width: 100%; height: 190px;
        font-size: 30px;
        font-weight: bold;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    
    .menuBox {
        width: 100%; height: 70px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;

        .menu {
            width: 100%; height: 70px;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;

            & > div{
                width: 175px; height: 65px;
                font-size: 20px;
                display: flex;
                align-items: center;
                justify-content: center;
                transition: 0.5s;
                cursor: pointer;
                margin: 0 60px;
                border-bottom: 2px solid var(--background);
            }

            & :not(:nth-child(${props => props.$menuIndex})) {
                opacity: 0.5;
            }

            & :nth-child(${props => props.$menuIndex}) {
                opacity: 1;
                border-bottom: 2px solid var(--primary);
            }
        }
    }
`

const SideBT = styled.div`
    width: 50px; height: 50px;
    background-color: var(--second2);
    position: absolute;
    top: 25px;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
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