import Rating from "react-rating";
import { AiFillStar } from 'react-icons/ai';

const SingleProduct = (props) => {

    const { title, img, price, rating } = props.product

    return (
        <div className=" p-4 w-72 rounded-xl border-2">

            <img src={img} alt='No image' className="rounded-xl" />

            <div className="card-body text-center ">
                <Rating
                    fractions={2}
                    initialRating={rating}
                    placeholderRating={5.00}
                    fullSymbol={<AiFillStar className="text-[#FF3811]"></AiFillStar>}
                    emptySymbol={<AiFillStar ></AiFillStar>}
                />
                <h2 className="tex-xl font-bold">{title}</h2>
                <h1 className="text-[#ff3811] font-semibold">price : ${price ? price : 'N/A'}</h1>

            </div>
        </div>
    );
};

export default SingleProduct;