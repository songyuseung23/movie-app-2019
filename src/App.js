import React from 'react';
import PropTypes from "prop-types";

const foodIlike = [
  {
    id:1,
    name: "kimchi",
    image: "https://minimalistbaker.com/wp-content/uploads/2016/02/EASY-10-ingredient-VEGAN-KIMCHI-Spicy-tangy-crunchy-DELICIOUS-vegan-glutenfree-recipe-kimchi-768x1152.jpg",
    rating: 5
  },
  {
    id:2,
    name: "ramen",
    image: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/190208-delish-ramen-horizontal-093-1550096715.jpg?crop=1xw:0.9995002498750624xh;center,top&resize=768:*",
    rating: 4.6
  },
  {
    id:3,
    name: "lemon",
    image: "https://i5.walmartimages.ca/images/Large/094/504/6000200094504.jpg",
    rating: 4.5
  }
];

function Food({name, picture, rating}){  //component : insert html source
  return(
    <div>
      <h1>I like {name}</h1>
      <h4>{rating} / 5.0</h4>
      <img src={picture} alt={name}/>
    </div>
  );
}

Food.propTypes = {
  name:PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
};

function App() {
  return (
  <div>
    {foodIlike.map(dish => 
    <Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating}/>
    )}
  </div>
  );
}

export default App;
