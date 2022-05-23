import React, { useEffect, useState } from "react";
import { Row } from 'antd';
import RestaurantCard from "./RestuarantCard";

function RestaurantList() {
    const [restaurants, setRestaurants] = useState();
    useEffect(() => {
        //fetch our API
    fetch('https://my-first-firestore-lm.web.app/restaurants')
        .then( response => response.json())
        .then(data => setRestaurants(data)) // data -> restaurants
        .catch(console.error)
    }, [])
    return (
        <section style={{marginTop: '60px' }} >
            <Row gutter> 
            {!restaurants
            ? <h2> Loading ... </h2>
            : restaurants.map(restaurant => <RestaurantCard restaurant={restaurant} key={restaurant.id} />)}
                {/* // restuarants -- from API
                // don't the key */}
            </Row>
        </section>
    )
}

export default RestaurantList;