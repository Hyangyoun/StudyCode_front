import { useNavigate } from "react-router-dom"
import styled from "styled-components"

function Footer(props) {

    const navigate = useNavigate()

    return(
        <Foot>
            <div>
                <img onClick={() => {navigate("/")}} src="/image/icon/logo.png" alt="아래 로고"/>
            </div>
        </Foot>
    )
}

const Foot = styled.div`

        width: 100%;
        height: 150px;
        background-color: var(--second2);
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: auto;
    & > img{

    }
`
export default Footer