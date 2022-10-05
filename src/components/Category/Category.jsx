import React, {useCallback, useEffect, useState} from 'react';
import './Category.css';
import {useTelegram} from "../../hooks/useTelegram";
import Button from "../Button/Button";

const Category = () => {
    return (
        <div className={"category"}>
            <Button className={'add-btn'}>
                Zumos Fresko
            </Button>
            <Button className={'add-btn'}>
                Tomatos
            </Button>
            <Button className={'add-btn'}>
                Climento
            </Button>
        </div>
    );
};

export default Category;
