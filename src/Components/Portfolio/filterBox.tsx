import React from "react";

const FilterBox = (props: any) => {
    const onFilter = (event: any) => {
      const {
        target: { value, checked }
      } = event;
  
      props.updateFilters(
        props.filters.map((f:any) => {
          return {
            ...f,
            isChecked: value === "all" ? true : f.label === value
          };
        })
      );
    };
  
    return (
      <div className="filter-box">
        {props.filters.map((f:any) => (
            <li id={f.label} key={`${f.label}_key`} data-filter={`filter-${f.label}`} onClick={onFilter} className="filter-active">{f.label}</li>
        ))}
      </div>
    );
  };
  export default FilterBox;
  