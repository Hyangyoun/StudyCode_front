import React, { useState } from "react";
import styled from "styled-components";
import Header from "../MainPageItem/header";
import axios from "axios";
//import Footer from "../MainPageItem/Footer";

function AdminPage(props) {

    const [values, setValues] = useState({
        name : "",
        kind : "",
        price : "",
        sale : "",
        option : "",
        option2 : "",
        option3 : "",
        option4 : "",
        delprice : ""
    })
    const [prodInfo, setProdInfo] = useState(null)
    const [prodImg, setProdImage] = useState([])
    const [contentName, setContentName] = useState(null)
    const [imgName, setimgName] = useState([])
    const {name, kind, price, sale, option, option2, option3, option4, delprice} = values
    const ChangeInfo = (event) => {
        setProdInfo(event.target.files[0])
        setContentName(event.target.files[0].name)
    }

    const ChangeImage = (event) => {
        let files = []
        let fileNames = []
        for(var i = 0; i<event.target.files.length; i++) {
            files.push(event.target.files[i])
            fileNames.push(event.target.files[i].name)
        }
        setProdImage(files)
        setimgName(fileNames)
    }

    const ChangeHandle = (event) => {
        setValues({
            ...values,
            [event.target.name] : event.target.value
        })
    }

    const RegistProduct = () => {
        if(name == "" || kind == "" || price == "" || option == "" || delprice == "" || prodInfo == null || prodImg.length == 0){
            alert("* 필수 입력사항을 입력해주세요.")
        }
        else {
            axios.post(
                "/product/regist",
                {
                    name: name,
                    kind: kind,
                    price: price,
                    sale: sale,
                    option: option,
                    option2: option2,
                    option3: option3,
                    option4: option4,
                    delprice: delprice
                }
            )
            .then((response) => {
                const formdata = new FormData()
                formdata.append("prodNum", response.data)
                formdata.append("content", prodInfo)
                formdata.append("prodImg", prodImg[0])
                formdata.append("prodImg", prodImg[1])
                formdata.append("prodImg", prodImg[2])
    
                axios.post("/product/regist/insert/image",
                formdata)
                .then((response) => {
                    alert(`"${name}" 상품이 등록되었습니다.`)
                    window.location.reload()
                })
            })
        }

    }

    return (
        <>
            <Header />
            <MainSection>
                <div className="pageName"><span>상품 등록</span></div>
                <div>
                    <span className="guide">필수입력사항</span>
                </div>
                <InputBox>
                    <ul>
                        <li>
                            <div><span className="important">상품명 :</span></div>
                            <input type="text" name="name" onChange={ChangeHandle} />
                        </li>
                        <li>
                            <div><span className="important">상품카테고리 :</span></div>
                            <input type="text" placeholder="4자리 숫자" name="kind" onChange={ChangeHandle} />
                        </li>
                        <li>
                            <div><span className="important">상품가격 :</span></div>
                            <input type="text" name="price" onChange={ChangeHandle} />
                        </li>
                        <li>
                            <div><span>할인률 :</span></div>
                            <input type="text" name="sale" onChange={ChangeHandle} />
                        </li>
                        <li>
                            <div><span className="important">상품정보 :</span></div>
                            <label htmlFor="productInfo">업로드</label>
                            <input className="inputFile" id="productInfo" type="file" accept="/image/*" onInput={ChangeInfo} />
                        </li>
                        <li>
                            <div className="nullSection"></div>
                            <div className="fileBox">{contentName}</div>
                        </li>
                        <li>
                            <div><span className="important">상품이미지 :</span></div>
                            <label htmlFor="productImage">업로드</label>
                            <input className="inputFile" id="productImage" multiple type="file" accept="/image/*" onInput={ChangeImage} />
                        </li>
                        <li>
                            <div className="nullSection2"></div>
                            <div className="fileBox2">{imgName.map((info, index) => {return <p key={index}>{info}</p>})}</div>
                        </li>
                        <li>
                            <div><span className="important">기본옵션 :</span></div>
                            <input type="text" name="option" onChange={ChangeHandle} />
                        </li>
                        <li>
                            <div><span>옵션2 :</span></div>
                            <input type="text" name="option2" onChange={ChangeHandle} />
                        </li>
                        <li>
                            <div><span>옵션3 :</span></div>
                            <input type="text" name="option3" onChange={ChangeHandle} />
                        </li>
                        <li>
                            <div><span>옵션4 :</span></div>
                            <input type="text" name="option4" onChange={ChangeHandle} />
                        </li>
                        <li>
                            <div><span className="important">배송비 :</span></div>
                            <input type="text" name="delprice" onChange={ChangeHandle} />
                        </li>
                    </ul>
                    <button onClick={RegistProduct}>등록하기</button>
                </InputBox>
            </MainSection>
            {/* <Footer /> */}
        </>
    )
}
export default AdminPage
const MainSection = styled.main`
    height: auto;

    div {
        width: 1100px;
        margin: auto;
    }

    .pageName {
        margin-top: 15px;
        height: 45px;
        font-size: 25px;
        font-weight: bold;
        border-bottom: 1px solid #f1f1f1;
    }
    .guide {
        display: inline-block;
        width: 1100px;
        margin-top: 15px;
        height: 35px;
        border-bottom: 2px solid #f1f1f1;
        ::before {
        content: "* ";
        color: #2e954f;
        }
    }
`

const InputBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;

    > ul {
        flex-direction: column;
    }
    li {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-start;
    }
    li > div {
        margin: 0;
        width: 130px;
        height: 80px;
        display: flex;
        align-items: center;
        background-color: #f1f1f1;
    }
    li > div > .important::before {
        content: "* ";
        color: #2e954f;
    }
    li > input {
        margin-left: 10px;
        outline: none;
        border: 1px solid #d5d5d5;
        width: 500px;
        height: 40px;
        padding: 0 10px;
        font-size: 16px;
    }
    li > label {
        margin-left: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 60px; height: 30px;
        border: 1px solid #d5d5d5;
        border-radius: 10px;
        :hover {
            background-color: #d5d5d5;
        }
    }
    .inputFile {
        display: none;
    }
    .nullSection {
        width: 130px;
        height: 50px;
    }
    .nullSection2 {
        width: 130px;
        height: 130px;
    }
    .fileBox {
        margin-left: 10px;
        background-color: white;
        border: 1px solid #d5d5d5;
        padding: 0 10px;
        width: 500px;
        height: 40px;
    }
    .fileBox2 {
        margin-left: 10px;
        background-color: white;
        border: 1px solid #d5d5d5;
        padding: 0 10px;
        width: 500px;
        height: 120px;
        display: block;
    }
    button {
        width: 150px;
        height: 50px;
        margin: auto;
        text-align: center;
        font-size: 16px;
        border: 1px solid #2e954f;
        border-radius: 10px;
        background-color: white;

        :hover {
            background-color: #f1f1f1;
        }
    }
`