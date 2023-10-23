import styled from "styled-components";

function Cartegory(props) {

    return(
        <CartegoryList>
            <Item>
                <ul>
                    <div className="itemBox">
                        <li><img src="/image/icon/naver.png" alt="post" /></li>
                        <li><img src="/image/icon/sample.png" alt="post" /></li>
                        <li><img src="/image/icon/google.png" alt="post" /></li>
                        <li><img src="/image/icon/kakao.png" alt="post" /></li>
                    </div>
                    <span className="title" >프로젝트</span>
                    <span className="postCount">{4}</span>
                </ul>
                <ul>
                    <div className="itemBox">
                        <li><img src="/image/icon/sample.png" alt="post" /></li>
                        <li><img src="/image/icon/naver.png" alt="post" /></li>
                        <li><img src="/image/icon/google.png" alt="post" /></li>
                        <li><img src="/image/icon/kakao.png" alt="post" /></li>
                    </div>
                    <span className="title" >프로젝트</span>
                    <span className="postCount">{4}</span>
                </ul>
                <ul>
                    <div className="itemBox">
                        <li><img src="/image/icon/sample.png" alt="post" /></li>
                        <li><img src="/image/icon/naver.png" alt="post" /></li>
                        <li><img src="/image/icon/google.png" alt="post" /></li>
                        <li><img src="/image/icon/kakao.png" alt="post" /></li>
                    </div>
                    <span className="title" >프로젝트</span>
                    <span className="postCount">{4}</span>
                </ul>
                <ul>
                    <div className="addCartegory">
                        <img className="" src="/image/icon/cartegory-icon.png" alt="post" />
                    </div>
                    <span className="title" >카테고리 추가</span>
                </ul>
            </Item>
        </CartegoryList>
    )
}

const CartegoryList = styled.div`
    width: 1200px; height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: auto;
    `
const Item = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;
    .itemBox{
        width: 300px; height: 200px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        border: 2px solid var(--second);
        border-radius: 5px;
        margin-bottom: 10px;
    }
    Img{
        width: 130px; height: 70px;
        margin: 5px;
    }
    .title{
        font-weight: bold;
        font-size: 20px;
        margin-right: 5px;
    }
    .postCount{
        font-size: 12px;
        &:after{
            content: "개의 포스트";
        }
    }
    ul{
        margin: 50px;
        padding: 0;
        cursor: pointer;
    }
    li{
        list-style: none;
    }
    .addCartegory{
        width: 300px; height: 160px;
        display: flex;
        flex-wrap: wrap;
        border: 2px solid var(--second);
        border-radius: 5px;
        justify-content: center;
        align-items: center;
        margin-bottom: 10px;
    }
`
export default Cartegory