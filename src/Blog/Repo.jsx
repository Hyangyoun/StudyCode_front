import { useState, useRef, useEffect } from "react"
import styled from "styled-components"

function Repo(props){
    const [addFolder,setAddFolder] = useState(false) //폴더 추가 버튼
    const folderNameInput = useRef();
    const addFolderBox = useRef();

    useEffect(() => {
        if(addFolder) {
            folderNameInput.current.focus()
        }
    },[addFolder])

    const CloseBox = (event) => {
        if(!addFolderBox.current.contains(event.target)) {
            setAddFolder(false)
        }
    }

    useEffect(() => {
        document.addEventListener("mousedown", CloseBox)
        return (() => {
            document.removeEventListener("mousedown", CloseBox)
        })
    },[])

    return(
        <RepoList $addFolder={addFolder}>
            <ul className="repo">
                <li className="repoFirst">
                    <span className="nickName">{"js싫어요"} 의 저장소</span>
                    <div className="folderform">
                        <div className="addBox" ref={addFolderBox}>
                            <input type="text" placeholder="폴더이름" ref={folderNameInput} />
                            <div className="addFolder">추가하기</div>
                        </div>
                        <div className="addFolderBtn" onClick={() => setAddFolder(true)}>폴더추가</div>
                    </div>
                </li>
                <li className="repoList">
                    <span className="folderName">React</span>
                </li>
                <li className="repoList">
                    <span className="fileName">test.jsx</span>
                    <div className="download">
                        <span className="postName"> 내 토요일 내놔</span>
                        <img className="downloadImage" src="/image/icon/download.png" alt="다운로드 버튼"/>
                    </div>
                </li>
            </ul>
        </RepoList>
    )
}

const RepoList = styled.div`
    width: auto;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 auto;

    .repo{
        width: 1000px;
        height: auto;
        padding: 0;
        list-style: none;
        margin: 70px 0 0 0;
        border: 1px solid var(--second);
        border-radius: 5px;

        &>li:not(:last-child) {
            border-bottom: 1px solid var(--second);
        }
    }

    .repoFirst{
        width:auto;
        height: 40px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        border-radius: 5px 5px 0 0;
        background-color: var(--second2);
    }
    
    .nickName{
        margin-left: 10px;
        font-size: 15px;
    }
    .folderform{
        display: flex;
        flex-direction: row;
        align-items: center;
        position: relative;
    }

    .addBox{
        width: 300px; height: 50px;
        background-color: var(--background);
        display: ${(props) => props.$addFolder ? "flex" : "none"};
        flex-direction: row;
        align-items: center;
        justify-content: space-evenly;
        border-radius: 5px;
        border: 1px solid var(--second);
        position: absolute;
        top: 25px;
        left: -230px;
                
        &>input{
            width: 215px; height: 25px;
            border :1px solid var(--second) ;
            box-sizing: border-box;
            font-size: 12px;
            outline: none;
            background-color: white;
        }

        .addFolder{
            width: 60px; height: 25px;
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: var(--second);
            border-radius: 5px;
            font-size: 12px;
            color: white;
            cursor: pointer;
        }
    }

    .addFolderBtn{
        width: 70px; height: 20px;
        border: 1px solid var(--second);
        border-radius: 5px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: 10px;
        font-size: 12px;
        cursor: pointer;
        &:hover {
            color: white;
            background-color: var(--second);
        }
    }

    .repoList{
        width:auto;
        height: 40px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }

    .folderName{
        font-size: 15px;
        cursor: pointer;
        &::before{
            margin: 0 10px;
            content: url("/image/icon/folder.png");
        }
        &:hover{
            text-decoration: underline;
        }
    }

    .fileName{
        font-size: 15px;
        cursor: pointer;
        &::before{
            margin: 0 10px;
            content: url("/image/icon/File.png");
        }
        &:hover{
            text-decoration: underline;
        }
    }

    .download{
        display: flex;
        flex-direction: row;
        margin-right: 15px;
    }

    .postName{
        margin-right: 85px;
        cursor: pointer;
    }

    .downloadImage{
        cursor: pointer;
    }
`
export default Repo