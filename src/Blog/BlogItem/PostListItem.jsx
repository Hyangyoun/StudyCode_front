import { useNavigate } from "react-router-dom";
import styled from "styled-components";

function PostListItem({postInfo , postTag}) {

    const navigate = useNavigate()
    return(
        <Post onClick={() => {navigate("/blog/BlogViewer")}}>
            <img src="/image/icon/sample.png" alt="썸네일"/>
            <span className="title" >{postInfo.title}</span>
            <div className="content" >{postInfo.content}</div>
            {
                postTag.length != 0 ?
                <ul className="tagUl">
                    {
                        postTag.map((item, index) => {
                            return <li key={index}>{item.tagName}</li>
                        })
                    }
                </ul> : null
            }
            <div className="likeDiv">
                <span className="like">{postInfo.recommend}</span>
                <span>{postInfo.postDate}</span>
            </div>
        </Post>
    )
}

const Post = styled.li`

    width: 700px; height: auto;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    margin: 40px auto auto;
    padding: 0 0 30px;
    background-color: var(--background);
    border-bottom:1px solid var(--second);
    cursor: pointer;

    & >img{
        width: 700px; height: 370px;
        border-radius: 5px 5px 0 0;
        overflow: hidden;
        cursor: pointer;
    }
    .title {
        font-size: 20px;
        font-weight: bold;
        margin-top: 20px;
        cursor: pointer;
    }
    .content {
        width: 100%;
        font-size: 15px;
        margin-top: 20px;
        overflow:hidden;
        text-overflow: ellipsis;  	// ... 을 만들기 
        white-space: nowrap; 		// 아래줄로 내려가는 것을 막기위해
    }
    .likeDiv{
        margin-top: 20px;
        font-size: 12px;
    
        .like {
            cursor: pointer;
            margin-right: 10px;
            &::before{
                object-fit: fill;
                width: auto; height: 15px;
                content: url("/image/icon/heart.png");
            }
        }
    }
    .tagUl {
            display: flex;
            flex-direction: row;
            justify-content: flex-start;
            align-items: center;
            flex-wrap: wrap;
            margin-top: 15px;
            padding: 0;
            &>li {
                display: block;               //block일때만 textoverflow 사용가능
                width: 103px; height: 25px;
                background-color: var(--second2);
                border-radius: 50px;
                font-size: 15px;
                color: var(--primary);
                margin: 5px 5px 0;
                box-sizing: border-box;
                padding: 0 10px;
                overflow:hidden;
                text-overflow: ellipsis;  	// 로 ... 을 만들기 
                white-space: nowrap; 		// 아래줄로 내려가는 것을 막기위해
                text-align: center;
                cursor: pointer;
            }
            & > li:nth-child(6n-5){
                margin-left: 0;
            }
    }
`
export default PostListItem