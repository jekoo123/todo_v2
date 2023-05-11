import { React, useState } from "react";
import "./list.css";
const List = (props) => {
  if (props.tab === 1) {
    const temp = props.object.slice(0, 10);
    return (
      <div>
        <div className="page_name">Page{props.tab}</div>
        <div className="list_container">
          {temp.map((e, i) => {
            return (
              <div className="list" key={props.object[i][4]}>
                <div className="date_list">
                  {e[0]}&nbsp;/&nbsp;{e[1] + 1}&nbsp;/&nbsp;{e[2]}
                </div>
                <div className="text_content">{e[3]}</div>
              </div>
            );
          })}
        </div>
      </div>
    );
  } else if (props.tab === 2) {
    const temp = props.object.slice(10, 20);
    return (
      <div>
        <div className="page_name">Page{props.tab}</div>
        <div className="list_container">
          {temp.map((e, i) => {
            return (
              <div className="list" key={temp[i][4]}>
                <div className="date_list">
                  {e[0]}&nbsp;/&nbsp;{e[1] + 1}&nbsp;/&nbsp;{e[2]}
                </div>
                <div className="text_content">{e[3]}</div>
              </div>
            );
          })}
        </div>
      </div>
    );
  } else if (props.tab === 3) {
    const temp = props.object.slice(20, 30);
    return (
      <div>
        <div className="page_name">Page{props.tab}</div>
        <div className="list_container">
          {temp.map((e, i) => {
            return (
              <div className="list" key={temp[i][4]}>
                <div className="date_list">
                  {e[0]}&nbsp;/&nbsp;{e[1] + 1}&nbsp;/&nbsp;{e[2]}
                </div>
                <div className="text_content">{e[3]}</div>
              </div>
            );
          })}
        </div>
        
        
      </div>
    );
  }
};

export default List;

/* <div className="button-group">
        {tab.map((tab, i) => (
          <button
            key={tab[i]}
            // className={`tablinks ${tab.id === activeTab ? 'active' : ''}`}
            className={`tablinks ${tab[i]}`}
            onClick={() => handleClick(tab[i])} //클릭되면 클래스에 active가 추가되는 버튼들
          ></button>
        ))} */

/* </div>
      <Tab props={props} tab_id={activeTab} /> */
