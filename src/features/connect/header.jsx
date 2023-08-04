import React, { useState, useEffect } from 'react';

import ReactDOM from 'react-dom';
import myImage from './img/logo.jpg';


function Header() {
  return (
    <div className='container-fluid'>
        <div className="row"> 
            <div className="col-sm-3 ">
                <h1><a href="index.php"><img src="./img/logo.jpg"/></a></h1>
            </div>
            <div className="col-sm-4 d-flex align-items-center justify-content-center">
                <div className="contai">
                    <form method="GET" action="./index.php" id="fomea">
                        <input type="text" placeholder="Tìm kiếm" id='search' name="search"/>
                        <button type="submit" id="submit"><i class="fa fa-search" aria-hidden="true"></i></button> 
                    </form>
                </div> 
            </div>
            <div className="col-lg-5 d-flex align-items-center justify-content-end">
                <div className="d-flex">  
                    <a className="p-2 bg-primary text-light border border-info rounded-left rounded-right " href="./index.php" style="margin-right: 10px;">Trang chủ</a>
                    <a className="p-2 bg-primary text-light border border-info rounded-left rounded-right" href="./user/sign_up.php" style="margin-right: 10px;">Đăng Ký</a>
                    <a className="p-2 bg-primary text-light border border-info rounded-left rounded-right" href="./user/sign_in.php" style="margin-right: 10px;">Đăng nhập</a>';
                    <a className="p-2 bg-primary text-light border border-info" href="./admin/login.php">ADMIN</a>
                    <a className="p-2 bg-primary text-light border border-info rounded-left rounded-right" href="./view_cart.php" style="margin-right: 10px;">Giỏ hàng</a>
                    <a className="p-2 bg-primary text-light border border-info rounded-left rounded-right" href="" style="margin-right: 10px;">Liên Hệ</a>
                    <a className="p-2 bg-primary text-light border border-info rounded-left rounded-right" href="./user/logout.php" style="margin-right: 10px;">Đăng xuất</a>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Header;
