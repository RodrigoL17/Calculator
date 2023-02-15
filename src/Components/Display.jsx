import {useContext} from 'react';
import { CalculatorContext } from '../Context/CalculatorProvider';
const Display = () => {
    const {calc} = useContext(CalculatorContext);
    return (
        <div className='display'>
            {calc.num}
        </div>
    );
}

export default Display;
