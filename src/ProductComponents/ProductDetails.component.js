import { useSelector, useDispatch } from "react-redux";
import { fetchAllProDetails, setSelectedSize } from "../Slices/ProductDetails.Slice";
import { addToCart } from "../Slices/Cart.Slice";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import '../Styles/Thumbnails.css';
function ProductDetailsComp() {
    const { productId } = useParams();
    const { data, isloading, error, selectedSize } = useSelector((state) => state.productDetailsInfo);
    const dispatch = useDispatch();

    useEffect(() => {
        if (productId) {
            dispatch(fetchAllProDetails(productId));
        }
    }, [dispatch, productId]);

    const handleSizeClick = (size) => {
        // console.log('Size clicked:', size); 
        dispatch(setSelectedSize(size));
    };
    const handleAddToCart = () => {
        if (data && selectedSize) {
            dispatch(addToCart({ id: data.id, size: selectedSize, price: data.price, imgSrc: data.imgSrc }));
        }
    };
    if (isloading) return <p className="text-center">Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    if (!data || !data.id) return <p>No product found.</p>;

    return (
        <div className="container details-Container">
            <div className="row details-row">
                <div className="col-md-6 d-flex">
                    <div className="thumbnail-container">
                        {data.thumbnailImgs && data.thumbnailImgs.length > 0 ? (
                            data.thumbnailImgs.map((imgUrl, index) => (
                                <img
                                    className="thumbnail-img"
                                    key={index}
                                    src={`data:image/jpeg;base64,${imgUrl}`}
                                    alt="product thumbnail" style={{width:"600px"}}
                                />
                            ))
                        ) : (
                            <p>No thumbnails available.</p>
                        )}
                    </div>
                    <div className="col-sm-6 mx-4 text-center product-details-container">
                        <div className="product-details">
                            <h6 className="text name-text">{data.name}</h6>
                            <p className="price">${data.price}</p>
                            {data.size?.map((size, index) => (
                               <button
                               className={`btn-circle mx-2 ${selectedSize === size ? 'selected' : ''}`}
                               key={index}
                               onClick={() => handleSizeClick(size)}
                               style={{ backgroundColor: selectedSize === size ? '#4774a3' : '#fff', color: selectedSize === size ? '#130808' : '#000' }}
                           >
                               {size}
                           </button>
                            ))}
                              <div className="my-3">
                    <Link to={'/cart'}><button type="submit" className="bg-dark text-white addtoCart"
                    onClick={handleAddToCart}
                    >Add To Cart</button></Link>
                    </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductDetailsComp;
