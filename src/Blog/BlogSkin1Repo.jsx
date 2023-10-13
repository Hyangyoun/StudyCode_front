import styled from "styled-components"

function BlogSkin1Repo(props){

    return(
        <RepoList>
            <ul className="repo">
                <li className="repoFirst">
                    <span className="nickName">{"js싫어요"} 의 저장소</span>
                    <div className="addFolder">폴더추가</div >
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

    .repo{
        width: 1000px;
        height: auto;
        padding: 0;
        margin: 0;
        list-style: none;
    }

    .repoFirst{
        width:auto;
        height: 40px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        border: 1px solid var(--second);
        border-radius: 5px 5px 0 0;
        background-color: var(--second2);
    }

    .nickName{
        margin-left: 10px;
        font-size: 15px;
    }

    .addFolder{
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
        border: 1px solid var(--second);
        border-top: 0px;
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
export default BlogSkin1Repo