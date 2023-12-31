import { useState } from "react";
import SmallHeader from "../Main/SmallHeader";
import styled from "styled-components";

function MembershipPage(props){
    
    //----------회원정보----------//
    const [id, setId] = useState("")
    const [password , setPassword] = useState("")
    const [email , setEmail] = useState("")
    const [nickName, setNickName] = useState("")
    
    //---------이메일 인증번호---------//
    const [emailNum , setEmailNum] = useState(null)
    
    //-----------입력란 유효성------------//
    const [idCheck , setIdCheck] = useState(false)
    const [pwCheck, setPwCheck] = useState(false)
    const [emailCheck , setEmailCheck] = useState(false)
    
    /** 최종 가입정보 api Post */
    const PostMemberData = (e) => {
        e.preventDefault()
        const data = {
            "id" : id,
            "password" : password,
            "email" : email,
            "nickname" : nickName,
            "social" : false
        }

        if(idCheck && pwCheck && emailCheck){
            console.log(data)
        }
    }

    /** 이메일 인증번호api 요청 */
    const ExportEmail = () =>{
        if(!email.includes("@") || email.length < 15) { //
            return;
        }
        setEmailNum(123456)
    }

    /** 패스워드 일치 검사 */
    const CheckPassword = (e) => {
        if(password === e.target.value && password !== "") {
            setPwCheck(true)
        }
        else setPwCheck(false)
    }

    /** 이메일 인증번호 일치 검사 */
    const CheckEmail = (e) => {
        if(emailNum == e.target.value) {
            setEmailCheck(true)
        }
        else setEmailCheck(false)
    }


    return(
        <>
            <SmallHeader/>
                <MembershipTool>
                    <form onSubmit={PostMemberData}>
                        <div>
                            <ul>
                                <li>
                                    <span className="inputName">아이디</span>
                                    <input className="inputId" type="text"
                                    placeholder="아이디를 입력하세요"
                                    onChange={(e) => setId(e.target.value)}
                                    />
                                    <div onClick={() => {setIdCheck(true)}}>중복확인</div>
                                    <span className="idInputCondition">{idCheck ? "확인되었습니다" : "영문+숫자 최소5자이상 최대15자이하"}</span>
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
                                    placeholder="비밀번호를 재입력하세요"
                                    onChange={(e) => CheckPassword(e)}
                                    />
                                    <span className="inputCondition">{pwCheck ? "일치합니다" :"영문자+숫자 9자이상"}</span>
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
                                    onChange={(e) => setNickName(e.target.value)}
                                    />
                                    <span className="inputCondition">
                                        최소2자,최대15자, 특수문자는 "_"만가능</span>
                                </li>
                                    {emailNum !== null ? <li>
                                    <span className="inputName"> </span>
                                    <input className="inputId" type="text" 
                                    placeholder="인증번호 입력"
                                    onChange={(e) => CheckEmail(e)}
                                    />
                                    <span className="inputCondition">{emailCheck ? "인증되었습니다": null}</span>
                                </li> : null}
                            </ul>
                            <button className="membership" onClick={PostMemberData}>
                                회원가입
                            </button>
                        </div>
                    </form>
                </MembershipTool>
        </>
)
}

const MembershipTool = styled.div`
    width: 635px;
    height: auto;
    display:flex;
    flex-direction: column;
    align-items: center;
    margin:auto;
    div{
        margin: 70px 0 0 0;
    }
    ul{
        padding: 0;
        margin: 0;
    }
    ul>li{
        list-style: none;
        width: 635px; height: auto;
        margin:0 0 50px 0;
        display: flex;
        flex-direction: row;
        align-items: center;
    }
    li>div{
        width: 100px;
        height:40px;
        margin: 0 0 0 5px;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 1px solid var(--second);
        border-radius: 5px;
        cursor: pointer;
        &:hover {
            background-color: var(--second);
            color: white;
        }    
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
        border: 1px solid var(--second);
        border-radius: 5px;
        outline: 0;
        padding: 0 10px 0 10px;
    }
    .idInputCondition{
        font-size: 12px;
        color: var(--primary);
        position: relative;
        top: 35px;
        right: 525px;
    }
    .inputCondition{
        font-size: 12px;
        color: var(--primary);
        position: relative;
        top: 35px;
        right: 420px;
    }
    .membership{
        width: 260px; height: 40px;
        border: 1px solid var(--second);
        border-radius: 5px;
        background-color: var(--second);
        margin: 80px auto 125px auto;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
    }
`
export default MembershipPage