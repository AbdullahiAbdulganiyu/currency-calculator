// `https://api.frankfurter.app/latest?amount=100&from=EUR&to=USD`

import { useEffect, useState } from "react";

export default function App() {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");

  useEffect(function () {
    async function convert(from, to, amount) {
      const res = await fetch(
        `https://api.frankfurter.dev/v1/latest?amount=${amount}&from=${from}&to=${to}`
      );
      const data = await res.json();

      const convertedAmount = (amount * data.rates[to]).toFixed(2);
      alert(`${amount} ${from} = ${convertedAmount} ${to}`);
    }

    convert("EUR", "USD", 10);
  }, []);
  return (
    <div>
      <input type="text" />
      <select>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <select>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <p>OUTPUT</p>
    </div>
  );
}
