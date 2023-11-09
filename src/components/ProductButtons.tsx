import React , { useCallback, useContext } from 'react';
import { ProductContext } from './ProductCard';
import styles from '../styles/styles.module.css';
import { ProductCardExtendStylesProps } from '../interfaces';

export interface Props extends ProductCardExtendStylesProps {
}

export const ProductButtons = ({ className, style }: Props) => {

    const { increaseBy, counter, maxCount } = useContext(ProductContext);

    const isMaxReached = useCallback(
        () => !!maxCount && counter === maxCount,
        [counter],
    )

    const isMinReached = useCallback(
        () => counter === 0,
        [counter],
    )

    const HandlerClickIncrease = (value: number) => {

        if (value === +1 && !isMaxReached()) {
            increaseBy(value)
        }

        if (value === -1 && !isMinReached()) {
            increaseBy(value)
        }
    }

    return (
        <div className={`${styles.buttonsContainer} ${className}`} style={style}>
            <button className={`${styles.buttonMinus} ${isMinReached() && styles.disable}`} onClick={() => HandlerClickIncrease(-1)} >-</button>
            <span className={styles.countLabel}>{counter}</span>
            <button className={`${styles.buttonAdd} ${isMaxReached() && styles.disable}`} onClick={() => HandlerClickIncrease(+1)}>+</button>
        </div>
    )
}