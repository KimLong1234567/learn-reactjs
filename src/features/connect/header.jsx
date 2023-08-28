import React, { useState, useEffect } from 'react';

import ReactDOM from 'react-dom';
import MyImage from './logo.jpg';

function Header() {
    return (
        <div className='container-fluid'>
            <div className="row">
                <div className="col-sm-3 ">
                    <h1><a href="./"><img src={MyImage} alt='myImg' /></a></h1>
                </div>
                <div className="col-sm-4 d-flex align-items-center justify-content-center">
                    <div className="contai">
                        <form method="GET" action="./" id="fomea">
                            <input type="text" placeholder="Tìm kiếm" id='search' name="search" />
                            <button type="submit" id="submit"><i className="fa fa-search" aria-hidden="true"></i></button>
                        </form>
                    </div>
                </div>
                <div className="col-lg-5 d-flex align-items-center justify-content-end">
                    <div className="d-flex">
                        <a className="p-2 bg-primary text-light border border-info rounded-left rounded-right " href="./" style={{ marginRight: '10px' }}>Trang chủ</a>
                        <a className="p-2 bg-primary text-light border border-info rounded-left rounded-right" href="./" style={{ marginRight: '10px' }}>Đăng Ký</a>
                        <a className="p-2 bg-primary text-light border border-info rounded-left rounded-right" href="./" style={{ marginRight: '10px' }}>Đăng nhập</a>';
                        <a className="p-2 bg-primary text-light border border-info" href="./" style={{ marginRight: '10px' }}>ADMIN</a>
                        <a className="p-2 bg-primary text-light border border-info rounded-left rounded-right" href="./" style={{ marginRight: '10px' }}>Giỏ hàng</a>
                        <a className="p-2 bg-primary text-light border border-info rounded-left rounded-right" href="./" style={{ marginRight: '10px' }}>Liên Hệ</a>
                        <a className="p-2 bg-primary text-light border border-info rounded-left rounded-right" href="./" style={{ marginRight: '10px' }}>Đăng xuất</a>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default Header;
