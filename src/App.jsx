import Button from "./Button.jsx";

function App() {
  const myElement = <h5>Hello World</h5>
  const myElement2 = <h5>The result of 5 + 5 is {5 + 5}</h5>
  const name = "Enova, Rose"
  const age = 20

  const x = 20;

  
  return (
    <>
      {myElement}
      {myElement2}
      <h5>Hello, {name}</h5>
      <h5>I am {age} years old</h5>

      { (x < 15 ? "Banana" : "Apple") }

      <Button label="Click me." name="button1" />
      <Button label="Press me." name="button2" />

    </>
  )
}


export default App
