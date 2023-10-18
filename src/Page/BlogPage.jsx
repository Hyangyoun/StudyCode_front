import { useEffect, useState } from "react";
import BlogSkin2 from "../Blog/BlogSkin2";
import OverView from "../Blog/OverView";
import BlogSkin1 from "../Blog/BlogSkin1";

function BlogPage(props){
    const [menuIndex, setMenuIndex] = useState(1)
    const [skin, setSkin] = useState(1)

    /** props로 넘어갈 state set 함수 */
    const ChangeMenuIndex = (value) => {
        setMenuIndex(value);
    };

    return(
        <>
            {skin === 1 ?<BlogSkin1 menuIndex={menuIndex} changeMenuIndex={ChangeMenuIndex} />:
            skin === 2 ?
            <>
                <BlogSkin2 menuIndex={menuIndex} changeMenuIndex={ChangeMenuIndex}/>
                <OverView/>
            </>:
            null}
        </>
    )
}

const overView = {
blogIndex: 1,
content:`
# Project_Dream

* ### 사용시 주의사항!
___

- 프로젝트 작업 시작 전 카카오톡으로 기존 작업자가있는지 작업중인 유저가있는지 확인후 작업부탁드립니다.
- 작업 시작 전 Git Pull 로 프로젝트 변경사항이 있는지 먼저 체크부탁드립니다.
- 만약 Pull Request 시 아무런 내역이없다면 첫번째 기재사항과 같이 확인후 작업해주시면됩니다.
- 유니티 버전은 2019.4.10f1 으로 작업되고있습니다.
- Build Target 은 Android 기준입니다.
-  .gitignore 으로 라이브러리 파일및 로그파일등이 포함되지않도록 제어중에있습니다. 임의로 변경은 자제부탁드립니다.
- 기본적으로 스프라이트 및 리소스등은 Google Drive 로 관리되고있습니다. 필요하신 리소스는 하단 드라이브 링크로 다운받아주시면 됩니다.
> [GOOGLE DRIVE](https://drive.google.com/drive/folders/1B-5K9Upxt3rQpv7zDax7kTPPVHSNPkYZ?usp=sharing)

* BUILD 폴더에서 해당 게임의 final Build 확인 가능합니다.
#### **해당 프로젝트에 대한 문의는 kushkim@icloud.com 으로 문의 부탁드립니다.**

# h1
## h2
### h3
#### h4
##### h5
###### h6

![이미지](https://img.danawa.com/prod_img/500000/104/574/img/3574104_1.jpg?_v=20230811151418)

> 위키백과?
>> 중대장 드립 검색
>>> "오늘 중대장은 너희에게 실망했다"

\`\`\`python
py_vector = one_hot_encoding("파이",word2index)
py_vector.dot(torch_vector)
>>> 0.0
\`\`\`

\`\`\`java
int a = 1;
String b = "";
\`\`\`

\`asdf\`   
asdfasdf   
asdfasdf
`}

export default BlogPage