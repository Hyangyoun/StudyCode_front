import { useEffect, useState } from "react";
import styled from "styled-components";
import SideBar from "./SideBar";
import PostList from "../Blog/PostList";
import Followers from "../Blog/Followers";
import Repo from "../Blog/Repo";
import OverView from "./OverView";

function BlogSkin1 (props){

    const {menuIndex, changeMenuIndex ,overView} = props

    const [menuClick, setMenuClick] = useState(1) // 코테 스터디 등 메뉴 클릭 감지 state
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
                <BlogHeader $screenSize={screenSize} $menuClick={menuClick} $menuIndex={menuIndex}>
                    <div>
                    <div className="blogName">내 토요일 내놔</div>
                    <div className="blogMain">
                        {menuIndex === 1 ? "메인" :  menuIndex === 2 ? "post" :
                        menuIndex === 3 ? "repository": menuIndex === 4 ? "팔로워": null}
                        <div>{menuIndex ? 
                            <ul className="blogMenu">
                                <li onClick={() => setMenuClick(1)}>코테</li>
                                <li onClick={() => setMenuClick(2)}>스터디&모음</li>
                                <li onClick={() => setMenuClick(3)}>프로젝트</li>
                                <li>+</li>
                            </ul>
                            :null
                            }
                        </div>
                    </div>
                    </div>
                </BlogHeader>
                {menuIndex === 1 ? <OverView overView={overView}/> :  menuIndex === 2 ? <PostList/> :
                menuIndex === 3 ? <Repo/> : menuIndex === 4 ? <Followers/> : null}
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
    flex-direction: column;
    align-items: center;
    
    .blogName{
        margin-top: 80px;
        font-size: 30px;
        font-weight: bold;
        cursor: pointer;
    }
    .blogMain{
        margin-top: 80px;
        font-size: 20px;
        font-weight: bold;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width:${props => props.$screenSize}px;
        border-bottom :${props => props.$menuIndex >= 3 ? null : 1}px solid var(--second);
    }
    .blogMenu{ 
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-start;
        font-size: 15px;
        padding: 0;
        margin: 20px 0 10px 0;
        > li {
            display: flex;
            flex-direction: row;
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
        :nth-child(${props =>props.$menuClick}){
            background-color: var(--second);
            color: white;
        }
        :not(:last-child) {
            border-right: 0;
        }

    }

`
export default BlogSkin1