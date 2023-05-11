import React, { useState, useRef } from "react";
import List from "../../components/list/list";
import "./search.css";
const Search = (props) => {
  let txt = useRef(null);
  const [tab, setTab] = useState(1);
  const [search_input, setSearch_input] = useState("");
  const [result, setResult] = useState("");

  function find(array, value) {
    const row = array.find((row) => row.includes(value));
    if (row) {
      return row;
    }
    return null;
  }

  const input = () => {
    const temp = txt.current.value;
    const find_result = find(props.object, "\n" + temp);
    if (find_result === null) {
      alert("일정을 잘못 입력했습니다.");
    } else {
      setResult(find_result);
    }
  };
  return (
    <div className="search">
      <div>
        <span className="search_label">Search : </span>
        <input
          type="text"
          className="search_input"
          ref={txt}
          placeholder="찾을 일정을 입력하세요."
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              input();
            }
          }}
        />
        <div>
          <span className="search_label">Result : </span>
          <span className="result">
            {result && (
              <div>
                <div>
                  {result[0]}&nbsp;/&nbsp;{result[1] + 1}&nbsp;/&nbsp;
                  {result[2]}&nbsp;&nbsp;|&nbsp;{result[3]}
                </div>
              </div>
            )}
          </span>
        </div>

        <div className="search_list">
          <List object={props.object} tab={tab} />
          <div className="search_button_list">
            <button
              className="search_button"
              onClick={() => {
                setTab(1);
              }}
            >
              page 1
            </button>
            <button
              className="search_button"
              onClick={() => {
                setTab(2);
              }}
            >
              page 2
            </button>
            <button
              className="search_button"
              onClick={() => {
                setTab(3);
              }}
            >
              page 3
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
