import "../styles/main.scss";
import { useState } from "react";

const VALID = "ABCDEFGHIJKLMNOPQRSTUVWZY";

function App() {
  const [numberOfErrors, setNumberOfErrors] = useState(0);
  const [lastLetter, setLastLetter] = useState("");
  const [word, setWord] = useState("pepino");
  const [userLetters, setUserLetters] = useState([]);
  const [failed, setFailed] = useState(0);

  const wordLetters = word.split("");

  const renderSolutionLetters = () => {
    return wordLetters.map((letter, index) => {
      if (!userLetters.includes(letter)) {
        return <li key={index} class='letter'></li>;
      } else {
        return (
          <li key={index} class='letter'>
            {letter}
          </li>
        );
      }
    });
  };
  const renderErrorLettters = () => {
    return userLetters.map((letter, index) => {
      if (!wordLetters.includes(letter)) {
        return (
          <li key={index} class='letter'>
            {letter}
          </li>
        );
      }
      setNumberOfErrors(numberOfErrors + 1);
    });
  };

  const handleLastLetter = (event) => {
    if (VALID.includes(event.target.value.toUpperCase())) {
      setLastLetter(event.target.value);

      if (
        event.target.value != "" &&
        !userLetters.includes(event.target.value)
      ) {
        const newUserLetters = [...userLetters];
        newUserLetters.push(event.target.value);
        setUserLetters(newUserLetters);
      }
    }
  };

  // const clickEvent = () => {
  // setNumberOfErrors(numberOfErrors + 1);
  // };

  return (
    <div className='page'>
      <header>
        <h1 className='header__title'>Juego del ahorcado</h1>
      </header>
      <main className='main'>
        <section>
          <div className='solution'>
            <h2 className='title'>Solución:</h2>
            <ul className='letters'>{renderSolutionLetters()}</ul>
          </div>
          <div className='error'>
            <h2 className='title'>Letras falladas:</h2>
            <ul className='letters'> {renderErrorLettters()}</ul>
          </div>
          <form className='form'>
            <label className='title' htmlFor='last-letter'>
              Escribe una letra:
            </label>
            <input
              autoComplete='off'
              className='form__input'
              maxLength='1'
              type='text'
              name='last-letter'
              id='last-letter'
              onChange={handleLastLetter}
              value={lastLetter}
            />
          </form>
          {/* { <button onClick={clickEvent}>Incrementar</button> */} */}
        </section>
        <section className={`dummy error-${numberOfErrors}`}>
          <span className='error-13 eye'></span>
          <span className='error-12 eye'></span>
          <span className='error-11 line'></span>
          <span className='error-10 line'></span>
          <span className='error-9 line'></span>
          <span className='error-8 line'></span>
          <span className='error-7 line'></span>
          <span className='error-6 head'></span>
          <span className='error-5 line'></span>
          <span className='error-4 line'></span>
          <span className='error-3 line'></span>
          <span className='error-2 line'></span>
          <span className='error-1 line'></span>
        </section>
      </main>
    </div>
  );
}

export default App;
