import React, { useState } from 'react';
import './Calculator.css';

const Calculator = () => {
    const [calculator, setCalculator] = useState({
        num1: 0,
        num2: 0,
        result: 0
    });

    return (
        <div className="calculator-container">
            <h1>Calculadora</h1>
            <input
                id="num1"
                type="number"
                placeholder="Enter first number"
                onChange={(e) =>
                    setCalculator({ ...calculator, num1: parseInt(e.target.value) })
                }
            />
            <input
                id="num2"
                type="number"
                placeholder="Enter second number"
                onChange={(e) =>
                    setCalculator({ ...calculator, num2: parseInt(e.target.value) })
                }
            />
            <button
                onClick={() =>
                    setCalculator({
                        ...calculator,
                        result: calculator.num1 + calculator.num2
                    })
                }
            >
                Sumar
            </button>
            <button
                onClick={() =>
                    setCalculator({
                        ...calculator,
                        result: calculator.num1 - calculator.num2
                    })
                }
            >
                Restar
            </button>
            <button
                onClick={() =>
                    setCalculator({
                        ...calculator,
                        result: calculator.num1 * calculator.num2
                    })
                }
            >
                Multiplicar
            </button>
            <button
                onClick={() =>
                    setCalculator({
                        ...calculator,
                        result:
                            calculator.num2 !== 0
                                ? calculator.num1 / calculator.num2
                                : 'Error'
                        
                    })
                }
            >
                Dividir
            </button>
            <p>
                Result:{' '}
                {
                    calculator.result
                }
            </p>

            <button
                onClick={limpiar
                }
            >
                Limpiar
            </button>
        </div>
    );
};

function limpiar(){
    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";
}
export default Calculator;