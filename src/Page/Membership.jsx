import SMHeader from "../Main/SmallHeader"
import styled from "styled-components";

function Membership(props){
    return(
        <>
            <SMHeader/>
            <MembershipTool>
                <div>
                    <ul>
                        <li>
                            <span>아이디</span>
                            <input className="inputId" type="text" placeholder="아이디를 입력하세요"/>
                            <div>중복확인</div>
                        </li>
                    <span>영문+숫자 최소5자이상 최대15자이하</span>
                    </ul>
                </div>
            </MembershipTool>
        </>
          )
}
const MembershipTool = styled.div`
    width: 620px; height: 560px;
    display:flex;
    flex-direction: column;
    align-items: center;
    margin:auto;
    div{
        margin: 70px 0 0 0;
    }
    ul{
        margin:0 0 50px 0;
        padding: 0;
    }
    ul>li{
        display: flex;
        flex-direction: row;
        align-items: center;
    }
    li>span{
        font-size: 15px;
        margin-right: 5px;
    }
    li>div{
        width: 100px;height:40px;
        margin: 0 0 0 5px;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 1px solid #C3ACD0;
        border-radius: 5px;
    }
    span:last-child{
        text-indent: 10px;
        font-size: 12px;
        padding-left: 50px;
    }
    .inputId{
        width: 420px; height: 50px;
        border: 1px solid #C3ACD0;
        border-radius: 5px;
        padding: 0 0 0 15px;
    }
`
export default Membership