import React from 'react';
import img from './Images/img.jpg';
function Home(){
  return(
    <div class="card">
      <img src={img} class="card-img-top" alt="..."/>
      <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
    )
}

export default Home;