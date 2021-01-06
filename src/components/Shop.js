import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Shop = () => {

    useEffect(() => {
        fetchItems();
    }, []);

    const [items, setItems] = useState([]);

    const fetchItems = async () => {

        const data = await fetch('https://fortniteapi.io/v1/items/upcoming?lang=en', {
            headers: {
                Authorization: '6bf94a2c-e33b1dba-2e964cb5-ff164ca5',
            }
        });

        const items = await data.json();

        setItems(items.items);
    }

    return (
        <div>
            <h1>Shop Page</h1>
            { items.map(item => (
                <div key={ item.id }>
                    <Link to={ `/shop/${item.id}` }>
                        { item.name }
                    </Link>
                </div>
            )) }
        </div>
    )

}

export default Shop;