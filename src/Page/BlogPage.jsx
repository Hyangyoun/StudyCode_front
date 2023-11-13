import { useState } from "react";
import BlogSkin2 from "../Blog/BlogSkin2";
import BlogSkin1 from "../Blog/BlogSkin1";
import styled from "styled-components";
import SideBar from "../Blog/SideBar";
import OverView from "../Blog/OverView";
import PostList from "../Blog/PostList";
import Cartegory from "../Blog/Cartegory";
import Followers from "../Blog/Followers";
import Repository from "../Blog/Repository";
import over from "../DummyData/Overview.json";
import { useParams } from "react-router-dom";

function BlogPage(props){

    const [skin, setSkin] = useState(1)
    const { category } = useParams();

    return(
        <BlogSection $skin={skin}>
            {
                {
                    1 : <>
                        <SideBar category={category} />
                        <BlogSkin1 category={category} />
                        </>,
                    2 : <BlogSkin2 category={category} />

                }[skin]
            }
            {
                {
                    overView : <OverView overView={over.content} />,
                    postList : <PostList />,
                    category : <Cartegory />,
                    repository : <Repository />,
                    followers : <Followers />,
                }[category]
            }
        </BlogSection>
    )
}

const BlogSection = styled.div`
    width: 100%; height: auto;
    min-height: 100%;
    padding-left: ${props => props.$skin === 1 ? 250 : 0}px;
    display: flex;
    position: relative;
    flex-direction: column;
    box-sizing: border-box;
`

export default BlogPage