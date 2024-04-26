import { useState, useEffect } from "react";

import Container from "../components/Container";
import ContainerList from "../components/container/ContainerList";

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

  // 컨테이너 목록 조회 후 데이터를 저장하는 함수
  const getServiceContainerList = async () => {
    await ServiceContainerList().then((res) => {
      setContainerDataList(res);
    });
  };

  return (
    <Container>
      <header className="w-full border mb-2 p-2">
        Search Bar
      </header>
      <ContainerList containerList={containerDataList} />
    </Container>
  );
};

export default ContainerListPage;
