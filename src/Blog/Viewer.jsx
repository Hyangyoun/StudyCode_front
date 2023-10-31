import styled from "styled-components"
import Review from "./Review"
import MDviewer from "../MarkDownEditer/MDviewer";
import { useEffect, useRef, useState } from "react"

function Viewer(props){

    const [changePosition , setChangePosition] = useState(false); //포시션 바꾸기위해 넣은 state

    const heartButton = useRef();  //하트버튼 참조용으로 만듦

    const [end , setEnd] = useState() // 댓글 위치 받음

    const [ changeHeart , setChangeHeart] = useState(false); // 하트 색 변경
    
    /** 스크롤 이벤트를 받는 함수 */
    const ScrollEvent = () => {
        if(window.scrollY <= end - 329 ) {
            heartButton.current.style.position = "fixed"
            setChangePosition(false)
        }
        else {
            heartButton.current.style.position = "absolute"
            setChangePosition(true)
        }
    }

    /** 스크롤 변화가있을때마다 변화감지함 */
    useEffect(() => {
        document.addEventListener("scroll",ScrollEvent);
        return(() => {
            document.removeEventListener("scroll",ScrollEvent);
        })
    })


    const [addFolder, setAddFolder] = useState(false) //파일보기위한 버튼

    return(
        <>
            <BlogViewer $addFolder={addFolder} $changePosition={changePosition} $end={end}>
                <div  className="heart">
                    <div className="like" ref={heartButton} onClick={() => {setChangeHeart(!changeHeart)}}>
                         <img src={ changeHeart ? "./image/icon/bigheart2.png" : "./image/icon/bigheart1.png"} alt="좋아요"/>{12}
                    </div>
                </div>
                <div  className="post">
                    <img className="logo" src="/image/icon/logo.png" alt="로고"/>
                    <div className="title" >내토요일 내놔</div>
                    <div className="date">
                        <span >js싫어요</span>
                        <span >2023.09.14</span>
                    </div>
                    <div className="tagbox">
                        <li>JavaScript</li>
                        <li>React</li>
                        <li>JavaScriptttttttttttt</li>
                        <div className="filebox">
                            <div className="fileBtn" onClick={() => {setAddFolder(!addFolder)}} >파일첨부</div>
                            <ul className="fileName">
                                <li >logo.png</li>
                                <li>lddd.png</li>
                            </ul>
                        </div>
                    </div>

                    <MDviewer content={overView} />
                    
                    <Review setEnd={setEnd} />
                </div >
            </BlogViewer >
        </>
    )
}

const overView = `
# D2 Coding 글꼴
[![Github All Releases](https://img.shields.io/github/downloads/naver/d2codingfont/total.svg)](https://github.com/naver/d2codingfont)
![image](https://user-images.githubusercontent.com/6773678/33363823-54504d84-d525-11e7-9b26-0d2b9aec53f9.png)
### 다운로드
   - [Ver 1.3.2 (2018.06.01 배포)](https://github.com/naver/d2codingfont/releases/tag/VER1.3.2)
   - 기존 버전은 반드시 삭제후 설치 바랍니다.
   - 이전 버전들은 [Release 링크](https://github.com/naver/d2codingfont/releases)에 있습니다.
![image](https://user-images.githubusercontent.com/6773678/33355628-997fe52e-d4fb-11e7-9d1a-64c3b2d42de8.png)
      - 다양한 OS 및 개발도구 지원 : window, mac, linux(ubuntu) 환경에서 다양한 개발도구에서도 사용하실 수 있습니다.
![image](https://user-images.githubusercontent.com/6773678/33353005-fac0c8ec-d4ee-11e7-8e51-3077c1771144.png)

## 글꼴 소개
D2 Coding 글꼴은 나눔바른고딕을 바탕으로 개발자의 코딩을 위해 가독성 및 유사 문자간 변별력 뿐만 아니라 디자인적으로 한글과의 조화를 고려해 최적화시킨 글꼴입니다. D2 Coding 글꼴은 코딩시 유사한 형태의 영문/숫자 뿐만 아니라 한글/특수문자 등에 대한 변별력과 가독성을 강화하였습니다.  또한 고정폭 글꼴로 제작이 되어 어떤 개발환경에서도 자간과 행간을 유지하도록 디자인되어 있습니다.

### 명확한  
코딩시 영문자와 숫자 뿐만 아니라 한글 유사 기호간 변별력을 향상되도록 디자인하였습니다. 또한 8~18pt 사이의 크기에서 명확하게 보일 수 있도록 힌팅 처리를 하였습니다.

![1](https://cloud.githubusercontent.com/assets/6773678/19587983/8d1a2304-979d-11e6-8320-4e8f0546e716.JPG)

### 부드러운
한글은 나눔바른고딕을 기반으로하여 제작하였기 때문에 서체가 부드러우면서도 영문 코드와도 자연스럽게 조화되어 보입니다.

![2](https://cloud.githubusercontent.com/assets/6773678/19587989/9a990fae-979d-11e6-82e8-84316b4da96b.JPG)

### 반듯한  
고정폭 서체이므로 어떤 개발환경에서도 코드들이 가지런하게 보이며, 내부 개발자 베타 테스트를 통해 최적의 행간 및 자간을 적용함으로써 코드의 가독성을 향상하였습니다.

![3](https://cloud.githubusercontent.com/assets/6773678/19587988/9a9821f2-979d-11e6-8708-bd57220c219f.JPG)

### 지원 언어
한글, 영문자 및 확장자 332자에 대해 디자인이 되어 있으며 한자는 포함되어 있지 않습니다. (한자를 표시해야 할 경우 다른 글꼴로 대체됩니다.)
제어 문자 31자가 포함되어 있습니다.

## 라이센스  
'누구나 사용'할 수 있고 또 OFL 라이센스 하에서 '누구나 재배포' 하실 수 있습니다.

D2 Coding 글꼴은 OFL(Open Font License)이라는 국제적으로 인정받는 공개 글꼴을 위한 라이센스를 채택하여 사용에 대한 제약을 없앰과 동시에 재배포에 대한 제약도 획기적으로 완화하여, 이 라이센스를 명시하기만 하면 다른 프로그램(상용 프로그램 포함)에 이 개발자용 D2 Coding 글꼴을 포함하여 재배포하는 것도 허용합니다.

자세한 사항은 아래 [OpenFontLicense](https://github.com/naver/d2codingfont/wiki/Open-Font-License)를 참고하세요~
`

