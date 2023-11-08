import React, { useState } from "react";
import styled from "styled-components";
import BlogHeader from "../Main/BlogHeader";

function BlogConfig(props) {

    const [selectSkin, setSelectSkin] = useState(true);

    return (
        <>
            <BlogHeader />
            <ConfigSection $select={selectSkin}>
                <div className="partBox">
                    <div className="partName">블로그 이름</div>
                    <input className="nameInput" type="text" placeholder="블로그 이름 입력" />
                </div>
                <div className="partBox">
                    <div className="partName">블로그 스킨</div>
                    <div className="imgBox">
                        {selectSkin ? 
                        <>
                            <img src="/image/Source/BlogSkin1Overview.png" alt="sampleImage" />
                            <img src="/image/Source/BlogSkin1Post.png" alt="sampleImage" />
                        </>
                        :
                        <>
                            <img src="/image/Source/BlogSkin2Overview.png" alt="sampleImage" />
                            <img src="/image/Source/BlogSkin2Post.png" alt="sampleImage" />
                        </>
                        }

                    </div>
                    <div className="skinButton">
                        <div onClick={() => setSelectSkin(true)}>스킨 1</div>
                        <div onClick={() => setSelectSkin(false)}>스킨 2</div>
                    </div>
                </div>
                <div className="partBox">
                    <div className="partName">카테고리 설정</div>
                    <ul className="category">
                        <li>
                            <span>프로젝트</span>
                        </li>
                        <li>
                            <span>코딩테스트</span>
                        </li>
                        <li>
                            <span>잡담</span>
                        </li>
                        <li>
                            <span>스터디</span>
                        </li>
                        <li>
                            <span>스터디</span>
                        </li>
                        <li>
                            <span>스터디</span>
                        </li>
                        <li>
                            <span>스터디</span>
                        </li>
                        <li>
                            <span>스터디</span>
                        </li>
                        <li>
                            <span>스터디</span>
                        </li>
                        <li>
                            <span>스터디</span>
                        </li>
                        <li>
                            <span>스터디</span>
                        </li>
                        <li className="addButton">+</li>
                    </ul>
                </div>
                <div className="done">설정 완료하기</div>
            </ConfigSection>
        </>
    )
}

const ConfigSection = styled.div`
    width: 85%;
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;

    .partBox {
        width: 100%;
        margin-top: 50px;
    }

    .partName {
        font-size: 20px;
        font-weight: bold;
        display: flex;
        align-items: center;
        width: 100%; height: 30px;
        padding-left: 10px;
        border-bottom: 1px solid var(--second);
    }

    .nameInput {
        border: 1px solid var(--second);
        outline: none;
        margin-top: 10px;
        width: 270px; height: 40px;
        font-size: 15px;
        padding: 0 10px;
    }

    .imgBox {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-around;
        height: 500px;
        margin: 20px auto auto;
        border: 1px solid var(--second2);
        border-radius: 5px;

        > img {
            width: 550px; height: 413px;
            border: 1px solid var(--second);
        }
    }

    .skinButton {
        width: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-around;
        margin-top: 10px;

        &>div:nth-child(1) {
            border-color: var(${props => props.$select ? "--primary" : "--second"});
            color: var(${props => props.$select ? "--primary" : "--second"});
        }
        &>div:nth-child(2) {
            border-color: var(${props => props.$select ? "--second" : "--primary"});
            color: var(${props => props.$select ? "--second" : "--primary"});
        }

        > div {
            width: 250px; height: 50px;
            border: 1px solid var(--second);
            border-radius: 5px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 20px;
            font-weight: bold;
            cursor: pointer;
        }
    }

    .category {
        padding: 0;
        width: 400px; height: 220px;
        overflow-y: scroll;
        border: 1px solid var(--second);
        display: flex;
        flex-direction: column;
        align-items: center;

        &::-webkit-scrollbar {
            /* position: absolute;
            top: 0;
            right: 0; */
            width: 8px;
        }

        &::-webkit-scrollbar-track {
            background: transparent;
            border-radius: 10px;
        }

        &::-webkit-scrollbar-thumb {
            background: var(--second);
            border-radius: 10px;
        }

        > li {
            width: 350px; height: 30px;
            margin: 5px 0;
            display: flex;
            align-items: center;
            border: 1px solid var(--second);
            padding: 0 10px;
            flex-shrink: 0;
        }

        span {
            font-size: 12px;
            display: inline-block;
            text-align: center;
            width: 100%;
            position: relative;
            margin: auto;

            &::after {
                content: "X";
                position: absolute;
                right: 0;
                cursor: pointer;
            }
        }

        .addButton {
            background-color: var(--second2);
            justify-content: center;
        }
    }

    .done {
        width: 150px;
        height: 40px;
        background-color: var(--second);
        border-radius: 5px;
        color: white;
        margin: 40px 0;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 15px;
        cursor: pointer;
    }
`

export default BlogConfig