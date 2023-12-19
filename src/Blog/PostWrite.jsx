import styled from "styled-components"
import Editer, { buttonType } from "../MarkDownEditer/Editer";
import React, { useEffect, useState, useRef } from "react";
import PostConfig from "./BlogItem/PostConfig";
import Preview from "./BlogItem/Preview";
import BlogHeader from "../Main/BlogHeader";
import axios from "axios";

function PostWrite(props){

    const Upload = useRef()
    
    //tag리스트 state
    const [tagList , setTagList] = useState([])
    const [tagName , setTagName] = useState('')

    const [WriteValue, setWriteValue] = useState("");
    const [fileList, setFileList] = useState([]);
    const [folderList , setFolderList] = useState([]);
    const [nextButton , setNextButton] = useState(false) //글다쓰고 최종선택으로 넘어가기 직전 버튼

    const [preview, setPreview] = useState(false)
    const [title, setTitle] = useState("")

    // console.log(fileList)

    //TagInput Event
    const handleTagList = (e) => {
        if(e.key === "Enter"){            //키보드 값을 받을때는 e.key 사용
            let copy = tagList
            if(!copy.includes(tagName)){
                copy.push(tagName)
                setTagList([...copy])     //기존배열을 지우고 새배열을 출력
            }
            setTagName('')
        }
        else if(e.key === "Backspace"){   
            let copy = tagList
            if(!tagName){
                copy.pop()                 //배열값에서 끝에값을 지움
                setTagList([...copy])      ////기존배열을 지우고 새배열을 출력
            }
        }
    }

    const sessionStorage = window.sessionStorage
    const SendWriteData = (previewImage,selectButton,chooseCategory) => {
        // axios.post("/api/post/regist" , {
            // memId: sessionStorage.getItem("memId"),
            // title: title,
            // taglist: tagList,
            // content: encodeURIComponent(WriteValue),
            // categoryName: chooseCategory,
            // fileName: fileList,
            // open:selectButton,
            // previewImage:previewImage
        // })
        // .then((response) => {
        //     const copy = []
        //     tagList.forEach((item) => {
        //         copy.push({
        //             postIndex: response.data,
        //             tagName: item
        //         })
        //     })
        //     axios.post("/api/post/regist/tag" , copy)
        //     .catch((error) => {console.log(error)})
        // })
        // .catch((error) => console.log(error))
        const data ={
            memId: sessionStorage.getItem("memId"),
            categoryName: chooseCategory,
            title: title,
            taglist: tagList,
            content: WriteValue,
            fileList: fileList,
            folderList: folderList,
            open:selectButton,
            previewImage:previewImage
        }
        console.log(data)
    }

    useEffect(() => {

    })

    const AddFile = (e) => {
        const newFile = e.target.files[0]
        if(newFile){
            const copy = [...fileList]
            const fileName = newFile.name;
            if(!copy.some(file => file.fileName === fileName)){
                copy.push({
                    file: newFile,
                    fileName: fileName,
                    memId : sessionStorage.getItem("memId")
                })
                setFileList(copy)
            }
            else alert("파일이 중복됩니다")
        }
    }

    const ChooseFolder = (e) => {
        const {id, value} = e.target
        console.log(value)
        const copy = JSON.parse(JSON.stringify([...fileList]))
        const index = copy.findIndex((i) => i.fileName == id)
        copy[index].folderName = value
        setFolderList(copy)
    }

    const HandleFileList = (event) =>{
        let copy = fileList.filter((e) => e !== event)
        setFileList(copy)
    }

    return(
        <>
            <BlogHeader/>
            <WriteStyle $nextButton={nextButton}>
                <input value={title} onChange={(e) => setTitle(e.target.value)} maxLength={15} className="postTitle" placeholder="제목을 입력하세요"/>
                <div className="tagBox">
                    {tagList.map((item , index) => <div key={index}>{item}</div>)}
                    <input value={tagName} onChange={(e) => {setTagName(e.target.value)}}
                    onKeyDown={handleTagList} className="taginput" placeholder="태그를 입력하세요"/>
                </div>
                <Editer value={WriteValue} setValue={setWriteValue} height={500} buttonList={[
                    [buttonType.title1, buttonType.title2, buttonType.title3],
                    [buttonType.bold, buttonType.italic, buttonType.strikethrough],
                    [buttonType.code, buttonType.codeBlock, buttonType.quote, buttonType.link, buttonType.image, buttonType.line]
                ]} />
                <div className="importFile">
                    <div className="attachSection">
                        <div>파일첨부</div>
                        <ul>
                            {
                                fileList.map((item, index) => {
                                    return (
                                        <li key={index}>
                                            <span onClick={() =>HandleFileList(item)}>x</span>
                                            {item.fileName}
                                            <div>
                                                <select id={item.fileName} onChange={(e) => ChooseFolder(e)}>
                                                    <option value={"선택안함"}>선택안함</option>
                                                    <option value={"JavaScript"}>JavaScript</option>
                                                    <option value={"React"}>React</option>
                                                    <option value={"Java"}>Java</option>
                                                </select>
                                            </div>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                        <span onClick={() => Upload.current.click()}>+</span>
                        <input onChange={AddFile} ref={Upload} type="file" style={{display: "none"}}/>
                    </div>
                    <div className="previewBT" onClick={() => setPreview(true)}>미리보기</div>
                </div>
                <div className="writeBtn" onClick={() => setNextButton(true)}>다음</div> 
            </WriteStyle>
            {nextButton ? <PostConfig setNextButton={setNextButton} SendWriteData={SendWriteData} /> : null}
            {preview ? <Preview title={title} tag={tagList} content={WriteValue}  setPreview={setPreview} /> : null}
        </>
    )
}

const WriteStyle = styled.div`
    width: 85%;
    height: auto;
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;

    .postTitle{                             ///////////////타이틀/////////////
        font-size: 20px;
        font-weight: bold;
        outline: none;
        border: 0;
        border-bottom: 2px solid var(--second);
        background-color: var(--background);
        margin: 0 auto;
        width: 100%;
        height: 60px;
    }
    
    .tagBox{
        width: 100%;
        padding: 10px 0;
        display: flex;
        flex-direction: row;
        align-items: center;
        flex-wrap: wrap;
        
        .taginput{                             ///////////////태그안에 입력값/////////////
            width: 200px;
            height: 25px;
            font-size: 15px;
            outline: none;
            border: 0;
            background-color: var(--background);
            color: var(--second);
            margin-bottom: 10px;
            padding: 0 2px;
            &::placeholder{
                color: var(--second);
                font-size: 15px;
            }
        }

        & > div {                             ///////////////태그/////////////
            width: auto;
            height: 25px;
            flex-shrink: 0;
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: var(--second);
            border-radius: 10px;
            padding: 0 10px;
            margin-bottom: 10px;
            margin-right: 10px;
            font-size: 15px;
            flex-wrap: nowrap; 
        }
    }

    .importFile {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin-top: 10px;

        .attachSection {
            width: 410px;
            user-select: none;
            font-size: 15px;

            > span {
                width: 100%;
                height: 20px;
                display: inline-block;
                background-color: var(--second2);
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 15px;
                cursor: pointer;
            }

            > div {
                font-size: 20px;
                border-bottom: 1px solid var(--second);
                padding-left: 10px;
            }

            > ul {
                padding: 0;
                margin: 0;

                > li {
                    height: 30px;
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    border-bottom: 1px solid var(--second);
                    padding: 0 10px;

                    > span {
                        margin-right: 10px;
                        cursor: pointer;
                    }

                    > div {
                        margin-left: auto;
                        position: relative;

                        &::after {
                            content: url("/image/icon/arrow1.png");
                        }

                        > input {
                            display: none;
                        }

                        > label {
                            position: absolute;
                            width: 100%; height: 100%;
                            left: 0;
                            top: 0;
                        }

                        > input:checked + .selectFolder {
                            display: block;
                        }
                    }

                    .selectFolder{          /////////////파일첨부안에 내용들
                        display: none;
                        width: 80px;
                        height: auto;
                        padding: 0;
                        list-style: none;
                        position: absolute;
                        right: 0;
                        border: 1px solid var(--second);
                        background-color: var(--background);
                        z-index: 100;
                    }
                }
            }
        }
        
        .previewBT {
            user-select: none;
            width: 115px;
            height: 30px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            background-color: var(--second);
            border-radius: 5px;
            cursor: pointer;
        }
    }

    .writeBtn{                               ///////////////다음으로 넘어가는 버튼/////////////
        margin: 100px auto 20px;
        width: 260px;
        height: 35px;
        background-color: var(--background);
        border: 1px solid var(--second);
        border-radius: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        &:hover{
            background-color: var(--second);
            color: white;
        }
    }

`
export default PostWrite