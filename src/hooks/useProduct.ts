import { useEffect, useRef, useState } from 'react';
import { InitialValues, Product, onChangeArgs } from '../interfaces';

interface useProductArgs {
    product: Product;
    onChange?: (args: onChangeArgs) => void;
    value?: number;
    initialValues?: InitialValues;
}

export const useProduct = ({ onChange, product, value = 0, initialValues }: useProductArgs) => {

    const [counter, setCounter] = useState<number>(initialValues?.count || value);

    const valuesThatChanged = useRef<number[]>([]);

    const isMounted = useRef(false);

    const increaseBy = (valueToIncrease: number) => {

        let newValue: number = Math.max(counter + valueToIncrease, 0);

        if (initialValues?.maxCount) {

            newValue = Math.min(newValue, initialValues.maxCount);

        }

        setCounter(newValue);

        if (onChange) {
            onChange({ count: newValue, product });
        }

    }

    const reset = () => {
        setCounter(initialValues?.count || value);
    }

    useEffect(() => {

        if (valuesThatChanged.current[0] !== value && isMounted.current) {
            setCounter(value);
        }

        valuesThatChanged.current = [value, ...valuesThatChanged.current];

    }, [value]);

    useEffect(() => {

        isMounted.current = true;

    }, [])

    return {
        counter,
        maxCount: initialValues?.maxCount || 0,
        isMaxCountReached: !!initialValues?.count && initialValues?.maxCount === counter,
        
        increaseBy,
        reset
    }
}
