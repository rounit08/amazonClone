import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home_image"
          alt=""
          src="https://allesoverfilm.nl/media/uploads/amazon_prime_winkel_banner.jpg"
        />
        <div className="home__row">
          <Product
            title="DO EPIC SHIT by Ankur Warikoo"
            price={299}
            image="https://images-na.ssl-images-amazon.com/images/I/41+grDTP2FL._SY344_BO1,204,203,200_.jpg"
            rating={4.5}
          />
          <Product
            title="
            ASUS TUF Gaming F15, 15.6-inch (39.62 cms) FHD 144Hz, Intel Core i5-10300H 10th Gen, GTX 1650 Ti GDDR6 4GB Graphics, Gaming Laptop (8GB RAM/512GB."
            price={69999}
            image="https://m.media-amazon.com/images/I/914o5xV1+8L._SL1500_.jpg"
            rating={4.5}
          />
        </div>
        <div className="home__row">
          <Product
            title="Google Pixel 6 5G"
            price={60510}
            image="https://m.media-amazon.com/images/I/71adnun6E8L._SL1500_.jpg"
            rating={4.5}
          />
          <Product
            title="Saregama Carvaan Premium Hindi - Portable Music Player with 5000 Preloaded Songs"
            price={6790}
            image="https://m.media-amazon.com/images/I/719xxeFg76L._SL1500_.jpg"
            rating={4.5}
          />
          <Product
            title="boAt Rockerz 450 Bluetooth Wireless On Ear Headphone with Mic(Aqua Blue)"
            price={1099}
            image="https://m.media-amazon.com/images/I/61u1VALn6JL._SL1500_.jpg"
            rating={4.5}
          />
        </div>
        <div className="home__row">
          <Product
            title="LG 127cm(50 inches) 4K Ultra HD Smart LED TV 50UP7500PTZ(Rocky Black) (2021 Model)"
            price={48000}
            image="https://m.media-amazon.com/images/I/61SxH0MU7YL._SL1500_.jpg"
            rating={4.5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
