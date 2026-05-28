import './About.scss';
import React, { useState } from 'react';

const About = () => {



    const [text, setText] = useState('');
    const [binary, setBinary] = useState('');

    function numToBin(num) {
        let weights = [32768, 16384, 8192, 4096, 2048, 1024, 512, 256, 128, 64, 32, 16, 8, 4, 2, 1];
        let result = '';
        for (let i = 0; i < weights.length; i++) {
            if (num >= weights[i]) {
                result += '1';
                num -= weights[i];
            } else {
                result += '0';
            }
        }
        return result;
    }

    function binToNum(bin) {
        let weights = [32768, 16384, 8192, 4096, 2048, 1024, 512, 256, 128, 64, 32, 16, 8, 4, 2, 1];
        let result = 0;
        for (let i = 0; i < bin.length; i++) {
            if (bin[i] === '1') result += weights[i];
        }
        return result;
    }

    function textToBinary() {
        let result = '';
        for (let i = 0; i < text.length; i++) {
            let char = text[i];
            let code = char.charCodeAt(0);
            let binaryCode = numToBin(code);
            result += binaryCode;
            if (i !== text.length - 1) result += ' ';
        }
        setBinary(result);
    }

    function binaryToText() {
        let blocks = binary.split(' ');
        let result = '';
        for (let i = 0; i < blocks.length; i++) {
            let binaryBlock = blocks[i];
            let code = binToNum(binaryBlock);
            let char = String.fromCharCode(code);
            result += char;
        }
        setText(result);
    }

    return (
        <div>
            <h3>Введите текст:</h3>
            <input value={text} onChange={e => setText(e.target.value)} />
            <br />
            <button onClick={textToBinary}>Текст Двоичный</button>

            <h3>Введите двоичный код (с пробелами):</h3>
            <input value={binary} onChange={e => setBinary(e.target.value)} />
            <br />
            <button onClick={binaryToText}>Двоичный Текст</button>

            <h3>Результат:</h3>
            <p>Текст: {text}</p>
            <p>Двоичный: {binary}</p>
        </div>
    );



};

export default About;