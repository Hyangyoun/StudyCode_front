import styled from "styled-components"
import Editer, { buttonType } from "../MarkDownEditer/Editer";
import React, { useState } from "react";

function BlogWrite(props){

    const [editOver, setEditOver] = useState(""); //에디터 사용을 위해 가져온값


    return(
        <WriteStyle>
            <div className="head"></div>
            <input/>
            <input/>
            <Editer value={editOver} setValue={setEditOver} height={650} buttonList={[
                [buttonType.title1, buttonType.title2, buttonType.title3],
                [buttonType.bold, buttonType.italic, buttonType.strikethrough],
                [buttonType.code, buttonType.codeBlock, buttonType.quote, buttonType.link, buttonType.image, buttonType.line]
            ]} />
            <ul>파일
                <li>+</li>
            </ul>
            <div>다음</div>
        </WriteStyle>
    )
}

const WriteStyle = styled.div`
    
    .head{
        width: 100%;
        height: 100px;
        background-color: aqua;
    }
`
export default BlogWrite