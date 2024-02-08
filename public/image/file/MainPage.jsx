import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Slider from "../MainPageItem/Slider";
import Header from "../MainPageItem/header";
import Footer from "../MainPageItem/Footer";
import EventSlider from "../MainPageItem/EventSlider";
import ProductList from "../MainPageItem/ProductList";
import axios from "axios";

function MainPage(props) {

    const [discountProdList, setDiscountProdList] = useState([])
    const [newProdList, setNewProdList] = useState([])
    useEffect(() => {
        axios.get("/product/discount")
        .then((response) => {
            setDiscountProdList(response.data)
        })

        axios.get("/product/new")
        .then((response) => {
            setNewProdList(response.data)
        })
    },[])

    return (
        <>
            <Header  />
            <Slider />
            <MainSection>
                <EventProd>
                    <div>
                        <span>일일 특가</span>
                        <ProductList itemList={discountProdList} number={3} />
                    </div>
                    <div>
                        <span>신상품</span>
                        <ProductList itemList={newProdList} number={3} />
                    </div>
                </EventProd>
                <SlideBar>
                    <img className="DeliveryInfoImg" src="/image/main/Frame3.jpg" alt="배송안내" />
                    <EventBox>
                        <div>
                            <span>오직 </span> <span className="pointText">같이한닭</span><span>에서만!</span>
                            <span className="bottomText">깜짝 주말특가!</span>
                        </div>
                        <img className="eventImg" src="/image/main/event.jpg" alt="이벤트" />
                        <EventSlider />
                    </EventBox>
                </SlideBar>
            </MainSection>
            <Footer />
        </>
    )
}

export default MainPage

const MainSection = styled.div`
    width: 1100px; height: auto;
    margin: 40px auto 0;
    display: flex;
    flex-direction: row;
`

const EventBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    width: 250px; height: 360px;
    border-radius: 30px;
    background-color: #f1f1f1;

    span {
        font-size: 20px;
        font-weight: bold;
        cursor: default;
    }

    .eventImg {
        width: 220px; height: auto;
        border-radius: 10px;
        cursor: pointer;
    }

    .bottomText {
        display: block;
    }
    .pointText {
        font-size: 25px;
        color: #2e954e;
    }
`
const EventProd = styled.div`
    width: 850px; height: 1000px;
    display: flex;
    flex-direction: column;
    > div {
        width: 820px; height: auto;
    }
    & > div > span {
        display: inline-block;
        font-size: 24px;
        font-weight: bold;
        margin: 20px 0;
    }
`
const SlideBar = styled.div`
    width: 250px; height: auto;

    .DeliveryInfoImg {
        width: 250px; height: auto;
        margin: 0 auto 30px;
        border-radius: 10px;
        cursor: pointer;
    }
`