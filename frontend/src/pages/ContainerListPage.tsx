import { useState, useEffect } from "react";

import Container from "../components/Container";
import Input from "../components/Input";
import Button from "../components/Button";

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
      <header className="flex items-center justify-start gap-4 w-full border mb-2 p-2">
        <div className="flex items-center justify-center gap-2 w-1/4">
          <Input.Select id="search_column" name="search_column">
            <Input.Option value="">Choose Search Column</Input.Option>
            <Input.Option value="">ID</Input.Option>
          </Input.Select>
        </div>
        <div className="felx items-center justify-center w-1/4 flex-1">
          <Input placeholder="Enter" />
        </div>
        <div>
          <Button>
            Search
          </Button>
        </div>
      </header>
      <ContainerList containerList={containerDataList} />
    </Container>
  );
};

export default ContainerListPage;
