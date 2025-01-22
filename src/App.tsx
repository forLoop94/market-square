import './App.css'
import Card from './components/Card'
import image1 from './assets/cosmetic-items.png'

function App() {

  return (
    <>
      <header>
        <div className='flex'>
          <Card bgColor='amber'>
            <h2>Product Name</h2>
            <p>Price: $99.99</p>
            <img src={image1} alt="" className='card-image' />
            <button>Buy Now</button>
          </Card>
          <Card background='bubble'>
            <h2>Product Name</h2>
            <p>Price: $99.99</p>
            <button>Buy Now</button>
          </Card>
          <Card bgColor="blueSuperLight">
            <h2>Product Name</h2>
            <p>Price: $99.99</p>
            <img src={image1} alt="" className='card-image' />
            <button>Buy Now</button>
          </Card>
        </div>
        <div className='flex'>
          <Card bgColor="winterSky">
            <h2>Product Name</h2>
            <p>Price: $99.99</p>
            <img src={image1} alt="" className='card-image' />
            <button>Buy Now</button>
          </Card>
          <Card bgColor="blueSkyWarm">
            <h2>Product Name</h2>
            <p>Price: $99.99</p>
            <button>Buy Now</button>
          </Card>
          <Card bgColor="cosmeticPurple">
            <div className='title'>Stay dewy all winter, from $10</div>
            <img src={image1} alt="" className='card-image' />
            <a className='actionBtn'>shop_beauty</a>
          </Card>
        </div>
      </header>
    </>
  )
}

export default App
