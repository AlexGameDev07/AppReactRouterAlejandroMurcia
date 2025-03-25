import React, { useState } from 'react';
import './Calculator.css';

const Calculator = () => {
    const [calculator, setCalculator] = useState({
        num1: '',
        num2: '',
        result: ''
    });

    const limpiar = () => {
        setCalculator({ num1: '', num2: '', result: '' });
    };

    return (
        <div className="container">
            <h1 className="title">Calculadora</h1>
            <input
                type="number"
                placeholder="Enter first number"
                value={calculator.num1}
                onChange={(e) =>
                    setCalculator({ ...calculator, num1: e.target.value })
                }
                className="input"
            />
            <input
                type="number"
                placeholder="Enter second number"
                value={calculator.num2}
                onChange={(e) =>
                    setCalculator({ ...calculator, num2: e.target.value })
                }
                className="input"
            />
            <button
                onClick={() =>
                    setCalculator({
                        ...calculator,
                        result: parseFloat(calculator.num1) + parseFloat(calculator.num2)
                    })
                }
                className="button"
            >
                Sumar
            </button>
            <button
                onClick={() =>
                    setCalculator({
                        ...calculator,
                        result: parseFloat(calculator.num1) - parseFloat(calculator.num2)
                    })
                }
                className="button"
            >
                Restar
            </button>
            <button
                onClick={() =>
                    setCalculator({
                        ...calculator,
                        result: parseFloat(calculator.num1) * parseFloat(calculator.num2)
                    })
                }
                className="button"
            >
                Multiplicar
            </button>
            <button
                onClick={() =>
                    setCalculator({
                        ...calculator,
                        result:
                            parseFloat(calculator.num2) !== 0
                                ? parseFloat(calculator.num1) / parseFloat(calculator.num2)
                                : 'Error'
                    })
                }
                className="button"
            >
                Dividir
            </button>
            <p>Resultado: {calculator.result}</p>
            <button onClick={limpiar} className="button">
                Limpiar
            </button>
        </div>
    );
};

export default Calculator;