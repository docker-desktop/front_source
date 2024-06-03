import { useState, useEffect } from "react";
import { toast } from "react-toastify";

import Container from "../../components/Container";
import Loading from "../../components/Loading";

import ImageList from "../../components/image/ImageList";
import ImageSearchHeader from "../../components/image/ImageSearchHeader";

import { ImageList as ServiceImageList, DeleteImage } from "../../../wailsjs/go/services/imageService";
import { types } from "../../../wailsjs/go/models";

type BtnEvent = React.MouseEvent<HTMLButtonElement>;

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

	// delete Image 
	const handleDeleteImage = async (event: BtnEvent): Promise<void> => {
		const imageName = event.currentTarget.id;
		const imageID = event.currentTarget.name;
		if (!imageName || imageName === "" || imageName === undefined || !imageID || imageID === "" || imageID === undefined) {
			return;
		}

		await DeleteImage(imageName, imageID).then(async (res) => {
			if (!res) {
				toast.error("Failed to delete container");
				return;
			}
			toast.success("Container deleted successfully");
			await getServiceImageList();
			return
		})
		
	}

  return (
		<Container>
			<Loading.Full isLoading={isLoading} />
			<ImageSearchHeader />
			<ImageList 
				imageList={imageDataList}
				isLoading={isLoading} 
				handleDeleteImage={handleDeleteImage} />
		</Container>
	);
};

export default ImageListPage;
