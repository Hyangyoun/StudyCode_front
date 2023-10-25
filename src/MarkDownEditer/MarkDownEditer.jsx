import React from "react";
import styled from "styled-components";
import MDEditor, { commands,ICommand } from "@uiw/react-md-editor";

function MarkDownEditer(props) {
    const {value, setValue} = props

    const t1 = {
        name: "T1",
        keyCommand: "title1",
        icon: (
            <img src="/image/icon/kakao.png" />
        )
    }
    
    return (
        <MDEditor
            value={value}
            onChange={setValue}
            commands={[
                commands.bold
            ]}
            extraCommands={[]}
            preview="edit"
        />
    )
}

export default MarkDownEditer