const BlogViewer = styled.div`
    user-select: none; // 드래그시 파란색 없애는 것 
    width: 85%;
    height: auto;
    display: flex;
    flex-direction: row;
    margin: auto;
    position: relative;
    :not(.contents){
    }
    .heart{
        height: 80%;
        position: absolute;
        top: 230px;
        left: -6%;
        z-index: 10;

    }
    .like{
        width: 55px;
        height: 100px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background-color: var(--second2);
        border: 1px solid var(--second);
        border-radius: 35px;
        top:${props => props.$changePosition ? props.$end - 329 : 230}px;

        cursor: pointer;

        &>img{
            width: 27px;
            height: auto;
            margin-bottom: 10px;
        }
    }

    .post{
        width: 100%;
        height: auto;
        display: flex;
        flex-direction: column;
        align-items:center;
        position: relative;

    }
    .logo{
        width: 195px;
        height: auto;
        margin: 70px auto 0;
        cursor: pointer;
    }
    
.title{
    display: flex;
    align-items: center;
    margin-top: 55px;
    width: 100%;
    height: 60px;
    font-size: 20px;
    font-weight: bold;
    border-bottom: 1px solid var(--primary);
}
    .date{
        width: 100%;
        height: auto;
        display: flex;
        font-size:12px;
        margin-top: 5px;
        padding-left:5px;
        &>span:nth-child(2){
            margin-left: 20px;
        }
}
    .tagbox{
        width: 100%;
        height: auto;
        display: flex;
        position: relative;
        flex-wrap: wrap;
        >li {
            display: block;               //block일때만 textoverflow 사용가능
            width: 103px; height: 25px;
            background-color: var(--second2);
            border-radius: 50px;
            font-size: 15px;
            color: var(--primary);
            margin: 5px 5px 0;
            box-sizing: border-box;
            padding: 0 10px;
            overflow:hidden;
            text-overflow: ellipsis;  	// 로 ... 을 만들기 
            white-space: nowrap; 		// 아래줄로 내려가는 것을 막기위해
            text-align: center;
            cursor: pointer;
        }

        & > li:nth-child(7n-6){
                margin-left: 0;
        }
            
    }

    .filebox{
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        position: relative;
        margin-left: auto;
        
        .fileBtn{
            width: 130px;
            height: 35px;
            border-radius: 5px 5px 0 0 ;
            background-color: var(--second2);
            font-size: 15px;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
        }
    }
        .fileName{
            display: ${(props) => props.$addFolder ? "inline" : "none"};
            width: 200px;
            height: auto;
            min-height: 100px;
            box-sizing: border-box;
            list-style: none;
            margin: 0;
            padding-left: 15px;
            background-color: var(--second2);
            font-size: 15px;
            position: absolute;
            right: 0;
            top: 35px;
        &>li{
            display: flex;
            align-items: center;
            box-sizing: border-box;
            cursor: pointer;
            &::before{
                margin-right: 10px;
                padding-top: 5px;
                content: url("./image/icon/File.png");
            }
            &:hover{
                text-decoration: underline;
            }
            &:last-child{
                margin-bottom: 5px;
            }
        }
        }
    .images{
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        .img{
            width: 100%;
        }
    }
    .contents{
        width: 100%;
        font-size: 15px;
        margin: 15px 45px 0 ;
        display: flex;
    }
`
export default Viewer