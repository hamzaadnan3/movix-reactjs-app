import React, { useState } from "react";
import "./switchTabsStyle.scss";

const SwitchTabs = ({ data, onTabChange }) => {
  const [left, setLeft] = useState(0);
  const [selectedTab, setSelectedTab] = useState(0);

  const activeTab = (tab, index) => {
    setLeft(index * 100);
    setTimeout(() => {
      setSelectedTab(index);
    }, 300);
    onTabChange(tab, index);
  };

  return (
    <div className="switchingTabs">
      <div className="tabItems">
        {data.map((tab, index) => (
          <span
            className={`tabItem ${selectedTab === index ? "active" : ""}`}
            key={index}
            onClick={() => activeTab(tab, index)}
          >
            {tab}
          </span>
        ))}
        <div className="movingBg" style={{ left }}></div>
      </div>
    </div>
  );
};

export default SwitchTabs;
