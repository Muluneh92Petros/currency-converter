import React, { useState } from 'react';

const CurrencyConverter = () => {
    const [amount, setAmount] = useState(0);
    const [convertedAmount, setConvertedAmount] = useState(0);

    const handleConvert = () => {
        setConvertedAmount(amount * 1.1); // Example conversion rate
    };

    return (
        <div>
            <h2>Currency Converter</h2>
            <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="Amount in USD"
            />
            <button onClick={handleConvert}>Convert</button>
            <p>Converted Amount: {convertedAmount} EUR</p>
        </div>
    );
};

export default CurrencyConverter;