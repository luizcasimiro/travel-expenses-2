import React, { useContext, useEffect, useState } from "react";
import TravelContext from "../context/TravelContext";

function ButtonSAVE() {
  const [disabled, setDisabled] = useState(true);

  const {
    expenses,
    setExpenses,
    what,
    setWhat,
    where,
    setWhere,
    day,
    setDay,
    month,
    setMonth,
    year,
    setYear,
    price,
    setPrice,
    currency,
    setCurrency,
    rate,
    setRate
  } = useContext(TravelContext);

  function handleSAVE() {
    setExpenses(
      [...expenses, {
        "id": Math.random().toFixed(4),
        "what": what,
        "where": where,
        "day": day,
        "month": month,
        "year": year,
        "price": price,
        "currency": currency,
        "rate": rate,
        "newPrice": price * rate
      }]
    );

    setWhat("");
    setWhere("");
    setDay("");
    setMonth("");
    setYear("");
    setPrice("");
    setCurrency("");
    setRate(0);

    document.getElementById("what").value = "";
    document.getElementById("where").value = "";
    document.getElementById("day").value = "";
    document.getElementById("month").value = "";
    document.getElementById("year").value = "";
    document.getElementById("price").value = "";
    document.getElementById("currency").value = "";
  }

  function toggleButtonSAVE() {
    if (what !== '' && where !== '' && day !== '' && month !== '' && year !== '' && price !== '' && currency !== '') {
      setDisabled(false);
      return;
    }
    setDisabled(true);
  };

  useEffect(() => {
    toggleButtonSAVE();
    // eslint-disable-next-line
  }, [what, where, day, month, year, price, currency]);

  useEffect(() => {
    localStorage.setItem('expenses', JSON.stringify(expenses));
  }, [expenses]);

  return (
    <div>
      <button
        id="button-save"
        type="button"
        disabled={disabled}
        onClick={handleSAVE}
      >
        SAVE
      </button>
    </div>
  );
}

export default ButtonSAVE;
