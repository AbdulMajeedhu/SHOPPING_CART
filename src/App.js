
import { useState } from "react";
import Shop from "./Shop";
import CardItem from "./CardItem";
import './App.css'
import iphone from './assets/iphone.jpg.webp'
import samsung from './assets/samsung.jpg.webp'
import nokia from './assets/nokia.jpg.webp'
import oneplus from './assets/oneplus.jpg.webp'
import poco from './assets/poco.jpg.webp'
import realme from './assets/realme.jpg.jpeg'
function App() {
  const products = [
    {
      id: 1,
      title: 'Samsung',
      price: 30000,
      image: samsung,
    },
    {
      id: 2,
      title: 'iPhone',
      price: 70000,
      image: iphone,
    },
    {
      id: 3,
      title: 'OnePlus',
      price: 50000,
      image: oneplus,
    },
    {
      id: 4,
      title: 'Nokia',
      price: 40000,
      image: nokia,
    },
    {
      id: 5,
      title: 'Poco',
      price: 20000,
      image: poco,
    },
    {
      id: 6,
      title: 'Realme',
      price: 18000,
      image: realme,
    },
  ];

  const [cardItem, setCardItem] = useState([]);
  const [total, setTotal] = useState(0);
  let handleAddCard = (id) => {
    // alert(id)
    const productIndex = products.findIndex(obj => obj.id === id)
    const product = products[productIndex]
    product.inCard = true;
    setCardItem([...cardItem, product])
    setTotal(total + product.price)
  };
  let handleRemoveCard = (id) => {
    // alert(id)
    const cardItemIndex = cardItem.findIndex(obj => obj.id === id)
    setTotal(total - cardItem[cardItemIndex].price)
    cardItem.splice(cardItemIndex, 1)
    setCardItem([...cardItem])
  }
  return (
    <div className='contain'>
      <div className='row'>
        <div className='col-lg-8'>
          <div className='row'>
            <div className='col-lg-12'>
              <h3>Products</h3>
            </div>

            <div className='row'>
              {products.map((product) => {
                return (
                  <Shop cardItem={cardItem} data={product}
                    handleAddCard={handleAddCard}></Shop>
                )
              })
              }
            </div>
          </div>
        </div>
        <div className='col-lg-4' id='cart'>
          <div className='row'>
            <div className='col-lg-12'>
              <h3>Card</h3>
            </div>
          </div>
          <div className='row'>
            <div className='col-lg-12'>
              <ol class="list-group list-group-numbered">
                {
                  cardItem.map((item) => {
                    return <CardItem data={item} handleRemoveCard={handleRemoveCard}></CardItem>
                  })
                }
              </ol>
              <div className='col-lg-12'>
                <h1>Total :{total}</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};
export default App;