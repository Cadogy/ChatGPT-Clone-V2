import React from "react";

const SideBar = props => {
  const sidebarClass = props.isOpen ? "sidebar open" : "sidebar";
  return (
    <div className={sidebarClass}>
      <div> I slide into view </div>
      <div> Me Too! </div>
      <div> Me Three! </div>
      <button onClick={props.toggleSidebar} className="sidebar-toggle">
        Toggle Sidebar
      </button>
    </div>
  );
};
export default SideBar;