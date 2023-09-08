import React, { useState } from 'react';
import axios from 'axios';

function AddProduct() {
    const [formData, setFormData] = useState({
        pet_prod_id: '',
        pet_prod_name: '',
        pet_prod_detail: '',
        pet_prod_quatity: 0,
        pet_prod_origin: '',
        pet_category_id: '',
        pet_prod_price: 0,
        pet_prod_img: null,
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setFormData({
            ...formData,
            pet_prod_img: file,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formDataToSend = new FormData();
        for (const key in formData) {
            formDataToSend.append(key, formData[key]);
        }

        try {
            const response = await axios.post('/api/data/addProduct', formDataToSend, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            // Handle success, e.g., show a success message or redirect to another page.
            console.log(response.data);

            // Clear the form after successful submission.
            setFormData({
                pet_prod_id: '',
                pet_prod_name: '',
                pet_prod_detail: '',
                pet_prod_quatity: 0,
                pet_prod_origin: '',
                pet_category_id: '',
                pet_prod_price: 0,
                pet_prod_img: null,
            });
        } catch (error) {
            // Handle error, e.g., show an error message.
            console.error(error);
        }
    };

    return (
        <div className="main">
            <form
                onSubmit={handleSubmit}
                encType="multipart/form-data"
                className="form"
                id="form-1"
                style={{ margin: '30px auto 30px auto' }}
            >
                <h3 className="heading">Thêm sản phẩm</h3>
                <div className="spacer"></div>

                {/* ... Các trường biểu mẫu tương tự như trong mã PHP */}

                <button className="form-submit" type="submit">
                    Thêm sản phẩm
                </button>
            </form>
        </div>
    );
}

export default AddProduct;
