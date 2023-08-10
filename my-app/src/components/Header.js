import React from "react";
import restauranfood from "../images/restauranfood.jpg";

const Header = () => {
    return(
        <header>
            <section>
            <div>
            <h2>Little Lemon</h2>
            <h3>Chicago</h3>
            <p>We are a family owned Mediterraneran restaurant, focused on traditional recipes servred with a modern twist.</p>
            </div>
            <div>
          <img src={restauranfood} alt="Delicious food"/>
            </div>
            </section>
        </header>
    )
}

export default Header;