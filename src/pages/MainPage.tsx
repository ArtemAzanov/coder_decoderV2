import ButtonCalculate from "../components/ButtonCalculate";
import User from "../components/User";
import React, { useState } from 'react';
const MainPage = () => {
  const [text, setText] = useState('а');
  const [res, setRes] = useState('');

  const shifr = () => {
    let word = ['а', 'б', 'в', 'г', 'д', 'е', 'ё', 'ж', 'з', 'и', 'й', 'к', 'л', 'м', 'н', 'о', 'п', 'р', 'с', 'т', 'у', 'ф', 'х', 'ц', 'ч', 'ш', 'щ', 'ъ', 'ы', 'ь', 'э', 'ю','я'];
    let num = [12, 3, 65, 7, 1, 0, 13, 44, 4, 6, 80, 21, 22, 23, 61, 89, 98, 198, 101, 51, 32, 52, 76, 66, 55, 50, 9, 27, 28, 158, 161, 133, 206];
    let c = text;
    let doc;
    let result = "";
    doc = c.split("")
    for (let i = 0; i < c.length; i++){
        for (let j = 0; j < word.length; j++){
            if (doc[i] == word[j]){
                result += num[j] + " "
            }
        }
    }
    setRes(result);
  };
  const deshifr = () => {
    let word = ['а', 'б', 'в', 'г', 'д', 'е', 'ё', 'ж', 'з', 'и', 'й', 'к', 'л', 'м', 'н', 'о', 'п', 'р', 'с', 'т', 'у', 'ф', 'х', 'ц', 'ч', 'ш', 'щ', 'ъ', 'ы', 'ь', 'э', 'ю','я'];
    let num = [12, 3, 65, 7, 1, 0, 13, 44, 4, 6, 80, 21, 22, 23, 61, 89, 98, 198, 101, 51, 32, 52, 76, 66, 55, 50, 9, 27, 28, 158, 161, 133, 206];
    let c = res;
    let doc;
    let result = "";
    doc = c.split(" ")
    for (let i = 0; i < c.length; i++){
        for (let j = 0; j < word.length; j++){
            if (Number(doc[i]) == num[j]){
                result += word[j] + ""
            }
        }
    }
    setRes(result);
  };

  return(
  <div>
    <input type="text" onChange={(e) => setText(e.target.value)} />
    <button onClick={shifr}>
      Шифровать
    </button>
    <p>{res}</p>
    <p>{text}</p>
    <input type="text" onChange={(e) => setRes(e.target.value)} />
    <button onClick={deshifr}>
      Расшифровать
    </button>
    
    
  </div>
  )
};
export default MainPage;
