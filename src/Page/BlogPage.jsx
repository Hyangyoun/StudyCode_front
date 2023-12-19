import { useEffect, useState } from "react";
import BlogSkin2 from "../Blog/BlogSkin2";
import BlogSkin1 from "../Blog/BlogSkin1";
import styled from "styled-components";
import SideBar from "../Blog/SideBar";
import OverView from "../Blog/OverView";
import PostList from "../Blog/PostList";
import Cartegory from "../Blog/Cartegory";
import Followers from "../Blog/Followers";
import Repository from "../Blog/Repository";
import { useParams } from "react-router-dom";
import BlogInfo from "../DummyData/BlogInfo.json";
import axios from "axios";

function BlogPage(props){

    const [userinfo, setUserInfo] = useState({});
    const [BlogTagName , setBlogTagName] = useState("")
    const { category, nickname , categoryName} = useParams();

    const ClickTag = (tagName) =>{
        setBlogTagName(tagName)
    }

    useEffect(() => {
        setUserInfo(BlogInfo)
        // axios.get("/api/blog/info",{
        //     params:{
        //         nickname: nickname,
        //     }
        // })
        // .then((response) => {
        //     console.log(response.data)
        //     setUserInfo(response.data)
        // })
        // .catch((error) => {
        //     console.log(error)
        // })
    },[])

    return(
        <BlogSection $skin={userinfo.skin}>
            {
                {
                    1 : <>
                        <SideBar category={category} followers={userinfo.followers} profile={userinfo.profile} ClickTag={ClickTag}/>
                        <BlogSkin1 category={category} blogName={userinfo.name} />
                        </>,
                    2 : <BlogSkin2 category={category} blogName={userinfo.name} followers={userinfo.followers} profile={userinfo.profile} ClickTag={ClickTag}/>
                    
                }[userinfo.skin]
            }
            { categoryName == null || BlogTagName == null ?
                {
                    overView : <OverView overView={userinfo.overview} />,
                    postList : <PostList BlogTagName={BlogTagName}/>,
                    category : <Cartegory/>,
                    repository : <Repository />,
                    followers : <Followers />,
                }[category]
                :
                <PostList BlogTagName={BlogTagName}/>
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