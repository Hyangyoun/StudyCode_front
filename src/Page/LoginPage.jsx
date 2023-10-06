import React from "react";
import styled from "styled-components";
import Header from "../Main/Header";

function LoginPage(props) {
    return(
        <>
            <Header />
            <LoginSection>
                <input type="text" placeholder="아이디" />
                <input type="password" placeholder="비밀번호" />
                <div className="checkBox">
                    <input id="autoLogin" type="checkbox" />
                    <label htmlFor="autoLogin">자동로그인</label>
                    <input id="saveId" type="checkbox" />
                    <label htmlFor="saveId">아이디저장</label>
                </div>
                <div className="loginBox">로그인</div>
                <div className="findBox">
                    <span>아이디 찾기</span>
                    <span>비밀번호 찾기</span>
                </div>
                <div className="socialBox">
                    <img src="./image/icon/kakao.png" alt="카카오" />
                    <img src="./image/icon/google.png" alt="구글" />
                    <img src="./image/icon/naver.png" alt="네이버" />
                </div>
                <span>아직 회원이 아니신가요?</span>
                <div className="membershipBox">회원가입</div>
            </LoginSection>
        </>
    )
}

const LoginSection = styled.div`
    width: 1200px; height: 600px;
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
        border: 1px solid #C3ACD0;
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
            border: 1px solid #C3ACD0;
            border-radius: 3px;
        }

        & > input:checked + label::before {
            content: "\\2713";
            color: white;
            border: none;
            text-align: center;
            background-color: #C3ACD0;
        }
    }

    .loginBox {
        width: 420px; height: 50px;
        margin-top: 15px;
        background-color: #C3ACD0;
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
    }

    .membershipBox {
        width: 420px; height: 50px;
        background-color: #C3ACD0;
        color: white;
        border-radius: 5px;
        margin-top: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 15px;
    }
`



export default LoginPage