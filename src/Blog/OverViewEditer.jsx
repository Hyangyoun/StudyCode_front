import React, { useRef } from "react";
import styled from "styled-components";

function OverViewEditer(props) {
    const {over, setOver} = props;
    let result =over.split("\n");
    const ta = useRef();


    return (
        <>
            <button onClick={() => {
                let cusor = ta.current.selectionEnd -1
                let row = over.lastIndexOf("\n",cusor)
                console.log(row, cusor)   
                setOver(over.substring(0,row + 1) + "# " + over.substring(row + 1)
                ,ta.current.focus())
            }} />
            <InputSection>
                <div>
                    <pre>
                        <code>
                            {result.map((item, index) => {
                                return <span key={index}>{item}</span>
                            })}
                        </code>
                    </pre>
                </div>
                <textarea ref={ta} autoComplete="off" autoCorrect="off" autoCapitalize="off" spellCheck="false" className="inputArea" value={over} onChange={(e) => setOver(e.target.value)}/>
            </InputSection>
        </>
    )
}

const InputSection = styled.div`
    width: 1200px; height: 700px;
    position: relative;
    padding: 10px;
    margin: auto;

    & > div {
        position: relative;
        font-size: 15px;
        left: 0;
        top: 0;
        pre {
            margin: 0;
        }
        span {
            display: block;
        }
    }

    .inputArea {
        position: absolute;
        -webkit-text-fill-color: transparent;
        width: 100%;
        height: 100%;
        padding: 10px;
        font-size: 15px;
        left: 0;
        top: 0;
        outline: none;
        resize: none;
        overflow: hidden;
        white-space: pre-wrap;
        word-break: break-word;
        border: none;
        background-color: transparent;
    }
`

export default OverViewEditer