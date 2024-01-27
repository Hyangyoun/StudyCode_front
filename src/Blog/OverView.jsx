import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Editer, { buttonType } from "../MarkDownEditer/Editer";
import MdViewer from "../MarkDownEditer/MDviewer";
import axios from "axios";
import { useParams } from "react-router-dom";

function OverView(props) {

    const sessionStorage = window.sessionStorage;
    const { nickname } = useParams();
    const {overView ,isOwner} = props;
    const [editOver, setEditOver] = useState("");
    const [regist, setRegist] = useState(false)

    useEffect(() => {
        //방문유저인지 주인인지 확인하는 axios
        // axios.get("api" , {
        //     params:{
        //         memId:memId,
        //         blogIndex:userBlogIndex
        //     }
        // })
        // .then((response) => {
        //     setIsOwner(response.data);
        // })
        // .catch((error) => {
        //     console.log(error);
        // });
    },[])

    function SaveOverView(){
        axios.post("/api/blog/regist/overView",{
            overView: editOver,
            memId: sessionStorage.getItem("memId")
        })
        .catch((error) => {
            console.log(error)
        })
        window.location.reload()
    }

    return (
        <>
            {overView != null ?
                <MdViewer content={overView} width={"1100px"} />
                :
                regist ? <RegistOverview>
                    <Editer value={editOver} setValue={setEditOver} height={700} buttonList={[
                        [buttonType.title1, buttonType.title2, buttonType.title3],
                        [buttonType.bold, buttonType.italic, buttonType.strikethrough],
                        [buttonType.code, buttonType.codeBlock, buttonType.quote, buttonType.image, buttonType.link]
                    ]} />
                    <div className="save" onClick={() => SaveOverView()}>저장하기</div>
                </RegistOverview> : 
                <NoOverview>
                        <span>등록되어있는 소개글이 없습니다.</span>
                        {isOwner ? <div onClick={() => setRegist(true)}>소개글 작성하기</div> : null}
                </NoOverview>
            }
        </>
    )
}


const NoOverview = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 500px;
    font-size: 20px;
    color: var(--primary);

    & > div{
        width: 150px; height: 40px;
        margin-top: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 1px solid var(--second);
        border-radius: 5px;
        font-size: 15px;
        cursor: pointer;

        &:hover {
            background-color: var(--second);
            color: white;
        }
    }
`

const RegistOverview = styled.div`
    width: 80%;
    margin: 50px auto 0;
    display: flex;
    flex-direction: column;


    .save {
        width: 150px; height: 50px;
        margin: 15px auto;
        border: 1px solid var(--second);
        border-radius: 5px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 15px;
        color: var(--second);
        cursor: pointer;

        &:hover {
            background-color: var(--second);
            color: white;
        }
    }
`

export default OverView