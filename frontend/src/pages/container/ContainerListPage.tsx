import { useState, useEffect } from "react";
import { toast } from "react-toastify";

import Container from "../../components/Container";
import Loading from "../../components/Loading";

import ContainerList from "../../components/container/ContainerList";
import ContainerSearchHeader from "../../components/container/ContainerSearchHaeder";

import { ContainerList as ServiceContainerList } from "../../../wailsjs/go/services/containerService";
import { StartContainer, StopContainer, DeleteContainer } from "../../../wailsjs/go/services/containerService";
import { types } from "../../../wailsjs/go/models";

type BtnEvent = React.MouseEvent<HTMLButtonElement>;

const ContainerListPage = () => {
	const [isLoading, setIsLoading] = useState<boolean>(true);
  const [containerDataList, setContainerDataList] = useState<
    types.ContainerSummary[]
  >([]);

  // 페이지 랜더링 최초 시에 컨테이너 목록 조회
  useEffect(() => {
    getServiceContainerList();
  }, []);

	// handle loading state 
	const handleLoadingState = (): void => {
		setIsLoading(prev => !prev)
	}

  // Set ContainerDataList State Ddata Handle
  const SetContainerDataState = (contianerData: types.ContainerSummary[]): void => {
    setContainerDataList(() => contianerData)
  }

  // Get Contianer Data List
  const getServiceContainerList = async (): Promise<void> => {
		setIsLoading(() => true)
    await ServiceContainerList().then((res) => {
      SetContainerDataState(res)
			setIsLoading(() => false)
			return	
    });
  };


	// Start Container 
	const handleStartContainer = async (event: BtnEvent): Promise<void> => {
		const containerId = event.currentTarget.id;
		if (!containerId) {
			return
		}

		handleLoadingState()
		await StartContainer(containerId).then(async () => {
			toast.success("Container started successfully");
			await getServiceContainerList();
		})
		return
	}

	// Stop Container 
	const handleStopContainer = async (event: BtnEvent): Promise<void> => {
		const containerId = event.currentTarget.id;
		if (!containerId) {
			return
		}
		
		handleLoadingState()
		await StopContainer(containerId).then(async () => {
			await new Promise((resolve) => setTimeout(resolve, 2000)); // 실제 STOP 동작 이후, 컨테이너를 바로 조회할 시에 컨테이너 상태가 변경되지 않아서 2초 대기
			toast.success("Container stopped successfully");
			await getServiceContainerList();
		})
		return
	}

	// Delete Container 
	const handleDeleteContainer = async (event: BtnEvent): Promise<void> => {
		const containerId = event.currentTarget.id;
		if (!containerId) {
			return
		}

		handleLoadingState()
		const deleteState = await DeleteContainer(containerId);
		await getServiceContainerList();
		if (!deleteState){
			toast.error("Failed to delete container");
		}
		toast.success("Container deleted successfully");

		return
	}


  return (
    <Container>
			<Loading.Full isLoading={isLoading} />
			<ContainerSearchHeader />
      <ContainerList 
				containerList={containerDataList} 
				isLoading={isLoading} 
				handleStartContainer={handleStartContainer}
				handleStopContainer={handleStopContainer}
				handleDeleteContainer={handleDeleteContainer}
				/>
    </Container>
  );
};

export default ContainerListPage;
