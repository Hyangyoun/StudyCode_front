import { useState } from "react";
import BlogSkin1Side from "../Blog/BlogSkin1Side";
import BlogSkin1Header from "../Blog/BlogSkin1Header";
import BlogSkin2 from "../Blog/BlogSkin2";
import styled from "styled-components";
import BlogSkin1Post from "../Blog/BlogSkin1Post";


function BlogPage(props){
    const [menuIndex, setMenuIndex] = useState(1)
    const [skin, setSkin] = useState(1)

    /** props로 넘어갈 state set 함수 */
    const ChangeMenuIndex = (value) => {
        setMenuIndex(value);
    };

    return(
        <>
            {skin === 1 ?
            <>
                <BlogSection>
                    <BlogSkin1Side menuIndex={menuIndex} changeMenuIndex={ChangeMenuIndex} />
                    <div>
                    <BlogSkin1Header menuIndex={menuIndex} changeMenuIndex={ChangeMenuIndex} />
                    <BlogSkin1Post/>
                    </div>
                </BlogSection>
            </>
                :
                skin === 2 ?
                    <BlogSkin2 menuIndex={menuIndex} changeMenuIndex={ChangeMenuIndex}>
                    </BlogSkin2>
                    : null
            }
        </>
    )
}
const BlogSection = styled.div`
    display: flex;
    flex-direction: row;
    div{
        display: flex;
        flex-direction: column;
    }
        `

export default BlogPage