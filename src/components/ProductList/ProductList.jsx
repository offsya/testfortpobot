import React, {useState} from 'react';
import './ProductList.css';
import ProductItem from "../ProductItem/ProductItem";
import {useTelegram} from "../../hooks/useTelegram";
import {useCallback, useEffect} from "react";

const products = [
    {id: '1', title: 'Burger', price: 100, description: 'Синего цвета, прямые', img: 'livebg.gif'},
    {id: '2', title: 'Burger', price: 100, description: 'Зеленого цвета, теплая', img: 'livebg.gif'},
    {id: '3', title: 'Burger', price: 100, description: 'Синего цвета, прямые', img: 'livebg.gif'},
    {id: '4', title: 'Burger', price: 100, description: 'Зеленого цвета, теплая', img: 'livebg.gif'},
    {id: '5', title: 'Burger', price: 100, description: 'Синего цвета, прямые', img: 'livebg.gif'},
    {id: '6', title: 'Burger', price: 100, description: 'Зеленого цвета, теплая', img: 'livebg.gif'},
    {id: '7', title: 'Burger', price: 100, description: 'Синего цвета, прямые', img: 'livebg.gif'},
    {id: '8', title: 'Burger', price: 100, description: 'Зеленого цвета, теплая', img: 'livebg.gif'},
    {id: '9', title: 'Burger', price: 100, description: 'Зеленого цвета, теплая', img: 'livebg.gif'},
    {id: '10', title: 'Burger', price: 100, description: 'Зеленого цвета, теплая', img: 'livebg.gif'},
    {id: '11', title: 'Burger', price: 100, description: 'Зеленого цвета, теплая', img: 'livebg.gif'},
    {id: '12', title: 'Burger', price: 100, description: 'Зеленого цвета, теплая', img: 'livebg.gif'},
]

const getTotalPrice = (items = [], count) => {
    return items.reduce((acc, item) => {
        return acc += item.price
    }, 0)
}

const ProductList = () => {
    const [addedItems, setAddedItems] = useState([]);
    const {tg, queryId} = useTelegram();

    const onSendData = useCallback(() => {
        const data = {
            products: addedItems,
            totalPrice: getTotalPrice(addedItems),
            queryId,
        }
        // fetch('http://85.119.146.179:8000/web-data', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify(data)
        // })
        tg.sendData(JSON.stringify(data));
    }, [addedItems])

    useEffect(() => {
        tg.onEvent('mainButtonClicked', onSendData)
        return () => {
            tg.offEvent('mainButtonClicked', onSendData)
        }
    }, [onSendData])
    const [total, setTotal] = useState(0);
    const onAdd = (product, count) => {
        const alreadyAdded = addedItems.find(item => item.id === product.id);
        let newItems = [];

        if(alreadyAdded) {
            newItems = addedItems.filter(item => item.id !== product.id);
        } else {
            newItems = [...addedItems, product];
        }

        setAddedItems(newItems)

        if(getTotalPrice(newItems) === 0) {
            tg.MainButton.hide();
        } else {
            tg.MainButton.show();
            tg.MainButton.setParams({
                text: `VIEW ORDER`
            })
        }
    }

    return (
        <div className={'list'}>
            {products.map(item => (
                <ProductItem
                    product={item}
                    onAdd={onAdd}
                    className={'item'}
                    img={item.img}
                />
            ))}
        </div>
    );
};

export default ProductList;
