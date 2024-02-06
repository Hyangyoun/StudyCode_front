import { useState, useRef, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import styled from "styled-components"
import axios from "axios"
import repodata from "../DummyData/Repository.json"
import noFolderList from "../DummyData/FileList.json"

function Repository(props){

    const { nickname , folderName } = useParams();
    const userBlogIndex = sessionStorage.getItem("blogIndex");
    const { isOwner } = props;
    const navigate = useNavigate();
    const folderNameRef = useRef();
    const addFolderBox = useRef();

    // folder,file리스트 state
    const [ folderList , setFolderList ] = useState([]);
    const [ fileList , setFileList ] = useState([]);
    //폴더 추가 state
    const [ addFolder , setAddFolder ] = useState(false);
    const [FolderInput , setFolderInput] = useState("");

    useEffect(() => {
        if(addFolder) {
            folderNameRef.current.focus()
        }
    },[addFolder])

    const CloseBox = (event) => {
        if(!addFolderBox.current.contains(event.target)) {
            setAddFolder(false)
        }
    }

//레포지토리 기능구현 폴더리스트
    useEffect(() => {
        axios.get("/repository/folder/list" ,{
            params: {
                blogindex: userBlogIndex
            }
        })
        .then((response) => {
            setFolderList(response.data)
        })
        .catch((error) => console.log("setFolderList",error))
        axios.get("/repository/nofolder/list",{
            params:{
                blogindex: userBlogIndex
            }
        })
        .then((response) => {
            setFileList(response.data)
        })
        .catch((error) => console.log("setFileList",error))
            // setFolderList(repodata) //실제 사용시 주석처리
            // setFileList(noFolderList)
        document.addEventListener("mousedown", CloseBox)
        return (() => {
            document.removeEventListener("mousedown", CloseBox)
        })
    },[])
    
    // 폴더추가 함수
    const AddFolder = () => {
        if(FolderInput){
            axios.post("/repository/add/folder" , {
                    blogIndex : userBlogIndex,
                    folderName:FolderInput
                })
                .then((response) =>{
                    setFolderList(response.data)
                    window.location.reload()
                })
                .catch((error) => console.log("AddFolder",error))
            // let folderListBox = folderList
            // if(!folderListBox.includes(FolderInput)){
            //     folderListBox.push(
            //         {
            //             "folderName": `${FolderInput}`,
            //             "fileIndex": folderListBox.length
            //           },
                    
            //     )
            //     setFolderList([...folderListBox])     //기존배열을 지우고 새배열을 출력
            // }
            // setAddFolder(false)
            // setFolderInput("")
        }
    }

    //폴더클릭시 실행되는 함수 , 폴더네임과 
    const ClickFolder = (folder ,fileIndex) =>{
        if(!folderName){
        axios.get("/repository/folder/list" ,{
            params: {
                folderName: folder,
                fileIndex: fileIndex
            }
        })
        .then((response) => {
            console.log(response.data)
            setFolderList(response.data)
        })
        .catch((error) => {console.log("ClickFolder",error)})
        // navigate(`/blog/${nickname}/repository/${folder}`)
        }
    }

    //파일 다운로드
    const DownLoadFile = (item) =>{
        const data = `${item.filePath}`
        const pom = document.createElement('a');
        const blob = new Blob(["\ufeff"+data]);
        const url = window.URL.createObjectURL(blob);

        pom.href = url;
        pom.setAttribute('download', item.fileName);
        pom.click();
        pom.remove();
        }

    return(
        <RepoList $addFolder={addFolder}>
            <ul className="repo">
                {/* 맨위 부분 */}
                <li className="repoFirst">
                    <span className="nickName">{nickname} 의 저장소</span>
                    <div className={isOwner && !folderName ? "folderform" : "disabled"}>
                        <div className="addBox" ref={addFolderBox}>
                            <input type="text" maxLength={20} placeholder="폴더이름" ref={folderNameRef} value={FolderInput} onChange={(e) => setFolderInput(e.target.value)}/>
                            <div className="addFolder" onClick={AddFolder}>추가하기</div>
                        </div>
                        <div className="addFolderBtn" onClick={() => setAddFolder(true)}>폴더추가</div>
                    </div>
                </li>
                {/* 아래 폴더,파일 부분 , 폴더네임이 false 면(undefinded) 아래 파일리스트가 제목없음의 파일리스트만 보임*/}
                <li className={!folderName ? "disabled" : "repoList"} ><span onClick={() => {navigate(`/blog/${nickname}/repository`)}} className="folderName">돌아가기</span></li>
                {!folderName ?
                // 처음 보이는 폴더 리스트맵
                    folderList.map((item , index) => {
                        return (
                                <li key={index} className="repoList">
                                    <span onClick={() => ClickFolder(item.folderName , item.fileIndex)} className="folderName">{item.folderName}</span>
                                </li>
                        )
                    })
                    :
                    // 폴더클릭시 보이는 리스트 맵
                    folderList.map((item , index) => {
                        return (
                        <li key={index} className="repoList">
                            <span className="fileName">{item.fileName}</span>
                            <div className="download">
                                <span className="postName">{item.postTitle}</span>
                                <img className="downloadImage" onClick={() =>DownLoadFile(item)} src="/image/icon/download.png" alt="다운로드 버튼"/>
                            </div>
                        </li>
                        )
                    })
                }
                { !folderName ?
                // 폴더에저장하지않은 파일이 보이는 리스트 맵
                    fileList.map((item, index) => {
                        return (
                        <li key={index} className="repoList">
                            <span className="fileName">{item.fileName}</span>
                            <div className="download">
                                <span className="postName">{item.postTitle}</span>
                                <img className="downloadImage" onClick={() =>DownLoadFile(item)} src="/image/icon/download.png" alt="다운로드 버튼"/>
                            </div>
                        </li>
                        )
                    })
                :
                null
                }
            </ul>
        </RepoList>
    )
}

const RepoList = styled.div`
    width: 100%;
    height: auto;
    margin: 70px 0 0 0;
    .repo{
        width: 1000px;
        height: auto;
        padding: 0;
        list-style: none;
        margin: auto;
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

    .disabled{
        display: none;
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
export default Repository