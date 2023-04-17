import React from "react";
import "./list.css";
const List = (props) => {
  console.log(props.tab);
  if (props.tab === 1) {
    return (
      <div className="list_container">
        {props.object.map((e, i) => {
          if(i>=10){
            return;
          }
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
    );
  } else if (props.tab === 2) {
    const temp = props.object.slice(10, 20);
    console.log(temp);
    return (
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
    );
  } else if (props.tab === 3) {
    const temp = props.object.slice(20, 30);
    if (props.object.length > 30) {
      alert("Too Many Schedule");
    }
    return (
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
    );
  }

  // const tab = [0, 1, 2];
  // const [activeTab, setActiveTab] = useState(tab[0]);
  // if (props.object.length < 10) {
  //   setActiveTab(tab[0]);
  // } else if (props.object.length < 20) {
  //   setActiveTab(tab[1]);
  // } else {
  //   setActiveTab(tab[2]);
  // }

  // function handleClick(tabId) {
  //   setActiveTab(tabId);
  // }
  // object, setob
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
