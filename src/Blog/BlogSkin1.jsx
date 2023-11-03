import { useEffect, useState } from "react";
import styled from "styled-components";
import SideBar from "./SideBar";
import PostList from "../Blog/PostList";
import Followers from "../Blog/Followers";
import Repo from "../Blog/Repo";
import OverView from "./OverView";
import BlogViewer from "./BlogViewer";
import BlogWrite from "./BlogWrite";

function BlogSkin1 (props){

    const {menuIndex, changeMenuIndex ,overView} = props

    const [CartegoryIndex, setCartegoryIndex] = useState(1) // 코테 스터디 등 메뉴 클릭 감지 state
    

    return(
        <>{menuIndex !== 6 ?
            <BlogSection>
                <div className="blogBody">
                    {menuIndex !== 5 ?
                     <BlogHeader $CartegoryIndex={CartegoryIndex} $menuIndex={menuIndex}>
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
                     </BlogHeader> : <BlogViewer/>
                    }
                </div>
            </BlogSection>
            :
            <BlogWrite/>
        }</>
    )
}

const BlogSection = styled.div`
    display: flex;
    flex-direction: row;
    height: auto;
    .blogBody{
        width:100%;
        position: relative;
    }
`
/**블로그 헤더 스타일 */
const BlogHeader = styled.div`
    width: 100%;
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