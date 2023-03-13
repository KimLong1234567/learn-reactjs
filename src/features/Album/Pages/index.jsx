import React from "react";
import PropTypes from "prop-types";
import AlbumList from "../components/AlbumList";

AlbumFeature.propTypes = {};

function AlbumFeature(props) {
  const albumList = [
    {
      id: 1,
      name: "Nhạc Hoa Thịnh Hành",
      thumbnailUrl:
        "https://photo-zmp3.zmdcdn.me/banner/6/c/a/7/6ca7e0e002c0cfdc6d341b809edaf7f4.jpg",
    },
    {
      id: 2,
      name: "Rap Việt Nghe là Ghiền",
      thumbnailUrl:
        "https://photo-zmp3.zmdcdn.me/banner/d/3/6/f/d36f4338842a108aa23e6edef3db1de7.jpg",
    },
    {
      id: 3,
      name: "Trào lưu nhạc Hot",
      thumbnailUrl:
        "https://photo-zmp3.zmdcdn.me/banner/6/1/7/f/617fea08d0f58f46df9a54361252f061.jpg",
    },
  ];
  return (
    <div>
      <h2>Có thể bạn sẽ thích</h2>
      <AlbumList albumList={albumList} />
    </div>
  );
}

export default AlbumFeature;
