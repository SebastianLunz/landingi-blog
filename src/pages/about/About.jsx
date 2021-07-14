import React from "react";
import styles from "./About.module.css"

const About  = () => {
  return (
    <div className="container">
      <div className={styles.about}>
        <h4 className={styles.about__title}>Zadanie:</h4>
        <p className={styles.about__text}>
          Prosta aplikacja oparta o: ReactJs, Redux, Webpack, CSS Modules oraz ES6+
        </p>

        <h4 className={styles.about__title}>
          Temat: 
        </h4>
        <p className={styles.about__text}>
          Przykładowy blog
        </p>

        <h4 className={styles.about__title}>
          API: 
        </h4>
        <p className={styles.about__text}>
          https://jsonplaceholder.typicode.com/
        </p>

        <h4 className={styles.about__title}>
          Działanie: 
        </h4>
        <p className={styles.about__text}>
        Na stronie głównej wyświetlamy listę artykułów z odnośnikiem do pełnej wersji. Artykuł zawiera pełny opis, listę komentarzy. Dodatkowo użytkownik ma możliwość dodania komentarza.
        </p>

        <h4 className={styles.about__title}>Wymagane:</h4>
        <ul>
          <li>standard ES6+</li>        
          <li>zmienne ‘let’ oraz ‘const’</li>        
          <li>destrukturyzacja</li>        
          <li>async/await</li>        
          <li>arrow functions</li>        
          <li>fetch API</li>        
          <li>moduły</li>        
          <li>zastosowanie biblioteki react-router do obsługi routingu i redux do zarządzania stanem aplikacji</li>        
          <li>CSS3 w notacji BEM</li>        
        </ul>

        <h4 className={styles.about__title}>Dodatkow:</h4>
        <ul>
          <li>brak użycia bibliotek do stylowania</li>        
          <li>brak użycia create-react-app’</li>        
          <li>nietuzinkowy UI...</li>                
        </ul>
      </div>
    </div>
  )
};

export default About;