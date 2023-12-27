import { useState } from "react";
import { ShopContext } from "../context/shopping_cart";

const Checkbox = ({ label, checked, ...props }) => {
    const defaultChecked = checked ? checked : false;
    const [isChecked, setIsChecked] = useState(defaultChecked);








    return (
      <div className="row">
        <label className="col">
          <div><input type="checkbox"
          onChange={() => setIsChecked((prev) => !prev)}
          {...props}
          />
          <span>{label}</span></div>
          <div></div>
        </label>
        <p className="text-danger">{isChecked ? "Selected" : "Unchecked"}</p>
      </div>
    );

  };
  
  export default Checkbox;



 
  