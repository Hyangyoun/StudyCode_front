import { useState } from "react";
import BlogSkin1Side from "../Blog/BlogSkin1Side";
import BlogSkin1Header from "../Blog/BlogSkin1Header";
import BlogSkin2 from "../Blog/BlogSkin2";
import OverView from "../Blog/OverView";
import styled from "styled-components";


function BlogPage(props){
    const [menuIndex, setMenuIndex] = useState(1)
    const [skin, setSkin] = useState(2)

    /** props로 넘어갈 state set 함수 */
    const ChangeMenuIndex = (value) => {
        setMenuIndex(value);
    };

    return(
        <>
            {skin === 1 ?
                <BlogSection>
                    <BlogSkin1Side menuIndex={menuIndex} changeMenuIndex={ChangeMenuIndex} />
                    <BlogSkin1Header menuIndex={menuIndex} changeMenuIndex={ChangeMenuIndex} />
                </BlogSection>
                :
                skin === 2 ?
                    <BlogSkin2 menuIndex={menuIndex} changeMenuIndex={ChangeMenuIndex} />
                    : null
            }
            <OverView /> 
        </>
    )
}
const BlogSection = styled.div`
    display: flex;
    flex-direction: row;
`



export default BlogPage