import styled from "styled-components"
import Review from "./Review"

function Viewer(props){
    return(
        <>
        <BlogViewer>
        <img src="/image/icon/logo.png" alt="로고"/>
        <span >내토요일 내놔</span>
        <span >js싫어요</span>
        <span >2023.09.14</span>
        <ul className="tagUl">
                            <li>JavaScript</li>
                            <li>React</li>
                            <li>JavaScriptttttttttttt</li>
        </ul>
        <div>파일첨부</div>
        <div>
            <span className="fileName">test.jsx</span>
        </div>
        <img src="/image/icon/sample.png" alt="썸네일" />
        </BlogViewer>
        <Review/>
        </>
    )
}

const BlogViewer = styled.div`
    
`
export default Viewer