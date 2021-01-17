import { toRomanNumeral } from "helper/romanNumerals";

export const Step = ({ num, direction }) => {
  return (
    <li className="py-2">
      <p className="text-xs font-bold pb-0.5">STEP {toRomanNumeral(num)}:</p>
      <p>{direction}</p>
    </li>
  );
};

export default Step;
