import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
// import "../Album/components/Album/style.scss";
import Imgix from 'react-imgix';
// import myImage from './img/785425.png';
import "./product.scss";



function Product() {
    const [data, setData] = useState([]);
    const [inputValue, setInputValue] = useState(1); // sử dụng 1 thay vì 0  vì show sản phẩm phải có ít nhất 1 sp

    const handleInputChange = (event) => {
        setInputValue(event.target.valueAsNumber);
    };

    useEffect(() => {
        fetch('http://localhost:5000/api/data/product')
            .then((response) => response.json())
            .then((data) => {
                if (Array.isArray(data)) {
                    setData(data);
                    // setImageUrl(data.imageUrl);
                } else {
                    console.log('ko đúng định dạng');
                }

            })
            .catch((error) => console.error(error));
    }, []);

    return (
        <div className="row">
            {data.map((item, index) => (
                <div className="col-2 border border-info" id="pow" key={item.pet_prod_id}>
                    {/* <img src={myImage} alt="alo" /> */}
                    <div className="" style={{ margin: "0 30px 30px 30px" }} >
                        <a href="./">
                            {/* {imageUrl && <Imgix src={"/img/" + imageUrl} alt='hình' />} */}
                            <img src={`/img/${item.pet_prod_image}`} alt="hình ảnh sản phẩm"></img>
                        </a>
                        <h4 className="text-danger d-flex justify-content-center">{item.pet_prod_name}</h4>
                        <div className="text-danger">
                            <span>{item.pet_prod_price.toLocaleString()} VND </span>
                        </div>
                        <div>
                            <input type="number" name="quantity" min="1" defaultValue={inputValue} max={item.pet_prod_quantity} />
                        </div>

                        <div className="text-danger d-flex justify-content-end">
                            <span className="">{item.pet_prod_origin}</span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Product;