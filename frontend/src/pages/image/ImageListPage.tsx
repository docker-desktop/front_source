import { useState, useEffect } from "react";

import Container from "../../components/Container";

import ImageList from "../../components/image/ImageList";
import ImageSearchHeader from "../../components/image/ImageSearchHeader";

import { ImageList as ServiceImageList } from "../../../wailsjs/go/services/imageService";
import { types } from "../../../wailsjs/go/models";

const ImageListPage = () => {
  const [imageDataList, setImageDataList] = useState<types.ImageSummary[]>([]);

  // 페이지 랜더링 최초 시에 이미지 목록 조회
  useEffect(() => {
    getServiceImageList();
  }, []);

  // Set ImageDataList State Ddata Handle
  const SetImageDataState = (imageData: types.ImageSummary[]): void => {
    setImageDataList(() => imageData);
  };

  // Get Image Data List
  const getServiceImageList = async () => {
    await ServiceImageList().then((res) => {
      console.log(res);
      
      SetImageDataState(res);
    });
  };

  return <Container>
    <ImageSearchHeader />
    <ImageList imageList={imageDataList} />
  </Container>;
};

export default ImageListPage;
