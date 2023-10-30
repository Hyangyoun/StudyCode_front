import styled from "styled-components"
import Review from "./Review"
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
                    </div>
                    <div className="filebox">
                        <div className="fileBtn" onClick={() => {setAddFolder(!addFolder)}} >파일첨부</div>
                        <ul className="fileName">
                            <li >logo.png</li>
                            <li>lddd.png</li>
                        </ul>
                    </div>
                    <div className="images" >
                        <img src="/image/icon/sample.png" alt="썸네일" />
                    </div>
                    <div className="images" >
                        <img src="/image/icon/sample.png" alt="썸네일" />
                    </div>
                    
                    <div className="contents">미안하다 이거 보여주려고 어그로끌었다.. 나루토 사스케 싸움수준 ㄹㅇ실화냐? 진짜 세계관최강자들의 싸움이다.. 그찐따같던 나루토가 맞나? 진짜 나루토는 전설이다..진짜옛날에 맨날나루토봘는데 왕같은존재인 호카게 되서 세계최강 전설적인 영웅이된나루토보면 진짜내가다 감격스럽고 나루토 노래부터 명장면까지 가슴울리는장면들이 뇌리에 스치면서 가슴이 웅장해진다.. 그리고 극장판 에 카카시앞에 운석날라오는 거대한 걸 사스케가 갑자기 순식간에 나타나서 부숴버리곤 개간지나게 나루토가 없다면 마을을 지킬 자는 나밖에 없다 라며 바람처럼 사라진장면은 진짜 나루토처음부터 본사람이면 안울수가없더라 진짜 너무 감격스럽고 보루토를 최근에 알았는데 미안하다.. 지금20화보는데 진짜 나루토세대나와서 너무 감격스럽고 모두어엿하게 큰거보니 내가 다 뭔가 알수없는 추억이라해야되나 그런감정이 이상하게 얽혀있다.. 시노는 말이많아진거같다 좋은선생이고..그리고 보루토왜욕하냐 귀여운데 나루토를보는것같다 성격도 닮았어 그리고버루토에 나루토사스케 둘이싸워도 이기는 신같은존재 나온다는게 사실임?? 그리고인터닛에 쳐봣는디 이거 ㄹㅇㄹㅇ 진짜팩트냐?? 저적이 보루토에 나오는 신급괴물임?ㅡ 나루토사스케 합체한거봐라 진짜 ㅆㅂ 이거보고 개충격먹어가지고 와 소리 저절로 나오더라 ;; 진짜 저건 개오지는데.. 저게 ㄹㅇ이면 진짜 꼭봐야돼 진짜 세계도 파괴시키는거아니야 .. 와 진짜 나루토사스케가 저렇게 되다니 진짜 눈물나려고했다.. 버루토그라서 계속보는중인데 저거 ㄹㅇ이냐..? 하.. ㅆㅂ 사스케 보고싶다..  진짜언제 이렇게 신급 최강들이 되었을까 옛날생각나고 나 중딩때생각나고 뭔가 슬프기도하고 좋기도하고 감격도하고 여러가지감정이 복잡하네.. 아무튼 나루토는 진짜 애니중최거명작임..</div>
                    
                    <Review setEnd={setEnd}/>
                </div >
            </BlogViewer >
        </>
    )
}

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
        margin-top: 150px;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        position: relative;
        
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