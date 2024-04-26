import { useState, useEffect } from "react";

import Container from "../components/Container";

import ContainerList from "../components/container/ContainerList";
import ContainerSearchHeader from "../components/container/ContainerSearchHaeder";

import { ContainerList as ServiceContainerList } from "../../wailsjs/go/services/containerService";
import { types } from "../../wailsjs/go/models";

const ContainerListPage = () => {
  const [containerDataList, setContainerDataList] = useState<
    types.ContainerSummary[]
  >([]);

  // 페이지 랜더링 최초 시에 컨테이너 목록 조회
  useEffect(() => {
    getServiceContainerList();
  }, []);

  // Set ContainerDataList State Ddata Handle
  const SetContainerDataState = (contianerData: types.ContainerSummary[]): void => {
    setContainerDataList(() => contianerData)
  }

  // Get Contianer Data List
  const getServiceContainerList = async () => {
    await ServiceContainerList().then((res) => {
      SetContainerDataState(res)
    });
  };

  return (
    <Container>
      <ContainerSearchHeader />
      <ContainerList containerList={containerDataList} />
    </Container>
  );
};

export default ContainerListPage;
