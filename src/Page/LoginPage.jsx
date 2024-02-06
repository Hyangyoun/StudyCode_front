import React, { useState } from "react";
import styled from "styled-components";
import Header from "../Main/Header";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function LoginPage(props) {

    const navigate = useNavigate();
    const [id , setId] = useState("");
    const [password, setPassword] = useState("");

    function Validation() {
        if(id !== "" && password !== ""){
            const sessionStorage = window.sessionStorage;
            axios.post("/api/member/login", {
                memId: id,
                password: password
            })
            .then((response) => {
                if(response.data !== "") {
                    sessionStorage.setItem("memId", id)
                    console.log(response.data)
                    sessionStorage.setItem("nickname", response.data)
                    navigate("/")
                }
                else {
                    alert("아이디 혹은 비밀번호가 일치하지 않습니다.")
                    setPassword("")
                }
            })
            .catch((error) => console.log("Validation",error))
        }
        else{
            alert("다시 로그인 하세요")
            setId("")
            setPassword("")
        }
    }

    return(
        <>
            <Header />
            <LoginSection>
                <input type="text" placeholder="아이디" value={id} onChange={(e) => setId(e.target.value)} />
                <input type="password" placeholder="비밀번호" value={password} onChange={(e) => setPassword(e.target.value)}/>
                <div className="checkBox">
                    <input id="autoLogin" type="checkbox" />
                    <label htmlFor="autoLogin">자동로그인</label>
                    <input id="saveId" type="checkbox" />
                    <label htmlFor="saveId">아이디저장</label>
                </div>
                <div className="loginBox" onClick={() => Validation()}>로그인</div>
                <div className="findBox">
                    <span>아이디 찾기</span>
                    <span>비밀번호 찾기</span>
                </div>
                <div className="socialBox">
                    <img src="/image/icon/kakao.png" alt="카카오" />
                    <img src="/image/icon/google.png" alt="구글" />
                    <img src="/image/icon/naver.png" alt="네이버" />
                </div>
                <span>아직 회원이 아니신가요?</span>
                <div className="membershipBox" onClick={() => navigate("/login/membership")}>회원가입</div>
            </LoginSection>
        </>
    )
}

const LoginSection = styled.div`
    width: 1200px; height: 1200px;
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;

    &>input:first-child {
        margin: 95px 0 10px;
    }

    &>input {
        width: 420px; height: 50px;
        outline: none;
        border-radius: 5px;
        border: 1px solid var(--second);
        font-size: 15px;
        box-sizing: border-box;
        padding: 0 10px;
    }

    &>span {
        margin-top: 25px;
        text-align: center;
        font-size: 12px;
    }

    .checkBox {
        margin-top: 15px;
        display: flex;
        align-items: center;
        width: 420px; height: 15px;

        &>input {
            display: none;
        }
        > label {
            display: flex;
            align-items: center;
            justify-content: center;
            margin-right: 10px;
            cursor: pointer;
            font-size: 12px;
        }
        & > label::before {
            content: "";
            display: inline-block;
            margin-right: 5px;
            box-sizing: border-box;
            width: 15px; height: 15px;
            border: 1px solid var(--second);
            border-radius: 3px;
        }

        & > input:checked + label::before {
            content: "\\2713";
            color: white;
            border: none;
            text-align: center;
            background-color: var(--second);
        }
    }

    .loginBox {
        width: 420px; height: 50px;
        margin-top: 15px;
        background-color: var(--second);
        color: white;
        border-radius: 5px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 15px;
        cursor: pointer;
    }

    .findBox {
        width: 420px;
        margin-top: 15px;
        display: flex;
        align-items: center;
        justify-content: center;

        >span:first-child {
            margin-right: 15px;
        }

        &>span {
            font-size: 12px;
            cursor: pointer;
        }
    }

    .socialBox {
        width: 190px;
        margin-top: 20px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        &>img {
            cursor: pointer;
        }
    }

    .membershipBox {
        width: 420px; height: 50px;
        background-color: var(--second);
        color: white;
        border-radius: 5px;
        margin-top: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 15px;
        cursor: pointer;
    }
`

export default LoginPage