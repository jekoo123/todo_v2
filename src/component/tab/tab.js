import React from "react";

function Tab(props) {
  if (props.tab_id === 0) {
    return (
      props.props.object.slice(0,10).map((e,i)=>{
        return(
          <div className="list" key={props.object[i][4]}>
            <div className="date_list">{e[0]}/{e[1] + 1}/{e[2]}</div>
            <div className="text_content">{e[3]}</div>
          </div>
        )
      })
    );
  }

  else if (props.tab_id === 1) {
    return (
      props.props.object.slice(10,20).map((e,i)=>{
        return(
          <div className="list" key={props.object[i][4]}>
            <div className="date_list">{e[0]}/{e[1] + 1}/{e[2]}</div>
            <div className="text_content">{e[3]}</div>
          </div>
        )
      })
    );
  }
  else{
    return(
      props.props.object.slice(20,30).map((e,i)=>{
        return(
          <div className="list" key={props.object[i][4]}>
            <div className="date_list">{e[0]}/{e[1] + 1}/{e[2]}</div>
            <div className="text_content">{e[3]}</div>
          </div>
        )
      })
    )

  }
}

export default Tab;
