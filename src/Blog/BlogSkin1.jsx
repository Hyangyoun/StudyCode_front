import { useEffect, useState } from "react";
import styled from "styled-components";
import SideBar from "./SideBar";
import PostList from "../Blog/PostList";
import Followers from "../Blog/Followers";
import Repo from "../Blog/Repo";
import OverView from "./OverView";

function BlogSkin1 (props){

    const {menuIndex, changeMenuIndex ,overView} = props

    const [CartegoryIndex, setCartegoryIndex] = useState(1) // 코테 스터디 등 메뉴 클릭 감지 state
    const [screenSize , setScreenSize] = useState(window.innerWidth - 250) //윈도우 크기 감지 state

    /** 윈도우 변화 감지 */
    const HandleScreenSize = () => {
        setScreenSize(window.innerWidth - 250)
    }

    //윈도우 변화를 감시할 이벤트 생성과 삭제
    useEffect(()=>{
        window.addEventListener('resize', HandleScreenSize);
        return () => { // cleanup 
            window.removeEventListener('resize', HandleScreenSize);
        }
    },[])

    return(
        <BlogSection>
            <SideBar menuIndex={menuIndex} changeMenuIndex={changeMenuIndex}/>
            <div>
                <BlogHeader $screenSize={screenSize} $CartegoryIndex={CartegoryIndex} $menuIndex={menuIndex}>
                        <span >{"내 토요일 내놔"}</span>
                        <span className="blogMenu">
                            {
                                {
                                    1 : "메인",
                                    2 : "post",
                                    3 : "repository",
                                    4 : "팔로워",
                                }[menuIndex]
                            }
                        </span>
                        {menuIndex === 2 ? 
                            <ul className="categorys">
                                <li onClick={() => setCartegoryIndex(1)}>코테</li>
                                <li onClick={() => setCartegoryIndex(2)}>스터디&모음</li>
                                <li onClick={() => setCartegoryIndex(3)}>프로젝트</li>
                                <li onClick={() => setCartegoryIndex(4)}>분류없음</li>
                                <li>+</li>
                            </ul>
                            :null
                        }
                </BlogHeader>
                {
                        {
                            1 : <OverView/>,
                            2 : <PostList/>,
                            3 : <Repo/>,
                            4 : <Followers/>,
                        }[menuIndex]
                    }
            </div>
        </BlogSection>
    )
}

const BlogSection = styled.div`
    display: flex;
    flex-direction: row;
    height: auto;
`
/**블로그 헤더 스타일 */
const BlogHeader = styled.div`
    width:${props => props.$screenSize}px;
    height: auto;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    margin-top: 80px;
    border-bottom :${props => props.$menuIndex >= 3 ? null : 1}px solid var(--second);
    font-size: 20px;
    font-weight: bold;

    .blogName{
        margin-top: 80px;
        font-size: 30px;
        font-weight: bold;
        cursor: pointer;
    }
    .blogMenu{
        margin: 80px 0 10px 0; 
    }
    .categorys{ 
        width: 685px;
        height: auto;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        font-size: 15px;
        padding: 0;
        margin: 0 0 10px 0;
        flex-flow: row wrap;
        > li {
            display: flex;
            list-style: none;
            border :1px solid var(--second);
            width: 135px; height: 40px;
            align-items: center;
            justify-content: center;
            cursor: pointer;

        }
        > li:hover {
            color: white;
            background-color: var(--second);
        }
        :nth-child(${props =>props.$CartegoryIndex}){
            background-color: var(--second);
            color: white;
        }
    }

`
export default BlogSkin1