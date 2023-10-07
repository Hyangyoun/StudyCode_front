import { useState,useEffect } from "react";
import SMHeader from "../Main/SmallHeader"
import styled from "styled-components";

function Membership(props){
    const [idCheck , setIdCheck] = useState(false)
    const [password , setPassword] = useState("")
    const [samePW , setSamePW] = useState("")
    const [checkPW, setCheckPW] = useState(false)
    const [emailCheck , setEmailCheck] = useState(false) //유효성검사시
    const [email , setEmail] = useState("")
    const [emailNum , setEmailNum] = useState(null)
    const [inputEmailNum, setInputEmailNum] = useState(0)

    useEffect(() => { //
        if(password === samePW && password !== ""){
            setCheckPW(true)
        }
        else {setCheckPW(false)}
    },[password,samePW])

    const ExportEmail = () =>{
        if(!email.includes("@") || email.length < 15){ //
            return;
        }
        setEmailNum(123456)
    }

    useEffect(() => {
        if(inputEmailNum == emailNum){  //
            setEmailCheck(true)
        }
        else {setEmailCheck(false)}
    },[inputEmailNum,emailNum])

    return(
        <>
            <SMHeader/>
            <MembershipTool>
                <div>
                    <ul>
                        <li>
                            <span className="inputName">아이디</span>
                            <input className="inputId" type="text"
                            placeholder="아이디를 입력하세요"
                            />
                            <div onClick={() => {setIdCheck(true)}}>중복확인</div>
                            <span className="inputCon">{idCheck ? "확인되었습니다" : "영문+숫자 최소5자이상 최대15자이하"}</span>
                        </li>
                        <li>
                            <span className="inputName">비밀번호</span>
                            <input className="inputId" type="password" 
                            placeholder="비밀번호를 입력하세요"
                            onChange={(e) => setPassword(e.target.value)}
                            />
                            <span className="inputCondition">영문자+숫자 9자이상</span>
                        </li>
                        <li>
                            <span className="inputName">비밀번호 확인</span>
                            <input className="inputId" type="password"
                            placeholder="비밀번호를 입력하세요"
                            onChange={(e) =>setSamePW(e.target.value)}
                            />
                            <span className="inputCondition">{checkPW ? "일치합니다" :"영문자+숫자 9자이상"}</span>
                        </li>
                        <li>
                            <span className="inputName">이메일</span>
                            <input className="inputId" type="email" 
                            placeholder="이메일을 입력하세요"
                            onChange={(e) => setEmail(e.target.value)}
                            />
                            <div onClick={(e) => ExportEmail(e)}>이메일 인증</div>
                        </li>
                        <li>
                            <span className="inputName">닉네임</span>
                            <input className="inputId" type="text" 
                            placeholder="닉네임을 입력하세요"
                            />
                            <span className="inputCondition">
                                최소2자,최대15자, 특수문자는 "_"만가능</span>
                        </li>
                        {emailNum !== null ? <li>
                        <span className="inputName"> </span>
                            <input className="inputId" type="text" 
                            placeholder="인증번호 입력"
                            onChange={(e) => setInputEmailNum(e.target.value)}
                            />
                            <span className="inputCondition">{emailCheck ? "인증되었습니다": null}</span>
                        </li> : null}
                    </ul>
                    <div className="membership">
                        회원가입
                    </div>
                </div>
            </MembershipTool>
        </>
          )
}
const MembershipTool = styled.div`
    width: 635px; height: 560px;
    display:flex;
    flex-direction: column;
    align-items: center;
    margin:auto;
    div{
        margin: 70px 0 0 0;
    }
    ul{
        flex-direction: column;
        padding: 0;
        margin: 0;
    }
    ul>li{
        align-items: center;
        width: 635px;
        margin:0 0 50px 0;
    }
    li>div{
        width: 100px;height:40px;
        margin: 0 0 0 5px;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 1px solid #C3ACD0;
        border-radius: 5px;
        cursor: pointer;
    }
    .inputCon{
        font-size: 12px;
        padding-left: 50px;
        color: #674188;
        position: relative;
        top: 35px;
        right: 575px;
    }
    .inputName{
        width: 100px; height: 20px;
        font-size: 15px;
        margin-right: 5px;
        text-align: right;
    }
    .inputId{
        width: 420px; height: 50px;
        box-sizing: border-box;
        border: 1px solid #C3ACD0;
        border-radius: 5px;
        outline: 0;
        padding: 0 10px 0 10px;
    }
    .inputCondition{
        font-size: 12px;
        padding-left: 50px;
        color: #674188;
        position: relative;
        top: 35px;
        right: 470px;
    }
    .membership{
        width: 260px; height: 40px;
        border: 1px solid #C3ACD0;
        border-radius: 5px;
        background-color: #C3ACD0;
        margin: 80px auto 125px auto;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
    }
`
export default Membership