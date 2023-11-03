import { useEffect, useState } from "react";
import BlogSkin2 from "../Blog/BlogSkin2";
import BlogSkin1 from "../Blog/BlogSkin1";
import styled from "styled-components";
import SideBar from "../Blog/SideBar";
import OverView from "../Blog/OverView";
import PostList from "../Blog/PostList";
import Cartegory from "../Blog/Cartegory";
import Followers from "../Blog/Followers";
import Repo from "../Blog/Repo";

function BlogPage(props){
    
    const [menuIndex, setMenuIndex] = useState(1)
    const [skin, setSkin] = useState(1)

    /** props로 넘어갈 state set 함수 */
    const ChangeMenuIndex = (value) => {
        setMenuIndex(value);
    };

    return(
        <BlogSection $skin={skin}>
            {
                {
                    1 : <>
                        <SideBar menuIndex={menuIndex} changeMenuIndex={ChangeMenuIndex} />
                        <BlogSkin1 menuIndex={menuIndex} changeMenuIndex={ChangeMenuIndex} />
                    </>,
                    2 : <BlogSkin2 menuIndex={menuIndex} changeMenuIndex={ChangeMenuIndex} />
                }[skin]
            }
            {
                {
                    1 : <OverView />,
                    2 : <PostList />,
                    3 : <Cartegory />,
                    4 : <Repo />,
                    5 : <Followers />,
                }[menuIndex]
            }
        </BlogSection>
    )
}

const BlogSection = styled.div`
    width: 100%; height: auto;
    padding-left: ${props => props.$skin == 1 ? 250 : 0}px;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
`

export default BlogPage