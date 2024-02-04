import { useState, useRef, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import styled from "styled-components"
import axios from "axios"
import repodata from "../DummyData/Repository.json"
import repoFileList from "../DummyData/FileList.json"

function Repository(props){

    const { nickname , folderName } = useParams();
    const username = window.sessionStorage.getItem("nickname");
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

//레포지토리 기능구현
    useEffect(() => {
        // axios.get("/api/blog/repository/folder" ,{
        //     params: {
        //         nickname: nickname
        //     }
        // })
        // .then((response) => {
        /**폴더 리스트를 리스폰스에서 받을때 선택안함을 걸러준다 */
        //     console.log(response.data)
        //     let noName= []
        //     let copy = []
        //     noName = response.data.find((item) => item == "선택안함")
        //     copy = response.data.filter((item) => item != "선택안함")
        //     setFolderList(copy)
            if(!folderName){
            /**폴더네임(주소값) 이 없으면 선택안함의 파일을 요청한다 */
            //     axios.get("/api/blog/repository/file" , {
            //         params: {
            //             nickname:nickname,
            //             folderName: noName
            //         }
            //     })
            //     .then((response) => {
            //         setFileList(response.data)
            //     })
            //     .catch((error) => console.log(error))
                setFileList(repoFileList) //실제 사용시 주석처리
            }
            else{
            /** 파일폴더가 하나도없을때 실행된다 */
                // axios.get("/api/blog/repository/file" , {
                //     params: {
                //         nickname:nickname,
                //         folderName: folderName || "선택안함"
                //     }
                // })
                // .then((response) => {
                //     setFileList(response.data)
                // })
                // .catch((error) => console.log(error))
                setFileList(repoFileList) //실제 사용시 주석처리
            }
        //     })
        //     .catch((error) => {console.log(error)})
            setFolderList(repodata) //실제 사용시 주석처리
        document.addEventListener("mousedown", CloseBox)
        return (() => {
            document.removeEventListener("mousedown", CloseBox)
        })
    },[])

    
    // 폴더추가 함수
    const AddFolder = () => {
        if(FolderInput){
            // axios.post("" , {
                //     memId : sessionStorage.getItem("memId"),
                //     folderName:FolderInput
                // })
                // .then((response) =>{
                    // setFolderList(response.data)
                    // })
                    // .catch((error) => console.log(error))
            let folderListBox = folderList
            if(!folderListBox.includes(FolderInput)){
                folderListBox.push(FolderInput)
                setFolderList([...folderListBox])     //기존배열을 지우고 새배열을 출력
            }
            setAddFolder(false)
            setFolderInput("")
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
                    <div className={username == nickname && !folderName ? "folderform" : "disabled"}>
                        <div className="addBox" ref={addFolderBox}>
                            <input type="text" maxLength={20} placeholder="폴더이름" ref={folderNameRef} value={FolderInput} onChange={(e) => setFolderInput(e.target.value)}/>
                            <div className="addFolder" onClick={AddFolder}>추가하기</div>
                        </div>
                        <div className="addFolderBtn" onClick={() => setAddFolder(true)}>폴더추가</div>
                    </div>
                </li>
                {/* 아래 폴더,파일 부분 , 폴더네임이 false 면(undefinded) 아래 파일리스트가 제목없음의 파일리스트만 보임*/}
                <li className={!folderName ? "disabled" : "repoList"} ><span onClick={() => {navigate(`/blog/${nickname}/repository`)}} className="folderName">돌아가기</span></li>
                {
                    !folderName ?
                    folderList.map((item , index) => {
                        return (
                            <li key={index} className="repoList">
                                <span onClick={() => {navigate(`/blog/${nickname}/repository/${item}`)}} className="folderName">{item}</span>
                            </li>
                        )
                    })
                    :
                    fileList.map((item , index) => {
                        return(
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