import { useState, useEffect } from "react";

export const useTitle = (initTitle) => {
    const [title, setTitle] = useState(initTitle);
    const updateTitle = () => {
        const htmlTitle = document.querySelector("title");
        htmlTitle.innerText = title;
    };
    useEffect(updateTitle, [title]);
    /*useEffect는 component가 mount될 때 updateTitle을 부른다. 
      그리고 title이 업데이트 되면 updateTitle을 다시 부를것이다. */
    return setTitle; //제목을 업데이트할 수 있게 setTitle을 return 해준다. 
};

