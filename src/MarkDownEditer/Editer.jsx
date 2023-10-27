import React, { useEffect } from "react";
import MDEditor, { commands } from "@uiw/react-md-editor";
import styled from "styled-components";

export const buttonType = {
    title1: "title1",
    title2: "title2",
    title3: "title3",
    bold: "bold",
    italic: "italic",
    strikethrough: "strikethrough",
    code: "code",
    codeBlock: "codeBlock",
    quote: "quote",
    link: "link",
    image: "image",
    line: "line",
}

function Editer({value, setValue, height, buttonList}) {
    
    useEffect(() => {
        commands.title1.icon = (<Icon src="/image/icon/H1.png" />)
        commands.title2.icon = (<Icon src="/image/icon/H2.png" />)
        commands.title3.icon = (<Icon src="/image/icon/H3.png" />)
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

    console.log(commands.title1)
    
    return (
        <EditerBox>
            <MDEditor
                value={value}
                onChange={setValue}
                commands={buttonList != null ? button 
                    : [commands.title1,commands.title2,commands.title3,commands.divider,commands.bold,commands.italic]
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
            height: auto;
        }

        .w-md-editor-toolbar-divider {
            margin: 0 10px !important;
            height: 16px;
        }

        li {
            margin: 0 px;
            height: auto;
        }

        button {
            width: 32px; height: 32px;
            border: 0;
            padding: 0;
            margin: 0;
            display: flex;
            align-items: center;
            justify-content: center;
        }
    }
`

const Icon = styled.img`
    width: 16px; height: 16px;
`

export default Editer