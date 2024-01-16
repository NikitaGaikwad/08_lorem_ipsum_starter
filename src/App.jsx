import { useState } from "react";
import data from './data'

const App = () => {
  let [count, setCount] = useState(1);
  let [text, setText] = useState([])


  const handleChange = (e) => {
    e.preventDefault();
    let amount = parseInt(count)
    setText(data.slice(0, amount))
    



  }
  return (
    <section className="section-center">
      <h4>Tired of boring lorem ipsum</h4>
      <form className="lorem-form" onSubmit={handleChange}>
        <label htmlFor="amount">Paragraph</label>
        <input type="number" value={count} name="amount" id="amount" min={1} max={8} step={1} onChange={(e) => setCount(e.target.value)} />
        <button className="btn">Generate</button>
      </form>
      <article className="lorem-text">
        {text.map((item, index) => {
          return <p key={index}>{item}</p>
        })}
      </article>



    </section>
  )
};
export default App;
