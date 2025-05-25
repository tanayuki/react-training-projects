import { useState } from 'react';

function Omikuji() {
  const results = ['大吉', '中吉', '小吉', '凶', '大凶'];
  const [result, setResult] = useState('');

  const draw = () => {
    const randomIndex = Math.floor(Math.random() * results.length);
    setResult(results[randomIndex]);
  };

  return (
    <div>
      <h2>おみくじ: {result || '結果がまだ出ていません'}</h2>
      <button onClick={draw}>おみくじを引く</button>
    </div>
  );
}

export default Omikuji;
