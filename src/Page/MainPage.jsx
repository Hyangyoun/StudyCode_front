import React from "react";
import styled from "styled-components";
import Header from "../Main/Header";

function MainPage(props) {
    return (
        <>
            <Header />
            <Banner />
            <Guide>
                <ul className="blogul">
                    <li className="blogSection">
                        <img src="/image/icon/icon_blog.png" alt="블로그이미지" />
                        <span className="guideTitle">BLOG</span>
                        <span className="info">빠르고 손쉽게 나만의 개발블로그를</span>
                        <span className="info">만들어보세요!</span>
                        <div className="gotoCategory">내 블로그 만들러가기</div>
                    </li>
                    <li className="blogSection blogflex">
                        <span className="newPost">최근포스트</span>
                        <Slider>
                            <img src="/image/icon/arrow_left.png" alt="화살표" />
                            <ul>
                                <li>
                                    <img src="/image/icon/sample.png" alt="썸네일" />
                                    <span className="title">내 토요일 내놔</span>
                                    <span className="content">미안하다 이거 보여줄려고 어...</span>
                                    <span className="like">15</span>
                                    <div>
                                        <span className="tiny">by js싫어요</span>
                                        <span className="tiny">2023.09.13</span>
                                    </div>
                                </li>
                                <li>
                                    <img src="/image/icon/sample.png" alt="썸네일" />
                                    <span className="title">내 토요일 내놔</span>
                                    <span className="content">미안하다 이거 보여줄려고 어...</span>
                                    <span className="like">15</span>
                                    <div>
                                        <span className="tiny">by js싫어요</span>
                                        <span className="tiny">2023.09.13</span>
                                    </div>
                                </li>
                                <li>
                                    <img src="/image/icon/sample.png" alt="썸네일" />
                                    <span className="title">내 토요일 내놔</span>
                                    <span className="content">미안하다 이거 보여줄려고 어...</span>
                                    <span className="like">15</span>
                                    <div>
                                        <span className="tiny">by js싫어요</span>
                                        <span className="tiny">2023.09.13</span>
                                    </div>
                                </li>
                            </ul>
                            <img src="/image/icon/arrow_right.png" alt="화살표" />
                        </Slider>
                    </li>
                </ul>
                <ul className="qnaul">
                    <li className="qnaSection">
                        <img src="/image/icon/icon_qna.png" alt="Q&A" />
                        <span className="guideTitle">Q&A</span>
                        <span className="info">코드를 짜다가 궁금한것이 있으면 물어보세요</span>
                        <span className="info">여러분 모두가 질문자와 답변자가 될수있습니다</span>
                    </li>
                    <li className="qnaSection qnaflex">
                        <span>최근 질문태그</span>
                        <ul className="tagUl">
                            <li>#JavaScript</li>
                            <li>#JavaScript</li>
                            <li>#JavaScript</li>
                            <li>#JavaScript</li>
                            <li>#JavaScript</li>
                            <li>#JavaScript</li>
                            <li>#JavaScript</li>
                            <li>#JavaScript</li>
                            <li>#JavaScript</li>
                            <li>#JavaScript</li>
                            <li>#JavaScript</li>
                        </ul>
                        <div className="gotoCategory gotoCateFix">지금 질문하러 가기</div>
                    </li>
                </ul>
                <ul className="communityul">
                    <li className="commuSection">
                        <span>최근 게시물</span>
                        <ul>
                            <li className="commuLi">
                                <span className="commuCategory">&lt;모임&amp;스터디/&gt;</span>
                                <span className="commuCategory">scss사용하는 프로젝트 인원 모집합니다</span>
                                <span className="commuListSmall">1010jk</span>
                                <span className="commuListTiny">23.09.14</span>
                                <span className="commuListSmall">모집중</span>
                            </li>
                            <li className="commuLi">
                                <span className="commuCategory">&lt;모임&amp;스터디/&gt;</span>
                                <span className="commuCategory">scss사용하는 프로젝트 인원 모집합니다</span>
                                <span className="commuListSmall">1010jk</span>
                                <span className="commuListTiny">23.09.14</span>
                                <span className="commuListSmall">모집중</span>
                            </li>
                            <li className="commuLi">
                                <span className="commuCategory">&lt;모임&amp;스터디/&gt;</span>
                                <span className="commuCategory">scss사용하는 프로젝트 인원 모집합니다</span>
                                <span className="commuListSmall">1010jk</span>
                                <span className="commuListTiny">23.09.14</span>
                                <span className="commuListSmall">모집중</span>
                            </li>
                            <li className="commuLi">
                                <span className="commuCategory">&lt;모임&amp;스터디/&gt;</span>
                                <span className="commuCategory">scss사용하는 프로젝트 인원 모집합니다</span>
                                <span className="commuListSmall">1010jk</span>
                                <span className="commuListTiny">23.09.14</span>
                                <span className="commuListSmall">모집중</span>
                            </li>
                            <li className="commuLi">
                                <span className="commuCategory">&lt;모임&amp;스터디/&gt;</span>
                                <span className="commuCategory">scss사용하는 프로젝트 인원 모집합니다</span>
                                <span className="commuListSmall">1010jk</span>
                                <span className="commuListTiny">23.09.14</span>
                                <span className="commuListSmall">모집중</span>
                            </li>
                        </ul>
                    </li>
                    <li className=" commuSecInfo">
                        <img src="./image/icon/icon_community.png" alt="커뮤니티 아이콘" />
                        <span className="guideTitle">Community</span>
                        <span className="info">나와 비슷한 사람들과 이야기를 나누며</span>
                        <span className="info">친해질수 있고 프로젝트도 모집할수있습니다</span>
                        <div className="gotoCategory">커뮤니티</div>
                    </li>
                </ul>
            </Guide>
        </>
    )
}

