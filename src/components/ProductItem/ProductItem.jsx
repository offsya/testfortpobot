import React from 'react';
import Button from "../Button/Button";
import './ProductItem.css';

const ProductItem = ({product, className, onAdd, img}) => {

    const onAddHandler = () => {
        onAdd(product);
    }

    return (
        <div className={'product ' + className}>
            <div className='nmb'>0</div>
            <img src={require('./' + img)} className={'img'}/>
            <div className={'price'}>
                <span><b className='name'>{product.title}</b>: <b>{product.price}$</b></span>
            </div>
            <div className={'btn'}>
                <Button className={'add-btn'} onClick={onAddHandler}>
                    ADD
                </Button>
            </div>
        </div>
    );
};

export default ProductItem;
