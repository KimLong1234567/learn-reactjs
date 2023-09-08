import React, { useState, useEffect } from 'react';
import './prod_manage.scss';
// import axios from 'axios';


function Manage() {
    const [product, setData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/api/data/product')
            .then((response) => response.json())
            .then((product) => {
                if (Array.isArray(product)) {
                    setData(product);
                    // setImageUrl(data.imageUrl);
                } else {
                    console.log('ko đúng định dạng');
                }

            })
            .catch((error) => console.error(error));
    }, []);


    return (
        <div className="App">
            <h1 className='h1'>QUẢN LÝ SẢN PHẨM</h1>
            {/* Add your navigation links here */}
            <div className='container'>
                <table className='table table-bordered'>
                    <thead>
                        <tr style={{}}>
                            <th className='table-succes' scope='col'>STT</th>
                            <th className='table-succes' scope='col'>Mã sản phẩm</th>
                            <th className='table-succes' scope='col'>Tên sản phẩm</th>
                            <th className='table-succes' scope='col'>Chi tiết sản phẩm</th>
                            <th className='table-succes' scope='col'>Giá sản phẩm</th>
                            <th className='table-succes' scope='col'>Xuất Xứ</th>
                            <th className='table-succes' scope='col'>Hình ảnh</th>
                            <th className='table-succes' scope='col'>Số lượng</th>
                            <th className='table-succes' scope='col'>Sửa</th>
                            <th className='table-succes' scope='col'>Xoá</th>
                        </tr>
                    </thead>
                    <tbody>
                        {product.map((product, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{product.pet_prod_id}</td>
                                <td>{product.pet_prod_name}</td>
                                <td>{product.pet_prod_detail}</td>
                                <td>{new Intl.NumberFormat('vi-VN').format(product.pet_prod_price)} VND</td>
                                <td>{product.pet_prod_origin}</td>
                                <td><img src={`/img/${product.pet_prod_image}`} alt={product.pet_prod_name} /></td>
                                <td>{product.pet_prod_quantity}</td>
                                <td><a href={`update_product.php?id=${product.pet_prod_id}`}><button type="button" className="btn btn-sm btn-primary btn-create">Cập nhật</button></a></td>
                                <td><a href={`delete_product.php?id=${product.pet_prod_id}`}><button type="button" className="btn btn-sm btn-danger btn-create">Xoá</button></a></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Manage;
