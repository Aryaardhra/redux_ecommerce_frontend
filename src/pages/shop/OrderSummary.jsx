import { useDispatch, useSelector } from "react-redux"; 
import { clearCart } from "../../redux/features/cart/cartSlice";
//import { loadStripe } from "@stripe/stripe-js";
import { loadStripe } from "@stripe/stripe-js"
import { getBaseUrl } from "../../utils/baseURL";
const OrderSummary = () => {

    const dispatch = useDispatch();
    const {user} = useSelector(state => state.auth)
    //console.log(user)
    const products = useSelector((store) => store.cart.products);
    //console.log(products)
    const { tax, taxRate, totalPrice, grandTotal, selectedItems } = useSelector((store) => store.cart )

    const handleClearCart = () => {
        dispatch(clearCart())
    }

    //payment integration

    const makePayment = async (e) => {
        const stripe =  await loadStripe(import.meta.env.VITE_STRIPE_PK);
        const body = {
            products: products,
            userId: user?._id
        }

        const headers = {
              "Content-Type": "application/json"
        }

        const response = await fetch(`${getBaseUrl()}/api/orders/create-checkout-session`, {
            method: "POST",
            headers: headers,
            body: JSON.stringify(body)
        })

        
        const session =  await response.json()
        console.log("session: ", session);

        const result =  stripe.redirectToCheckout({
            sessionId: session.id
        })
        console.log("Result:",  result)
        if(result.error) {
            console.log("Error:", result.error)
        }
    }

  return (
    <div className="mt-5 rounded bg-slate-400 text-base">
        <div className="px-6 py-4 space-y-5">
            <h2 className="text-xl text-text-dark">Order Summary</h2>
            <p>Selected Items: {selectedItems}</p>
            <p>Total Price: ${totalPrice.toFixed(2)}</p>
            <p>Tax ({ taxRate *100 }%) : ${tax.toFixed(2)}</p>
            <h3 className="font-bold">GrandTotal : ${grandTotal.toFixed(2)}</h3>
            <div className="px-4 mb-6">
                <button 
                onClick={(e) => {e.stopPropagation();
                    handleClearCart();
                }}
                className="bg-zinc-500 px-3 py-1 5 text-white mt- rounded-md flex justify-between item-center mb-4">
                    <span className="mr-2">Clear Cart</span><i className="ri-delete-bin-6-line"></i>
                </button>
                <button 
                onClick={(e) => { e.stopPropagation();
                 makePayment();
                }}
                className="bg-zinc-600 px-3 py-1 5 text-white mt- rounded-md flex justify-between item-center mb-4">
                    <span className="mr-2">Proceed Checkout</span><i className="ri-bank-card-line"></i>
                </button>
            </div>
        </div>
    </div>
  )
}

export default OrderSummary