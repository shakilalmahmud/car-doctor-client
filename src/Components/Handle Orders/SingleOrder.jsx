import { useEffect, useState } from "react";


const SingleOrder = ({ order, handleOrderCancel, handleOrderConfirm }) => {
    const [data, setData] = useState([])
    const { date, _id, quantity, confirmation } = order
    const [isConfirm, SetConfirm] = useState(confirmation)
 
    const orderConfirmed = (order) =>{
        handleOrderConfirm(order) 
        SetConfirm(true)
       }

    const url = `http://localhost:3000/services/${_id}`

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setData(data)

            })
    }, [])

    const { img, title, price } = data

    return (
        <tr>
            <th>
                <button onClick={() => handleOrderCancel(_id)} className="btn btn-circle bg-slate-800">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="#F3F3F3" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={img} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold text-xl">{title}</div>
                        <div className="text-sm opacity-50">{quantity}</div>
                    </div>
                </div>
            </td>
            <td className="font-semibold">
                $ {price}
            </td>
            <td>{date}</td>
            <td className=''>
                <button className="btn mx-auto text-white bg-[#FF3811]" onClick={() => orderConfirmed(order)}>{isConfirm ? 'confirmed' : "Pending"}</button>
            </td>
        </tr>
    );
};

export default SingleOrder;