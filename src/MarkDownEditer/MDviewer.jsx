import React from "react";
import styled from "styled-components";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneLight } from "react-syntax-highlighter/dist/esm/styles/prism";

function MDviewer({content, width}) {
    return (
        <MarkDownSection $width={width}>
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
                    {content}
            </Markdown>
        </MarkDownSection>
    )
}

const MarkDownSection = styled.div`
    width: ${props => props.$width}; height: auto;
    min-height: 500px;
    box-sizing: border-box;
    margin: 10px auto 0;
    background-color: var(--background);

    .MarkDown {
        * {
            box-sizing: border-box;
            font-size: 1.15rem;
        }
        h1 {
            padding-bottom: 0.3em;
            font-size: 2rem;
            border-bottom: 1px solid var(--second);
        }

        h2 {
            font-size: 1.75rem;
        }

        h3 {
            font-size: 1.5rem;
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

        img {
            max-width: 100%;
        }
    }
`

export default MDviewer