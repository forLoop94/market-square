import './App.css';
import Card from './components/Card';
import CardImage from './components/CardImage';
import OptionsCard from './components/OptionsCard';

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
        <section>
          <OptionsCard imagekey="cosmeticItems" text='options card image' width='100%' height='100%' currentPrice={234.00} oldPrice={499.00}>
            <h3>EUROCO Twin Size</h3>
            <p>Upholstery daybed with...</p>
            <button>Options</button>
          </OptionsCard>
        </section>
      </header>
    </>
  )
}

export default App
