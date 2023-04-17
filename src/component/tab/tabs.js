import React, { useState } from "react";
import Tab from "./tab";
import "./tabs.css";


function Tabs(props) {
  const { tabs } = props; //tabs = {{id=~~, title=~~},{id=~~,title=~~}}
  const [activeTab, setActiveTab] = useState(tabs[0].id);
  //active 부여될 탭 선택
  function handleClick(tabId) {
    setActiveTab(tabId);
  }
  return (
    <div className="tabs">
      <div className="button-group">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            // className={`tablinks ${tab.id === activeTab ? 'active' : ''}`}
            className={`tablinks ${tab.id}`}
            onClick={() => handleClick(tab.id)} //클릭되면 클래스에 active가 추가되는 버튼들
          >
            {tab.title}
          </button>
        ))}
      </div>
      <Tab love={activeTab} />
      {/* {tabs.map(tab => (
        <Tab
          key={tab.id}
          title={tab.title}
          active={tab.id === activeTab}
        />
      ))} */}
    </div>
  );
}

export default Tabs;
