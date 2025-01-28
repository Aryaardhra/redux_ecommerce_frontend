import { Link, useParams } from 'react-router-dom'
import RatingStars from '../../../components/RatingStars';
import { useDispatch } from 'react-redux';
import { useFetchProductByIdQuery } from '../../../redux/features/products/productsApi';
import { addToCart } from '../../../redux/features/cart/cartSlice';
import ReviewsCard from '../reviews/ReviewsCard';

const SingleProduct = () => {
    const {id} = useParams();

    const dispatch = useDispatch();
    const {data, error, isLoading} = useFetchProductByIdQuery(id);

    const singleProduct = data?.product || {};
    const productReviews = data?.reviews || [];

    const handleAddToCart = (product) => {
      dispatch(addToCart(product))
    };

    if(isLoading) return <p>Loading...</p>
    if(error) return <p>Error while loading product details.</p>
 
  return (
    <>
      <section className="section__container bg-primary-light">
        <h2 className="section__header capitalize">{singleProduct.name}</h2>
        <div className="section__subheader space-x-2">
            <span className="hover:text-primary"><Link to="/">home</Link></span>
            <i className="ri-arrow-right-double-line"></i>
            <span className="hover:text-primary"><Link to="/shop">shop</Link></span>
            <i className="ri-arrow-right-double-line"></i>
            <span className="hover:text-primary">{singleProduct.name}</span>
        </div>
    </section>

    <section className="section__container mt-8">
    
{/*product image */}
    <div className='flex flex-col items-center md:flex-row gap-8'>
       <div className="md:w-1/2 w-full">
       <img src={singleProduct?.image}
         alt='img' 
         className='rounded-md w-full h-auto'
         />
       </div>

       <div className="md:w-1/2 w-full">
       <h3 className="text-2xl font-semibold mb-4">{singleProduct?.name}</h3>
       <p className="text-xl text-primary mb-4">
        ${singleProduct?.price}
        {singleProduct?.oldPrice && <s className="ml-2">${singleProduct?.oldPrice}</s>}
       </p>
       <p className="text-gray-400 mb-4">
        {singleProduct?.description}
       </p>

       {/* additional product info */}

       <div>
        <p><strong>Category:</strong>{singleProduct?.category}</p>
        <p><strong>Color:</strong>{singleProduct?.color}</p>
        <div className="flex gap-1 items-center">
            <strong>Rating:</strong>
            <RatingStars rating={singleProduct?.rating} />
        </div>
       </div>

       <button className="mt-6 px-6 py-3 bg-primary text-white rounded-md"
       onClick={(e) => {
        e.stopPropagation();
        handleAddToCart(singleProduct)
       }}
       >
        Add To Cart
       </button>
       </div>
    </div>
    <div></div>
    </section>

    {/* display Reviews */}

    <section className="section__container mt-8">
        <ReviewsCard productReviews = {productReviews} />
    </section>
    </>
  )
}

export default SingleProduct;