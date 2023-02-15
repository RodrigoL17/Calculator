import { useContext } from "react";
import { CalculatorContext } from "../Context/CalculatorProvider";

const getStyleBtn = (btn) => {
  const className = {
    "=": "equals",
    x: "opt",
    "/": "opt",
    "+": "opt",
    "-": "opt",
    0: "zero",
    C: "other",
    "+-": "other",
    "%": "other",
  };
  return className[btn];
};

const Button = ({ value }) => {
  const { calc, setCalc } = useContext(CalculatorContext);
  //User click numbers

  const numberClickButton = () => {
    const numToString = calc.num.toString();
    const newNum = numToString.concat(value.toString());
    setCalc({ ...calc, num: parseFloat(newNum) });
  };

  //User click comma
  const commaClick = () => {
    setCalc({
      ...calc,
      num: !calc.num.toString().includes(".") ? calc.num + value : calc.num,
    });
  };

  //User click C

  const clearClick = () => {
    setCalc({ sign: "", num: 0, res: 0 });
  };

  //User click sing
  const singClick = () => {
    setCalc({
      sign: value,
      res: calc.num,
      num: 0,
    });
  };

  //User click equals

  const equalsClick = () => {
    switch (calc.sign) {
        case "+": let addition = calc.res + calc.num
            setCalc({...calc, num: addition})
            break;
            case "-": let subtraction = calc.res - calc.num
            setCalc({...calc, num: subtraction})
            break;
            case "/": let division = calc.res / calc.num
            setCalc({...calc, num: division})
            break;
            case "x": let multiplication = calc.res * calc.num
            setCalc({...calc, num: multiplication})
            break;
        default:
            break;
    }
  }

  const percentClick = () => {
    setCalc({...calc, 
    num: calc.num / 100,
    sign: ""})
  }

  const handleClick = () => {
    const operations = {
      ".": commaClick,
      "C": clearClick,
      "/": singClick,
      "x": singClick,
      "-": singClick,
      "+": singClick,
      "=": equalsClick,
      "%": percentClick,
    };
    if (operations[value]) {
      return operations[value]();
    } else {
      return numberClickButton();
    }
  };

  return (
    <button className={`button ${getStyleBtn(value)}`} onClick={handleClick}>
      {value}
    </button>
  );
};

export default Button;
