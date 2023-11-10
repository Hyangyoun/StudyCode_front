import { useState } from "react"
import styled from "styled-components"

function Followers(props){

    const [following , setFollowing] = useState(true); //팔로우 언팔로우 버튼

    return(
            <RepoList>
                <li className="followerList">
                    <div className="follower"></div>
                </li>
                <li className="followerList">
                    <div className="follower">
                        <img className="profileImage" src="/image/icon/profile.png" alt="profileImage"/>
                        <span className="followerName">1010jk</span>
                    </div>
                    <div className="follwerBtn" onClick={() => setFollowing(!following)}>
                        {following  ? "unfollow" : "follow"}
                    </div>
                </li>
            </RepoList>
        )
}

const RepoList = styled.ul`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0;
    margin: 70px auto 0;
    list-style: none;

    >li:first-child{
        width: 100%;
        height: 40px;
        border: 1px solid var(--second);
        border-radius: 5px 5px 0 0;
        background-color: var(--second2);

    }
    .followerList{
        width: 100%;
        height: 40px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        border: 1px solid var(--second);
        border-top: 0px;
    }

    .follower{
        display: flex;
        flex-direction: row;
        margin-left:10px;
        cursor: pointer;
        &:hover{
            text-decoration: underline;
        }
    }
    
    .profileImage{
        width: 25px; height: auto;
    }

    .followerName{
        display:flex;
        align-items: center;
        font-size: 15px;
        margin-left:10px;
    }

    .follwerBtn{
        width: 75px; height: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: 20px;
        border: 1px solid var(--second);
        background-color: #D9D9D9;
        cursor: pointer;
    }
`
export default Followers