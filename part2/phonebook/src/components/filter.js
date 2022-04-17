import React from "react";

const Filter = ({filter, onChange}) => {
    return (
        <div>
            Filter by name: <input value = {filter} onChange={onChange} />
        </div>
    )
}
export default Filter;