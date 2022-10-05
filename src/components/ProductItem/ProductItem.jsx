import React, {useState} from 'react';
import Button from "../Button/Button";
import Minus from "../Button/Minus";
import Plus from "../Button/Plus";
import './ProductItem.css';

const ProductItem = ({product, className, onAdd, img}) => {

    //hello worl

    const [check, setCheck] = useState(true);
    const [count, setCount] = useState(0);
    const onAddHandler = () => {
        onAdd(product, count + 1);
    }
    function whynot(){
        console.log('kek')
    }
    function checker(){
        setCheck(!check);
    }


    return (
        <div className={'product ' + className}>
            {!check ? <div className='nmb'><span className='child'>{count}</span></div> : ''}
            <img src={require('./' + img)} className={'img'}/>
            <div className={'price'}>
                <span><b className='name'>{product.title}</b>: <b>{product.price}$</b></span>
            </div>
            {check ?
                <div className={'btn'}>
                    <button className={'add-btn button'} onClick={() => {checker()}}>
                        ADD
                    </button>
                </div>
                :
                <div className={'btn'}>
                    <button className={'add-btn pm button'} onClick={() => {onAddHandler(); setCount(count + 1)}}>
                        +
                    </button>
                    <button className={'add-btn pm button'} onClick={() => {onAddHandler(); count <= 1 ? checker() : setCount(count - 1)}}>
                        -
                    </button>
                </div>
            }
        </div>
    );
};

export default ProductItem;
