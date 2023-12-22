import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import MDviewer from "../../MarkDownEditer/MDviewer";

function PostListItem(props) {

    const {postInfo , postTag } = props    

    const navigate = useNavigate()
    return(
        <Post  onClick={() => {navigate(`/blog/Post/${postInfo.postIndex}`)}}>
            { postInfo.thumbnailPath ? <img src={postInfo.thumbnailPath} alt="썸네일"/> : null}
            <span className="title" >{postInfo.title}</span>
            <div className="content" >{postInfo.content}</div>
            {
                postTag.length > 0 ?
                <ul className="tagUl">
                    {
                        postTag.map((item, index) => {
                            return <li key={index}>{item}</li>
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
    margin: 30px auto auto;
    padding: 0px;
    background-color: var(--background);
    border-bottom:1px solid var(--second);
    cursor: pointer;

    & >img{
        width: auto;
        height: auto;
        max-width: 700px;
        max-height: 370px;
        border-radius: 5px 5px 0 0;
        overflow: hidden;
        margin-bottom: 20px;
        cursor: pointer;
    }
    .title {
        font-size: 20px;
        font-weight: bold;
        margin-bottom: 20px;
        cursor: pointer;
    }
    .content {
        width: 100%;
        max-height: 100px;
        margin-bottom: 5px;
        overflow:hidden;
        text-overflow: ellipsis;  	// ... 을 만들기 
        white-space: nowrap; 		// 아래줄로 내려가는 것을 막기위해
    }
    .likeDiv{
        margin-bottom: 20px;
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
            padding: 0;
            margin-bottom: 20px;
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