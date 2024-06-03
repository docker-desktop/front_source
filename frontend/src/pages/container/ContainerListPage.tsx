import { useState, useEffect } from "react";

import Container from "../../components/Container";
import Loading from "../../components/Loading";

import ContainerList from "../../components/container/ContainerList";
import ContainerSearchHeader from "../../components/container/ContainerSearchHaeder";

import { ContainerList as ServiceContainerList } from "../../../wailsjs/go/services/containerService";
import { types } from "../../../wailsjs/go/models";

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

  return (
    <Container>
			<Loading.Full isLoading={isLoading} />
			<ContainerSearchHeader />
      <ContainerList 
				containerList={containerDataList} 
				isLoading={isLoading}
				handleLoadingState={handleLoadingState}
				getServiceContainerList={getServiceContainerList} />
    </Container>
  );
};

export default ContainerListPage;
