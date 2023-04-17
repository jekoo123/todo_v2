import "./App.css";
import "react-datepicker/dist/react-datepicker.css";
import React, { useState, useRef } from "react";
import DatePicker from "react-datepicker";
import List from "./component/list/list";

let id = 1;
let button_clicked = false;

function App() {
  let txt = useRef(null);
  const [selectedDate, setSelectedDate] = useState(null);
  let [object, setObject] = useState([]);
  let [activeTab, setActiveTab] = useState(1);
  const MyCustomDatepicker = ({ children }) => {
    return <div className="my-custom-datepicker">{children}</div>;
  };

  const input = () => {
    if (object.length <= 30) {
      setObject([
        ...object,
        [
          (selectedDate || new Date()).getFullYear(),
          (selectedDate || new Date()).getMonth(),
          (selectedDate || new Date()).getDate(),
          txt.current.value,
          id,
        ],
      ]);
      id++;
      if (button_clicked) {
        button_clicked = false;
      }
    }
    txt.current.value = "";
  };
  const del_all = () => {
    setObject([]);
    id = 1;
  };

  if (
    10 < object.length &&
    object.length <= 20 &&
    activeTab !== 2 &&
    button_clicked === false
  ) {
    setActiveTab(2);
  } else if (
    20 < object.length &&
    object.length <= 30 &&
    activeTab !== 3 &&
    button_clicked === false
  ) {
    setActiveTab(3);
  }

  const handleClick = (tabId) => {
    setActiveTab(tabId);
    button_clicked = true;
  };

  return (
    <div className="app">
      <div className="input">
        <div className="label">날짜 선택 &nbsp;:</div>
        <DatePicker
          selected={selectedDate || new Date()}
          onChange={(date) => setSelectedDate(date)}
          dateFormat="yyyy/MM/dd"
          minDate={new Date()}
          calendarContainer={MyCustomDatepicker}
          placeholderText="Select a date"
          className="custom-placeholder"
        />
        <div className="label">일정 입력 &nbsp;:</div>
        <textarea
          className="content_input"
          ref={txt}
          placeholder="일정을 입력하세요"
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              input();
            }
          }}
        />
      </div>
      <div className="button_container">
        <button className="button" onClick={() => input()}>
          Input
        </button>
        <button className="button" onClick={() => del_all()}>
          Clear
        </button>
      </div>
      <List object={object} setob={setObject} tab={activeTab} />

      <div className="button-group">
        <button
          className="tab_button"
          onClick={() => {
            handleClick(1);
          }}
        >
          Page1
        </button>
        <button
          className="tab_button"
          onClick={() => {
            handleClick(2);
            console.log(activeTab);
          }}
        >
          Page2
        </button>
        <button
          className="tab_button"
          onClick={() => {
            handleClick(3);
          }}
        >
          Page3
        </button>
      </div>
    </div>
  );
}

export default App;
