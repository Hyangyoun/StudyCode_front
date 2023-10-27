import React, { useState } from "react";
import styled from "styled-components";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Editer, { buttonType } from "../MarkDownEditer/Editer";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneLight } from "react-syntax-highlighter/dist/esm/styles/prism";

function OverView(props) {
    const {overView} = props
    const [editOver, setEditOver] = useState("");
    return (
        <>
            {   overView != null ?
                <MarkDownSection>
                    <Markdown 
                    rehypePlugins={[remarkGfm]} 
                    className={"MarkDown"} 
                    components={{
                        code(props) {
                        const {children, className, node, ...rest} = props
                        const match = /language-(\w+)/.exec(className || '')
                        return match ? (
                            <SyntaxHighlighter
                            {...rest}
                            children={String(children).replace(/\n$/, '')}
                            style={oneLight}
                            language={match[1]}
                            PreTag="div"
                            />
                        ) : (
                            <code {...rest} className={className}>
                            {children}
                            </code>
                        )
                        }
                    }}
                    >
                        {overView}
                    </Markdown>
                </MarkDownSection>
                :
                <NoOverview>
                    <span>등록되어있는 소개글이 없습니다.</span>
                    <div>소개글 작성하기</div>
                </NoOverview>
            }
            <Editer value={editOver} setValue={setEditOver} height={700} buttonList={[
                [buttonType.title1, buttonType.title2],
                [buttonType.bold, buttonType.italic],
                [buttonType.code, buttonType.codeBlock]
            ]} />
        </>
    )
}

const MarkDownSection = styled.div`
    width: 80%; height: auto;
    padding: 16px 32px 32px;
    box-sizing: border-box;
    margin: 10px auto 0;
    border: 2px solid var(--second2);
    background-color: white;

    textarea {
        width: 1000px; height: 400px;
    }

    .MarkDown {
        * {
            box-sizing: border-box;
        }
        h1 {
            padding-bottom: 0.3em;
            font-size: 30px;
            border-bottom: 1px solid var(--second);
        }

        ul {
            padding-left: 2em;
            margin: 0 0 16px;
        }

        li {}

        hr {
            border: 2px solid var(--second);
            margin: 24px 0;
        }

        blockquote {
            padding: 0 1em;
            border-left: 0.25em solid var(--second);
            padding: 1rem 1rem 1rem 2rem;
            margin: 2rem 0;
            :last-child {
                margin-bottom: 0;
            }
            :first-child {
                margin-top: 0;
            }
        }

        p > code {
            background-color: #E9ECEF;
            border-radius: 0.3em;
            padding: 0.3em 0.5em;
        }

        pre > div {
            border: 1px solid var(--second);
        }

        p {
            margin-top: 0;
            line-height: 200%;
        }
    }
`

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