import { useState } from "react"
import products from "../../data/products.json"
import ProductCards from './ProductCards'
import { useFetchAllProductsQuery } from "../../redux/features/products/productsApi"


const TreadingProducts = () => {

    const [visibleProducts, setVisibleProducts] = useState(8)
    const { data : { products = [],  } = {}, error, isLoading } = useFetchAllProductsQuery({})
    console.log(products)
    const loadMoreProducts = () => {
        setVisibleProducts(prevCount => prevCount + 4 )
    }
  return (
    <section className='section__container product__container'>
      <h2 className="section__header">Treading Products</h2>
      <p className="section__subheader mb-12">Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
        Dolores culpa unde consequuntur deleniti magni porro blanditiis vero! Eaque provident corrupti fuga nostrum iure, ut neque ab dicta esse magni quo.</p>

        {/*products cards */}

        <div className="mt-12">
        <ProductCards products={products.slice(0, visibleProducts)}/>
        </div>

        {/* load more products btn */}

        <div className="product__btn">
            {
                visibleProducts < products.length && (
                    <button className="btn" onClick={loadMoreProducts}>
                        Load More
                    </button>
                )
            }
        </div>
    </section>
  )
}

export default TreadingProducts