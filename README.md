# DO-Product-Card

Este es un paquete de pruebas de despliegue en NPM

### Diego Cruz

## Ejemplo

```
import { ProductCard, ProductImage, ProductTitle, ProductButtons } from 'dc-product-card';
```

```
<ProductCard
    product={product}
    initialValues={{
        count: 4,
        // maxCount: 10,
    }}
>
    {
        ({ reset, increaseBy, count, isMaxCountReached }) => (
            <>
                <ProductImage />
                <ProductTitle />
                <ProductButtons />
            </>
        )
    }

</ProductCard>
```