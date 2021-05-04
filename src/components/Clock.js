import React, { useState, useEffect } from 'react';
import { dateDiff } from '../utils/helpers'

function Clock() {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const clock = setInterval(() => tick(), 1000);

    return function clear() {
      clearInterval(clock);
    };
  });

  function tick() {
    setDate(new Date());
  }

  return (
    <span>{dateDiff(date)}</span>
  );
}

export default Clock;