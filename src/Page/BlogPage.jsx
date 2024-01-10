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
import { useParams , useNavigate } from "react-router-dom";
import BlogInfo from "../DummyData/BlogInfo.json";
import axios from "axios";
import BlogConfig from "../Blog/BlogConfig";

function BlogPage(props){

    const navigate = useNavigate()
    const { category, nickname , categoryName , folderName} = useParams();

    const [userinfo, setUserInfo] = useState({});
    const [BlogTagName , setBlogTagName] = useState("")

    /** 태그를 클릭시 실행되는 함수 */
    const ClickTag = (tagName) =>{
        setBlogTagName(tagName)
    }

    /** 회원가입하고 처음 블로그에 들어갈때 자동으로 연결됨 */
    // const StartUser = () =>{
    //     navigate("/blog/config")
    // }

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
        //     if(response.data == ""){
        //         StartUser()
        //     }
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
                                <SideBar category={category} userinfo={userinfo} ClickTag={ClickTag}/>
                                <BlogSkin1 category={category} blogName={userinfo.name} />
                            </>,
                        2 : <BlogSkin2 category={category} userinfo={userinfo} ClickTag={ClickTag}/>
                        
                    }[userinfo.skin]
                }
                { categoryName == null || BlogTagName == null ?
                    {
                        overView : <OverView overView={userinfo.overview} />,
                        postList : <PostList BlogTagName={BlogTagName}/>,
                        category : <Cartegory />,
                        repository : <Repository />,
                        followers : <Followers />,
                    }[category]
                    :
                    <PostList BlogTagName={BlogTagName}/>
                }
                { folderName != undefined ? <Repository /> : null}
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