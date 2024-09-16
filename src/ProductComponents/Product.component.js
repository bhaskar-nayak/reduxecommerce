import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchAllProducts } from "../Slices/Product.Slice";
import '../Styles/ProductCOmponent.css';
import { Link } from "react-router-dom";

function ProductComponent() {
    const { data, isloading, error } = useSelector((state) => state.productsInfo);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchAllProducts());
    }, [dispatch]);

    if (isloading) return <p className="text-center">Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div className="container">
            <div className="row card-row">
                {data.map((product) => (
                    <div key={product.id} className="card product-card border-0">
                        <Link to={`/product-details/${product.id}`}><img className="card-img-top" src={`data:image/jpeg;base64,${product.imgSrc}`} alt={product.name} /></Link>
                        <div className="card-body">
                            <h5 className="card-title">{product.name}</h5>
                            <p className="card-price">${product.price}</p>
                            <p className="card-rating">Rating: {product.rating}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ProductComponent;
