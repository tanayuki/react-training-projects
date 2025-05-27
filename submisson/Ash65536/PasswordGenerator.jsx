import React, { useState } from 'react';

const UPPERCASE = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const LOWERCASE = 'abcdefghijklmnopqrstuvwxyz';
const NUMBERS = '0123456789';
const SYMBOLS = '!@#$%^&*()-=+[]{};:,.<>?';

export default function PasswordGenerator() {
  const [length, setLength] = useState(12);
  const [useUpper, setUseUpper] = useState(true);
  const [useLower, setUseLower] = useState(true);
  const [useNumbers, setUseNumbers] = useState(true);
  const [useSymbols, setUseSymbols] = useState(false);
  const [password, setPassword] = useState('');

  const generatePassword = () => {
    let chars = '';
    if (useUpper) chars += UPPERCASE;
    if (useLower) chars += LOWERCASE;
    if (useNumbers) chars += NUMBERS;
    if (useSymbols) chars += SYMBOLS;

    if (chars.length === 0) {
      setPassword('文字種類を1つ以上選択してください');
      return;
    }

    let pass = '';
    for (let i = 0; i < length; i++) {
      const idx = Math.floor(Math.random() * chars.length);
      pass += chars.charAt(idx);
    }
    setPassword(pass);
  };

  return (
    <div>
      <h2>パスワード生成器</h2>

      <label>
        長さ:
        <input
          type="number"
          min="4"
          max="32"
          value={length}
          onChange={(e) => setLength(Number(e.target.value))}
        />
      </label>

      <div>
        <label>
          <input
            type="checkbox"
            checked={useUpper}
            onChange={() => setUseUpper(!useUpper)}
          />
          英大文字
        </label>
        <label>
          <input
            type="checkbox"
            checked={useLower}
            onChange={() => setUseLower(!useLower)}
          />
          英小文字
        </label>
        <label>
          <input
            type="checkbox"
            checked={useNumbers}
            onChange={() => setUseNumbers(!useNumbers)}
          />
          数字
        </label>
        <label>
          <input
            type="checkbox"
            checked={useSymbols}
            onChange={() => setUseSymbols(!useSymbols)}
          />
          記号
        </label>
      </div>

      <button onClick={generatePassword}>生成</button>

      <div>
        <strong>生成結果:</strong>
        <p style={{ userSelect: 'all', whiteSpace: 'nowrap' }}>{password}</p>
      </div>
    </div>
  );
}
