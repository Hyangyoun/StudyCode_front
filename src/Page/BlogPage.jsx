import { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import BlogSkin2 from "../Blog/BlogSkin2";
import BlogSkin1 from "../Blog/BlogSkin1";
import SideBar from "../Blog/SideBar";
import OverView from "../Blog/OverView";
import PostList from "../Blog/PostList";
import Cartegory from "../Blog/Cartegory";
import Repository from "../Blog/Repository";
import { useParams , useNavigate, useLocation } from "react-router-dom";
import BlogInfo from "../DummyData/BlogInfo.json";
import Footer from "../Blog/BlogItem/Footer";
import postInfo from "../DummyData/postList.json"

function BlogPage(props){

    const navigate = useNavigate()
    const location = useLocation()
    const { category, nickname , categoryName, folderName } = useParams();

    const [userinfo, setUserInfo] = useState({});
    const viewerTagname = location.state
    const sessionStorage = window.sessionStorage
    const userBlogIndex = sessionStorage.getItem("blogIndex")
    const username = sessionStorage.getItem("nickname")
    const memId = sessionStorage.getItem("memId")

    //사용자가 블로그주인인지 확인하는state
    const [isOwner , setIsOwner] = useState(true)
    /** 태그와 관련된 state */
    const [BlogTagPost , setBlogTagPost] = useState("") //클릭된 태그를 포스트리스트에 옮김
    const [clickTagName , setClickTagName] = useState(null) //클릭된 태그이름을 포스트리스트에 옮김
    /** 카테고리와 관련된 state */
    const [BlogCategoryPost , setBlogCategoryPost] = useState(null) //클릭된 category를 포스트리스트에 옮김

    /** 태그네임의 값이 들어가면(태그를 클릭) 데이터를 리스트로 받아서 blogtag에 넣고 ,
     * tagName은 태그네임으로 포스트리스트의 이름으로 들어가게된다
     * tagName이 값이 없으면(같은 태그를 한번더 클릭) tagName이 null이 들어가면서else if가 실행됨
    */
    const ClickTag = (tagName) =>{
        if(tagName){
            //클릭된태그요청하는 axios
            axios.post("/api/post/tagToList" , {
                blogIndex: userBlogIndex,
                tagName : tagName
            })
            .then((response) => {
                setBlogTagPost(response.data)
                setClickTagName(tagName)
            })
            .catch((error) => {
                console.log("ClickTag",error)
            })
            // setClickTagName(tagName)
            // setBlogTagPost(postInfo)
        }
        else if(tagName == null){
            axios.get("/api/post/list",{
                params:{
                    nickname: nickname
                }
            })
            .then((response) => {
                setBlogTagPost(response.data)
                setClickTagName(null)
                console.log(response.data)
            })
            .catch((error) => {
                console.log("ClickTag == null",error)
            })
            // setClickTagName(null)
            // setBlogTagPost(postInfo)
        }
    }
    /** 카테고리 클릭시 블로그 인덱스와 카테고리 인덱스를 보내고 처음argument는 카테고리 인덱스이고 
     * 두번째 argument는 클릭한 카테고리 인덱스를 의미한다(더미데이터용으로사용되는것)
     * response data 가 안된다면 Name 쓸예정, 받은리스트를 카테고리포스트에 넣어서 포스트리스트로 보내줌
     *  Name 들어가면(카테고리클릭시) 함수 작동 시작이라보면됨
     */
    const CLickCategory = (categoryIndex , Name) => {
        if(Name){
            axios.post("/api/post/postList",{
                blogIndex:userBlogIndex,
                categoryIndex:categoryIndex
            })
            .then((response) => {
                setBlogCategoryPost(response.data)
                navigate(`/blog/${nickname}/category/${Name}`)
            })
            .catch((error) => console.log("CLickCategory",error))
            // setBlogCategoryPost(postInfo)
            // console.log(BlogCategoryPost)
            // navigate(`/blog/${nickname}/category/${Name}`)
        }
    }

    useEffect(() => {
        if(viewerTagname != null){
            ClickTag(viewerTagname.tagName)
        }
    },[viewerTagname])

    /** 회원가입하고 처음 블로그에 들어갈때(blogIndex가 null일때) 자동으로 연결됨 */
    const StartUser = () =>{
        navigate("/blog/config",
        {
            state : {
                isOwner : isOwner
            }
        })
    }
// 주소값유효, 블로그주인인지,처음블로그만드는지 확인하는 axios
    useEffect(() => {
        // setUserInfo(BlogInfo)
        axios.post("/api/blog/access",{
            memId: memId,
            nickname: nickname
        })
        .then((response) => {
            setIsOwner(response.data.self)
            if(isOwner){
                if(response.data.blogIndex == null){
                        StartUser()
                }
                else{
                    axios.get("/api/blog/info",{
                        params:{
                            nickname: nickname
                        }
                    })
                    .then((response) => {
                        setUserInfo(response.data.blogIndex)
                        sessionStorage.setItem("blogIndex" , `${response.data.blogIndex}`)
                    })
                    .catch((error) => console.log("setUserInfo",error))
                }
            }
            else {
                alert("잘못된 접근입니다")
                navigate("/")
            }
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
                            <SideBar category={category} userinfo={userinfo} ClickTag={ClickTag} clickTagName={clickTagName} isOwner={isOwner}/>
                            <BlogSkin1 category={category} userName={userinfo.nickname} blogName={userinfo.name} />
                        </>,
                    2 : <BlogSkin2 category={category} userinfo={userinfo} ClickTag={ClickTag} clickTagName={clickTagName} isOwner={isOwner}/>
                    
                }[userinfo.skin]
            }
            {/* 카테고리가 주소창에 표시되면서 조건부랜더링을 실행하기위해 선택한방법이다.*/}
            <div className="contentsMargin">{
                categoryName ?
                <PostList BlogCategoryPost={BlogCategoryPost} isOwner={isOwner}/>
                :
                {
                    overView : <OverView overView={userinfo.overview} isOwner={isOwner}/>,
                    postList : <PostList BlogTagPost={BlogTagPost} clickTagName={clickTagName} isOwner={isOwner}/>,
                    category : <Cartegory CLickCategory={CLickCategory} isOwner={isOwner}/>,
                    repository : <Repository isOwner={isOwner}/>,
                }[category]
            }
            {folderName ? <Repository isOwner={isOwner}/> : null}
            </div>
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