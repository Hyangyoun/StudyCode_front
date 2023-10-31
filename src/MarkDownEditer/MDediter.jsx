import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

function MDediter(props) {
    const {over, setOver} = props;
    const [cusor, setCusor] = useState();
    const markDownInput = useRef();
    
    let result = over.split("\n");
    result.map((item, index) => {
        result[index] = item + "  "
    })

    const MarkDownButtonClick = (buttonName) => {
        let lastcusor = markDownInput.current.selectionEnd
        let row = over.lastIndexOf("\n",lastcusor - 1);
        console.log(row, lastcusor);

        switch(buttonName) {
            case "T1": 
                setOver(over.substring(0,row + 1) + "# " + over.substring(row + 1));
                markDownInput.current.focus();
                setCusor(lastcusor + 2)
                break;
            default: break;
        }
    }

    const Text = () => {
        return (
            result.map((item, index) => {
            })
        )
    }

    useEffect(() => {
        markDownInput.current.setSelectionRange(cusor,cusor)
    },[cusor])


    return (
        <MarkDownEditer>
            <div>
                <button onClick={() => MarkDownButtonClick("T1")}/>
            </div>
            <InputSection>
                <div className="spanBox">
                    <div className="inputbox">
                        <pre>
                            <code>
                                {Text()}
                            </code>
                        </pre>
                    </div>
                    <textarea ref={markDownInput} autoComplete="off" autoCorrect="off" autoCapitalize="off" spellCheck="false" className="inputArea" value={over} onChange={(e) => setOver(e.target.value)}/>
                </div>
            </InputSection>
        </MarkDownEditer>
    )
}

const MarkDownEditer = styled.div`
    width: 80%; height: 600px;
    border: 1px solid var(--primary);
    border-radius: 5px;
    margin: 0 auto 50px;
    display: flex;
    flex-direction: column;

    & > div {
        //height: fit-content;
        display: flex;

        & > button {
            width: 35px; height: 35px;
        }
    }
`

const InputSection = styled.div`
    width: 100%; height: 100%;
    flex: 1;
    position: relative;
    overflow: auto;

    * {
        box-sizing: border-box;
    }

    .spanBox {
        width: 100%; height: 100%;
        border-top: 1px solid var(--primary);
        position: relative;
        padding: 10px;
        margin: auto;
    }

    .inputbox {
        position: relative;
        font-size: 15px;
        left: 0;
        top: 0;
        pre {
            margin: 0;
        }
        span {
            display: inline-block;
            width: auto;
            height: auto;
        }
    }

    .inputArea {
        width: 100%;
        height: 100%;
        position: absolute;
        -webkit-text-fill-color: transparent;
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