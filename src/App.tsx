import './App.css'
import Card from './components/Card'
import CardImage from './components/CardImage'
import image1 from './assets/cosmetic-items.png'

function App() {

  return (
    <>
      <header>
        <div className='flex'>
          <Card bgColor='amber'>
            <h2>Product Name</h2>
            <p>Price: $99.99</p>
            <CardImage imageKey="cosmeticItems" text="random image" width="12rem" height="12rem" bottom="5%" right="2rem" />
            <button>Buy Now</button>
          </Card>
        </div>
      </header>
    </>
  )
}

export default App
