'use client'

import React, { useState } from "react";

const generateBanks = () => {
  const tochka = Array.from({ length: 5 }, (_, i) => ({
    id: i + 1,
    name: `ТОЧКА ${i + 1}`,
    founded: 2015,
  }));

  const sber = Array.from({ length: 5 }, (_, i) => ({
    id: i + 6,
    name: `СБЕР ${i + 1}`,
    founded: 1995,
  }));

  return [...tochka, ...sber];
};

const DATE_RANGE_REGEX = /^\d{2}\.\d{2}\.\d{4} - \d{2}\.\d{2}\.\d{4}$/;

const App = () => {
  const banks = generateBanks();
  const [dateRange, setDateRange] = useState("");
  const [selectedBankIds, setSelectedBankIds] = useState<number[]>([]);
  const [isValid, setIsValid] = useState(true);

  const getMinAllowedYear = () => {
    const selectedYears = selectedBankIds
      .map((id) => banks.find((b) => b.id === id)?.founded)
      .filter((year): year is number => typeof year === "number");

    return selectedYears.length ? Math.min(...selectedYears) : null;
  };

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value.length > 25) return;
    setDateRange(value);
    setIsValid(DATE_RANGE_REGEX.test(value));
  };

  const handleCheckboxChange = (id: number) => {
    setSelectedBankIds((prev) =>
      prev.includes(id) ? prev.filter((bankId) => bankId !== id) : [...prev, id]
    );
  };

  const handleBlur = () => {
    if (!DATE_RANGE_REGEX.test(dateRange)) {
      setIsValid(false);
      return;
    }

    const [startStr, endStr] = dateRange.split(" - ");
    const [startDay, startMonth, startYear] = startStr.split(".").map(Number);

    const minYear = getMinAllowedYear();
    if (!minYear) return;

    if (startYear < minYear) {
      const correctedStart = `01.01.${minYear}`;
      setDateRange(`${correctedStart} - ${endStr}`);
    }
  };

  return (
    <div>
      <h2>Введите диапазон дат (формат: DD.MM.YYYY - DD.MM.YYYY)</h2>
      <input
        type="text"
        value={dateRange}
        onChange={handleDateChange}
        onBlur={handleBlur}
        placeholder="01.01.2010 - 01.02.2013"
      />
      {!isValid && dateRange.length > 0 && (
        <div style={{ color: "red" }}>
          Неверный формат. Используйте DD.MM.YYYY - DD.MM.YYYY
        </div>
      )}

      <h3>Список банков:</h3>
      <ul>
        {banks.map((bank) => (
          <li key={bank.id}>
            <label>
              <input
                type="checkbox"
                checked={selectedBankIds.includes(bank.id)}
                onChange={() => handleCheckboxChange(bank.id)}
              />
              {bank.name} (основан в {bank.founded})
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;




