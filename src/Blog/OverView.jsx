import React, { useState } from "react";
import styled from "styled-components";
import Editer, { buttonType } from "../MarkDownEditer/Editer";
import MdViewer from "../MarkDownEditer/MDviewer";
import { useNavigate } from "react-router-dom";

function OverView(props) {
    const {overView} = props
    const navigate = useNavigate()
    const [editOver, setEditOver] = useState("");
    return (
        <>
            {overView != null ?
                <MdViewer content={overView} width={"80%"} />
                :
                <NoOverview>
                    <span>등록되어있는 소개글이 없습니다.</span>
                    <div >소개글 작성하기</div>
                </NoOverview>
            }
        </>
    )
}


const NoOverview = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
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