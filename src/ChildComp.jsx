import React from "react";

export const ChildComp = (props) => {
    const {value, handleInputChange} = props;

return(
    <input onChange={(e) => handleInputChange(e.target.value)} value={value} />
)

}
export default ChildComp;