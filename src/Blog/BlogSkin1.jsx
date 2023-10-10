import styled from "styled-components";

function BlogMainSkin1(props){
    return(
        <Sidebar>
            <img className="profilepicture" src="/image/icon/profile.png" alt="프로필사진"/>
            <div className="nickname">js싫어요</div>
            <div className="follow">
                <span>팔로우{}</span>
                <span>팔로잉{}</span>
            </div>
            <span className="write">글쓰기</span>
            <div className="cartegoryform">
                <div>메인(overview)</div>
                <div>포스트(post)</div>
                <div>repository</div>
            </div>
            <div className="tagBox"> Tag
                <ul>
                    <li>JavaScript</li>
                    <li>Spring</li>
                    <li>React</li>
                </ul>
            </div>
            <img className="home" src="/image/icon/home.png" alt="프로필사진"/>
        </Sidebar>
    )
}

const Sidebar = styled.div`
    width: 250px; height: 1180px;
    border-right: 1px solid #C3ACD0;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 15px;
    .profilepicture{
        width: 150px; height: auto;
        margin-top: 85px;
    }
    .nickname{
        margin-top: 10px;
        align-items: center;
        text-align: center;
    }
    .follow{
        margin-top: 15px;
        display: flex;
        flex-direction: row;

        >span{
            margin: 0 10px 0 10px;
        }
    }
    .write{
        margin-top: 10px;
        display: flex;
       justify-content:center;
    }
    .cartegoryform{
    margin-top: 70px;

        >div{
            width: 135px; height: 40px;
            margin: 10px;
            border: 1px solid #C3ACD0;
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }
    .tagBox {
        margin-top: 40px;
        font-size: 20px;

        &>ul {
            flex-direction: column;
            margin: 15px 0 0 30px;
            font-size: 15px;
            > li {
                cursor: pointer;
            }
            > li:hover {
                color: #674188;
                text-decoration: underline;
            }
            li:not(:last-child) {
                margin-bottom: 10px;
            }
        }
    }
    .home{
        margin-top: 400px;
        width: 30px; height: auto;
    }
    `

export default BlogMainSkin1