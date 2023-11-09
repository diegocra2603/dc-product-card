import React from "react";
import render from 'react-test-renderer';
import { ProductCard, ProductImage } from '../../src/components';
import { product2 } from "../data/products";


describe('ProductImage', () => {

    test('debe de mostrar el componente correctamente con la imagen personalizada', () => {
        const wrapper = render.create(
            <ProductImage className="custom-img" img="./coffee-mug.png" />
        )

        expect(wrapper.toJSON()).toMatchSnapshot();

    })

    test('debe de mostar el component con la imagen del producto', () => {
        const wrapper = render.create(
            <ProductCard product={product2}>
                {
                    () => (
                        <ProductImage />
                    )
                }
            </ProductCard>
        )

        expect(wrapper.toJSON()).toMatchSnapshot();
    })

});