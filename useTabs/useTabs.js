import React, { useState } from "react";

const content = [
    {
        tab: "Section 1",
        content: "I'm the content of the Section 1"
    },
    {
        tab: "Section 2",
        content: "I'm the content of the Section 2"
    }
];

const useTabs = (initTab, allTabs) => {
    if (!allTabs || !Array.isArray(allTabs)) {
        return; //조건에 일치되면 리턴되고 끝난다.(allTabs가 아니거나 배열이 아닐 때)
    }
    const [currentIndex, setCurrentIndex] = useState(initTab);
    return {
        currentItem: allTabs[currentIndex],
        /* 기본적으로 allTabs의 인덱스는 0이다. */
        changeItem: setCurrentIndex //state를 업데이트 시켜줄 것이다.
    };
};

const App = () => {
    const { currentItem, changeItem } = useTabs(0, content);
    /* useTabs은 currentItem을 return해준다. */
    return (
        <div>
            <h3>Hello</h3>
            {content.map((section, index) => (
                <button onClick={() => changeItem(index)}>{section.tab}</button>

            ))}

            <div>{currentItem.content}</div>
        </div>
    );
};

export default App;