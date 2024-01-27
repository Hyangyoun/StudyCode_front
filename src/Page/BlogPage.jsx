import { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import BlogSkin2 from "../Blog/BlogSkin2";
import BlogSkin1 from "../Blog/BlogSkin1";
import SideBar from "../Blog/SideBar";
import OverView from "../Blog/OverView";
import PostList from "../Blog/PostList";
import Cartegory from "../Blog/Cartegory";
import Followers from "../Blog/Followers";
import Repository from "../Blog/Repository";
import { useParams , useNavigate } from "react-router-dom";
import BlogInfo from "../DummyData/BlogInfo.json";
import Footer from "../Blog/BlogItem/Footer";
import postInfo from "../DummyData/postList.json"

function BlogPage(props){

    const navigate = useNavigate()
    const { category, nickname , categoryName , folderName} = useParams();

    const [userinfo, setUserInfo] = useState({});
    const sessionStorage = window.sessionStorage
    const username = sessionStorage.getItem("nickname")
    const userBlogIndex = sessionStorage.getItem("blogIndex")
    const memId = sessionStorage.getItem("memId")
    //사용자가 블로그주인인지 확인한느state
    const [isOwner , setIsOwner] = useState(true)
    /** 태그와 관련된 state */
    const [BlogTagPost , setBlogTagPost] = useState("") //클릭된 태그를 포스트리스트에 옮김
    const [clickTagName , setClickTagName] = useState(null) //클릭된 태그이름을 포스트리스트에 옮김

    /** 태그를 클릭시 실행되는 함수 */
    const ClickTag = (tagName) =>{
        if(tagName){
            //클릭된태그요청하는 axios
            //     axios.post("" , {
            //         nickname: nickname,
            //         tagName : BlogTagPost
            //     })
            // })
            // .then((response) => {
            //     setBlogTagPost(response.data)
            //     setClickTagName(tagName)
            // })
            // .catch((error) => {
            //     console.log(error)
            // })
            setClickTagName(tagName)
            setBlogTagPost(postInfo)
        }
        else if(tagName == null){
            // axios.get("/api/post/list",{
            //     params:{
            //         nickname: nickname
            //     }
            // })
            // .then((response) => {
            //     setBlogTagPost(response.data)
            //     setClickTagName(null)
            //     console.log(response.data)
            // })
            // .catch((error) => {
            //     console.log(error)
            // })
            setClickTagName(null)
            setBlogTagPost(postInfo)
        }
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
        //     if(response.data.blogIndex == null){
        //             StartUser()
        //     }
        //     else{
        //         setUserInfo(response.data)
        //         sessionStorage.setItem("blogIndex" , `${response.data.blogIndex}`)
        //     }
        // })
        // .catch((error) => {
        //     console.log(error)
        // })

        //방문유저인지 주인인지 확인하는 axios
        // axios.get("api" , {
        //     params:{
        //         memId:memId,
        //         blogIndex:userBlogIndex
        //     }
        // })
        // .then((response) => {
        //     setIsOwner(response.data);
        // })
        // .catch((error) => {
        //     console.log(error);
        // });
    },[])

    return(
        <BlogSection $skin={userinfo.skin}>
            {
                {
                    1 : <>
                            <SideBar category={category} userinfo={userinfo} ClickTag={ClickTag} isOwner={isOwner}/>
                            <BlogSkin1 category={category} userName={userinfo.nickname} blogName={userinfo.name} />
                        </>,
                    2 : <BlogSkin2 category={category} userinfo={userinfo} ClickTag={ClickTag} isOwner={isOwner}/>
                    
                }[userinfo.skin]
            }
            <div className="contentsMargin">{
                {
                    overView : <OverView overView={userinfo.overview} isOwner={isOwner}/>,
                    postList : <PostList BlogTagPost={BlogTagPost} clickTagName={clickTagName} isOwner={isOwner}/>,
                    category : <Cartegory isOwner={isOwner}/>,
                    repository : <Repository isOwner={isOwner}/>,
                    followers : <Followers />,
                }[category]
            }</div>
            <Footer/>
        </BlogSection>
    )
}

const BlogSection = styled.div`
    width: 100%; height: auto;
    min-height: 130%;
    padding-left: ${props => props.$skin === 1 ? 250 : 0}px;
    display: flex;
    position: relative;
    flex-direction: column;
    box-sizing: border-box;
    
    .contentsMargin{
        height: 100%;
        margin-bottom: 100px;
    }
`

export default BlogPage