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
    image: "image"
}

function Editer({value, setValue, height, buttonList}) {
    
    useEffect(() => {
        commands.title1.icon = (<Icon src="/image/icon/h1.png" alt="h1" />)
        commands.title2.icon = (<Icon src="/image/icon/h2.png" alt="h2" />)
        commands.title3.icon = (<Icon src="/image/icon/h3.png" alt="h3" />)
        commands.bold.icon = (<Icon src="/image/icon/bold.png" alt="bold" />)
        commands.italic.icon = (<Icon src="/image/icon/italic.png"  alt="italic" />)
        commands.strikethrough.icon = (<Icon src="/image/icon/strikethrough.png" alt="strikethrough" />)
        commands.code.icon = (<Icon src="/image/icon/code.png" alt="code" />)
        commands.codeBlock.icon = (<Icon src="/image/icon/codeblock.png" alt="codeBlock" />)
        commands.quote.icon = (<Icon src="/image/icon/quote.png" alt="quote" />)
        commands.link.icon = (<Icon src="/image/icon/link.png"  alt="link" />)
        commands.image.icon = (<Icon src="/image/icon/image.png" alt="image" />)
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

    // console.log(commands.title1)
    
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
                textareaProps={{
                    placeholder: "당신의 생각을 자유롭게 표현해보세요. . ."
                }}
            />
        </EditerBox>
    )
}

const EditerBox = styled.div`
    width: 85%;
    margin: auto auto 40px;

    .w-md-editor {
        box-shadow: none !important;
        background-color: transparent;
        border-bottom: 1px solid var(--second);
    }

    .w-md-editor-text-input,
    .w-md-editor-text-pre > code,
    .w-md-editor-text-pre {
        font-size: 15px !important;
        line-height: 20px !important;
        font-family: 'Noto Sans KR', sans-serif !important;
    }

    .w-md-editor-toolbar {
        background-color: transparent;
        border-color: var(--second);
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
            height: 24px;
        }

        li {
            margin: 0 px;
            height: auto;
        }

        button {
            width: 48px; height: 48px;
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
    width: 20px; height: 20px;
`

export default Editer