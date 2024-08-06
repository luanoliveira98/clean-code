// Código em inglês 
import { useState } from "react"

interface Product {
  title: string;
  price: string;
}

const products: Product[] = [
  {
    title: 'Macarrão',
    price: 'R$ 25,00'
  },
  {
    title: 'Hamburger',
    price: 'R$ 30,00'
  }
]

export function listProducts() {
  const [searchedProducts, setSearchedProducts] = useState<Product[]>([])

  function searchProduct(search: string) {
    const searchedProducts = products.filter(product => product.title.includes(search))

    setSearchedProducts(searchedProducts)
  }

  return (
    <div>
      <input type="text" onChange={(element) => searchProduct(element.target.value)} />

      {searchedProducts.map(product => (
        <div>
          <p>{product.title}</p>
          <p>{product.price}</p>
        </div>
      ))}
    </div>
  )
}