const Banner = styled.div`
    width: 1440px; height: 576px;
    margin: 30px auto 80px;
    background-color: #a0a0f7;
`

const Guide = styled.div`
    width: 1200px; height: auto;
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .blogul {
        margin-bottom: 105px;
        align-items: center;
    }
    .qnaul {
        margin-bottom: 105px;
        align-items: center;
        justify-content: space-evenly;
        width: 1200px; height: 380px;
        background-color: var(--second2);
        border-radius: 50px;
    }

    .guideTitle {
        font-size: 20px;
        font-weight: bold;
        margin-bottom: 43px;
    }
    
    .info {
        font-size: 15px;
    }

    .gotoCategory {
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 54px auto 0;
        width: 198px; height: 45px;
        border: 1px solid var(--primary);
        border-radius: 50px;
        font-size: 15px;
        color: var(--primary);
    }
    .gotoCateFix {
        margin-top: 40px;
    }

    .blogSection {
        width: 360px; height: 380px;
        background-color: var(--second2);
        border-radius: 50px;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        &>img {
            width: 88px; height: auto;
        }

        &:not(:last-child) {
            margin-right: 40px;
        }

        &:last-child {
            border-radius: 15px;
            width: 800px; height: 452px;
        }
    }

    .blogflex {
        align-items: start;
        &>span {
            font-size: 20px;
            font-weight: bold;
            margin: 0 0 45px 70px;
        }
    }

    .qnaSection {
        flex-direction: column;
        align-items: center;
        &>img {
            width: 88px; height: auto;
        }
        .tagUl {
            width: 500px; height: 117px;
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            flex-wrap: wrap;

            :nth-child(5) {
                margin-left: 75.5px;
            }
            :nth-child(7) {
                margin-right: 75.5px;
            }
            
            &>li {
                width: 103px; height: 25px;
                background-color: var(--background);
                border-radius: 50px;
                align-items: center;
                justify-content: center;
                font-size: 15px;
                color: var(--primary);
                margin: 0 10px;
            }
        }
    }
    .qnaflex {
        align-items: start;
        &>span {
            font-size: 20px;
            font-weight: bold;
            margin-bottom: 20px;
            margin-left: 10px;
        }
    }

    .communityul {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        width: 1200px; height: 452px;

        .commuSection {
            width: 793px; height: 452px;
            background-color: var(--second2);
            border-radius: 15px;
            margin-right: 46px;
            flex-direction: column;

            &>span {
                font-size: 20px;
                font-weight: bold;
                margin: 32px 0 0 98px;
            }

            &>ul {
                margin: auto;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                :last-child {
                    margin: 0;
                }
            }
        }

        .commuSecInfo {
            width: 360px; height: 380px;
            background-color: var(--second2);
            flex-direction: column;
            align-items: center;
            justify-content: center;
            border-radius: 50px;
            
            &>img {
                width: 88px; height: auto;
                margin-bottom: 10px;
            }
        }
        .commuListSmall {
            font-size: 12px;
        }
        .commuListTiny {
            font-size: 10px;
        }

        .commuLi {
            width: 600px; height: 50px;
            background-color: var(--background);
            border-radius: 15px;
            align-items: center;
            justify-content: space-around;
            margin-bottom: 15px;
            
            :nth-child(2) {
                margin-right: 45px;
            }
        }

        .commuCategory {
            font-size: 15px;
        }
    }
`

const Slider = styled.div`
    width: 800px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 70px;
    li {
        flex-direction: column;
        width: 200px; height: 245px;
        background-color: var(--background);
        border-radius: 5px;
        &:not(:last-child) {
            margin-right: 40px;
        }

        &>img{
            width: 200px; height: 109px;
            border-radius: 5px 5px 0 0;
            overflow: hidden;
            margin-bottom: 13px;
        }
        .title {
            font-size: 15px;
            margin: 0 7px 10px;
        }
        .content {
            font-size: 12px;
            margin: 0 7px 45px;
        }
        .tiny {
            font-size: 10px;
        }
        .like {
            font-size: 10px;
            margin: 0 7px 0 auto;
            &::before{
                content: url("./image/icon/heart.png");
            }
        }

        div{
            margin: auto 7px;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            border-width: 1px 0 0 0;
            border-color: var(--second2);
            border-style: solid;
        }
    }

    img {
        width: 50px; height: 50px;
    }
    ul {
        align-items: center;
        justify-content: center;
    }
`

export default MainPage