import { useEffect, useState } from "react";
import styled from "styled-components";

import BlogSkin1Side from "../Blog/BlogSkin1Side";
import BlogSkin1Header from "../Blog/BlogSkin1Header";
import BlogSkin1Post from "../Blog/BlogSkin1Post";
import BlogSkin1Followers from "../Blog/BlogSkin1Followers";
import BlogSkin1Repo from "../Blog/BlogSkin1Repo";
import BlogSkin1Main from "../Blog/BlogSkin1Main";


function BlogSkin1 (props){
    const [menuIndex, setMenuIndex] = useState(1)

    /** props로 넘어갈 state set 함수 */
    const ChangeMenuIndex = (value) => {
        setMenuIndex(value);
    };

    return(
        <BlogSkin1Header menuIndex={menuIndex} changeMenuIndex={ChangeMenuIndex}/>
        )
    
}


export default BlogSkin1