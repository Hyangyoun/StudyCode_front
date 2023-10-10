import BlogMainSkin1 from "../Blog/BlogSkin1";
import BlogSkin1Header from "../Blog/BlogSkin1Header";
import styled from "styled-components";

function BlogPage(props){
    return(
        <BlogSection>
            <BlogMainSkin1/>
            <BlogSkin1Header/>
        </BlogSection>
    )
}
const BlogSection = styled.div`
    display: flex;
    flex-direction: row;
`
export default BlogPage