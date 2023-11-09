import React, { useContext } from 'react';
import { ProductContext } from './ProductCard';

import noImage from '../assets/no-image.jpg';
import styles from '../styles/styles.module.css';
import { ProductCardExtendStylesProps } from '../interfaces';

export interface Props extends ProductCardExtendStylesProps {
    img?: string;
}

export const ProductImage = ({ img, className, style }: Props) => {

    const { product } = useContext(ProductContext);

    let imgToShow: string;

    if (img) {
        imgToShow = img;
    } else if (product.img) {
        imgToShow = product.img
    } else {
        imgToShow = noImage
    }

    return (
        <img className={`${styles.productImg} ${className}`} src={imgToShow} alt="Product Image" style={style} />
    )
}