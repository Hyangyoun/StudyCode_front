import React, { useEffect, useState } from "react";
import MDEditor, { commands } from "@uiw/react-md-editor";
import styled from "styled-components";

export const buttonType = {
    title1: "title1",
    title2: "title2",
    title3: "title3",
    title4: "title4",
    bold: "bold",
    italic: "italic",
    strikethrough: "strikethrough",
    code: "code",
    codeBlock: "codeBlock",
    quote: "quote",
    link: "link",
    image: "image",
}

function Editer({value, setValue, height, buttonList}) {
    
    useEffect(() => {
        commands.title1.icon = (<Icon src="/image/icon/kakao.png" />)
        commands.title2.icon = (<Icon src="/image/icon/kakao.png" />)
        commands.title3.icon = (<Icon src="/image/icon/kakao.png" />)
        commands.title4.icon = (<Icon src="/image/icon/kakao.png" />)
        commands.bold.icon = (<Icon src="/image/icon/kakao.png" />)
        commands.italic.icon = (<Icon src="/image/icon/kakao.png" />)
        commands.strikethrough.icon = (<Icon src="/image/icon/kakao.png" />)
        commands.code.icon = (<Icon src="/image/icon/kakao.png" />)
        commands.codeBlock.icon = (<Icon src="/image/icon/kakao.png" />)
        commands.quote.icon = (<Icon src="/image/icon/kakao.png" />)
        commands.link.icon = (<Icon src="/image/icon/kakao.png" />)
        commands.image.icon = (<Icon src="/image/icon/kakao.png" />)
    },[])

    const button = []
    if (buttonList != null) {
        buttonList.forEach((item, index, array) => {
            item.forEach((item2) => {
                switch (item2) {
                    case "title1":
                        button.push(commands.title1);
                        break;
                    case "title2":
                        button.push(commands.title2);
                        break;
                    case "title3":
                        button.push(commands.title3);
                        break;
                    case "title4":
                        button.push(commands.title4);
                        break;
                    case "bold":
                        button.push(commands.bold);
                        break;
                    case "italic":
                        button.push(commands.italic);
                        break;
                    case "strikethrough":
                        button.push(commands.strikethrough);
                        break;
                    case "code":
                        button.push(commands.code);
                        break;
                    case "codeBlock":
                        button.push(commands.codeBlock);
                        break;
                    case "quote":
                        button.push(commands.quote);
                        break;
                    case "link":
                        button.push(commands.link);
                        break;
                    case "image":
                        button.push(commands.image);
                        break;
                
                    default:
                        break;
                }
            })
            if(index !== array.length - 1) {
                button.push(commands.divider)
            }
        })
    }

    console.log(button)
    
    return (
        <EditerBox>
            <MDEditor
                value={value}
                onChange={setValue}
                commands={buttonList != null ? button 
                    : [commands.title1,commands.title2,commands.divider,commands.bold,commands.italic]
                }
                preview="edit"
                visibleDragbar={false}
                extraCommands={[]}
                height={height}
            />
        </EditerBox>
    )
}

const EditerBox = styled.div`
    width: 85%;
    margin: auto auto 40px;

    .w-md-editor-text-input,
    .w-md-editor-text-pre > code,
    .w-md-editor-text-pre {
        font-size: 15px !important;
        line-height: 20px !important;
        font-family: 'Noto Sans KR', sans-serif !important;
    }

    .w-md-editor-toolbar {
        * {
            display: block;
        }

        > ul {
            display: flex;
            align-items: center;
        }

        li {
            margin: 0 1px;
            height: 20px;
        }

        button {
            width: 20px; height: 20px;
            border: 0;
            padding: 0;
            margin: 0;
        }
    }
`

const Icon = styled.img`
    width: 20px; height: 20px;
    overflow: hidden;
`

export default Editer