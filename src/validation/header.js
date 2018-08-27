// import React from "react";
// import style from "./style.css";

// export default ({ agents, selectTab, tabId }) => {
//     return (
//   <div className={style.header}>
//     <ul className={style.tabs}>
//       {agents.map((agent, i) => (
//           <li key={i} onClick={() => selectTab(agent.object.id, agent.object.name)} className={tabId === agent.object.id ? style.tab + ' ' + style.active : style.tab}>
//             <h5>{agent.object.name}</h5>
//           </li>
//       ))}
//     </ul>
//   </div>
// )};


import React from "react";
import style from "./style.css";
import Select from "react-select";

export default ({ agents, selectTab, tabId }) => {
  let unitsOptions = agents.map((ev, i) => ({
    value: ev.object.id,
    label: ev.object.name
  }));
    return (
  <div className={style.header}>
  <div className={style.header_title}>
  <h2>Validate</h2>
  </div>
  <div className={style.header_select}>
  <Select
    placeholder="Select"
    defaultValue={unitsOptions[0]}
    options={unitsOptions}
    onChange={value => selectTab(value.value, value.label)}
  />
  </div>
    {/* <ul className={style.tabs}>
      {agents.map((agent, i) => (
          <li key={i} onClick={() => selectTab(agent.object.id, agent.object.name)} className={tabId === agent.object.id ? style.tab + ' ' + style.active : style.tab}>
            <h5>{agent.object.name}</h5>
          </li>
      ))}
    </ul> */}
  </div>
)};


