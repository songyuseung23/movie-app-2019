import React from 'react';

function Food({name, picture}){
  return(
    <div>
      <h1>I like {name}</h1>
      <img src={picture} alt={name}/>
    </div>
  );
}

const foodIlike = [
  {
    name: "kimchi",
    image: "https://minimalistbaker.com/wp-content/uploads/2016/02/EASY-10-ingredient-VEGAN-KIMCHI-Spicy-tangy-crunchy-DELICIOUS-vegan-glutenfree-recipe-kimchi-768x1152.jpg"
  },
  {
    name: "ramen",
    image: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/190208-delish-ramen-horizontal-093-1550096715.jpg?crop=1xw:0.9995002498750624xh;center,top&resize=768:*"
  },
  {
    name: "lemon",
    image: "https://i5.walmartimages.ca/images/Large/094/504/6000200094504.jpg"
  }
];

function App() {
  return (
  <div>
    {foodIlike.map(dish => 
    <Food name={dish.name} picture={dish.image}/>
    )}
  </div>
  );
}

export default App;
