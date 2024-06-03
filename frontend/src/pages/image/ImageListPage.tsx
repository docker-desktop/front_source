import { useState, useEffect } from "react";

import Container from "../../components/Container";
import Loading from "../../components/Loading";

import ImageList from "../../components/image/ImageList";
import ImageSearchHeader from "../../components/image/ImageSearchHeader";

import { ImageList as ServiceImageList } from "../../../wailsjs/go/services/imageService";
import { types } from "../../../wailsjs/go/models";

const ImageListPage = () => {
	const [isLoading, setIsLoading] = useState<boolean>(true);
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
		setIsLoading(true);
    await ServiceImageList().then((res) => {
      SetImageDataState(res);
			setIsLoading(false);
    });
  };

  return (
		<Container>
			<Loading.Full isLoading={isLoading} />
			<ImageSearchHeader />
			<ImageList 
				imageList={imageDataList}
				isLoading={isLoading} />
		</Container>
	);
};

export default ImageListPage;
