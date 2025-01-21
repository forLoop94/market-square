import './App.css'
import Card from './components/Card'

function App() {

  return (
    <>
      <header>
        <h1>The Return</h1>
        <Card background="bubble">
          <h2>Product Name</h2>
          <p>Price: $99.99</p>
          <button>Buy Now</button>
        </Card>
      </header>
    </>
  )
}

export default App
