import React, { useState, useEffect } from 'react';

const Item = ({ match }) => {

    useEffect(() => {
        fetchItem();
    }, []);

    const [item, setItem] = useState({
        images: {}
    });

    const fetchItem = async () => {

        const data = await fetch(`https://fortniteapi.io/v1/items/get?id=${match.params.id}&lang=en`, {
            headers: {
                Authorization: '6bf94a2c-e33b1dba-2e964cb5-ff164ca5',
            }
        });

        const item = await data.json();

        console.log(item.item)

        setItem(item.item);
    }

    return (
        <div>
            <h1>{ item.name }</h1>
            <p>{ item.description }</p>
            <img src={item.images.icon} alt="" />
        </div>
    )

}

export default Item;