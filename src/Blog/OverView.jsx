import React, { useState } from "react";
import styled from "styled-components";
import Editer, { buttonType } from "../MarkDownEditer/Editer";
import MdViewer from "../MarkDownEditer/MDviewer";

function OverView(props) {
    const {overView} = props
    const [editOver, setEditOver] = useState("");
    return (
        <>
            {overView != null ?
                <MdViewer content={overView} width={80} />
                :
                <NoOverview>
                    <span>등록되어있는 소개글이 없습니다.</span>
                    <div>소개글 작성하기</div>
                </NoOverview>
            }
            <Editer value={editOver} setValue={setEditOver} height={700} buttonList={[
                [buttonType.title1, buttonType.title2, buttonType.title3],
                [buttonType.bold, buttonType.italic, buttonType.strikethrough],
                [buttonType.code, buttonType.codeBlock, buttonType.quote, buttonType.link, buttonType.image]
            ]} />
        </>
    )
}


const NoOverview = styled.div`
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 1200px;
    height: 500px;
    font-size: 20px;
    color: var(--primary);

    & > div{
        width: 150px; height: 40px;
        margin-top: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 1px solid var(--second);
        border-radius: 5px;
        font-size: 15px;
        cursor: pointer;

        &:hover {
            background-color: var(--second);
            color: white;
        }
    }
`

export default OverView