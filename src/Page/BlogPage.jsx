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

    const [userInfo, setUserInfo] = useState({});
    const { category , nickName , categoryName} = useParams();
    // const sessionStorage = window.sessionStorage
    
    useEffect(() => {
        setUserInfo(BlogInfo)
        // axios.get("/api/blog/info",null,{
        //     params:{
        //         nickName: nickName,
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
        <BlogSection $skin={userInfo.blogSkin}>
            {
                {
                    1 : <>
                        <SideBar category={category} userInfo={userInfo}/>
                        <BlogSkin1 category={category} userInfo={userInfo}/>
                        </>,
                    2 : <BlogSkin2 category={category} userInfo={userInfo} />
                    
                }[userInfo.blogSkin]
            }
            { categoryName == null ?
                {
                    overView : <OverView overView={userInfo.overview} />,
                    postList : <PostList />,
                    category : <Cartegory userInfo={userInfo} />,
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