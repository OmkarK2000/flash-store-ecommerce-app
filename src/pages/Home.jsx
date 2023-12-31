import { useEffect } from "react"
import Hero from "../Components/Hero"
import StateCard from "../Components/StateCard"
import { useState } from "react"
import ProductCard from "../Components/ProductCard"
import Categories from "../Components/Categories"


const Home = () => {

  const [products, setProducts] = useState([])

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch('https://fakestoreapi.com/products?limit=8')
      const data = await response.json()
      // console.log(data)
      setProducts(data)
    }
    fetchProducts()
  },[])

  return (
    <div>
      <Hero />
      <Categories/>
      <div className="flex flex-col text-center w-full mt-20">
        <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">PRODUCTS</h2>
        <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">Most Popular Products</h1>
      </div>
      {
        products.length > 0 ?
        <ProductCard products={products} />
        :
        <div className="text-center">Loading...</div>
      }
      <StateCard />
    </div>
  )
}

export default Home