import { getMeasurement, getQuantity } from "helper/measurements";

export const Ingredient = ({ item }) => {
  const { quantity, unit, name, plural } = item;
  return (
    <li className="py-0.5 flex items-center">
      <input type="checkbox" name="checkbox" className="" />
      <label className="align-middle pl-2" for="checkbox">
        {quantity && <span className="font-medium text-sm">{getQuantity(quantity)} </span>}
        {unit && <span className="font-medium text-sm">{getMeasurement(unit, quantity)} </span>}
        {name && <span className="font-medium">{!unit ? plural : name}</span>}
      </label>
    </li>
  );
};

export default Ingredient;
