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
import CartegoryPost from "../Blog/BlogItem/CartegoryPost";

function BlogPage(props){

    const [userinfo, setUserInfo] = useState({});
    const { category , nickname , categoryName} = useParams();
    
    useEffect(() => {
        // setUserInfo(BlogInfo)
        axios.get("/api/blog/info",{
            params:{
                nickname: nickname,
            }
        })
        .then((response) => {
            console.log(response.data)
            setUserInfo(response.data)
        })
        .catch((error) => {
            console.log(error)
        })
    },[])

    return(
        <BlogSection $skin={userinfo.skin}>
            {
                {
                    1 : <>
                        <SideBar category={category} followers={userinfo.followers} />
                        <BlogSkin1 category={category} blogName={userinfo.name} />
                        </>,
                    2 : <BlogSkin2 category={category} blogName={userinfo.name} followers={userinfo.followers} />
                    
                }[userinfo.skin]
            }
            { categoryName == null ?
                {
                    overView : <OverView overView={userinfo.overview} />,
                    postList : <PostList />,
                    category : <Cartegory />,
                    repository : <Repository />,
                    followers : <Followers />,
                }[category]
                :
                <CartegoryPost categoryTitle={categoryName}/>
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