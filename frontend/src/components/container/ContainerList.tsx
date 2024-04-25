import { useEffect, useState } from "react";

import { ContainerList as ServiceContainerList } from "../../../wailsjs/go/services/containerService";
import { types } from "../../../wailsjs/go/models";

import Skeleton from "../Skeleton";

const ContainerList = () => {
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
    containerDataList &&
    containerDataList.length > 0 ? (
      <div className="w-full mx-auto">
        <table>
          <thead className="border">
            <tr>
              <th className="p-2 text-center border bg-gray-700 text-white">
                CONTAINER ID
              </th>
              <th className="p-2 text-center border bg-gray-700 text-white">
                IMAGE
              </th>
              <th className="p-2 text-center border bg-gray-700 text-white">
                CREATED
              </th>
              <th className="p-2 text-center border bg-gray-700 text-white">
                STATUS
              </th>
              <th className="p-2 text-center border bg-gray-700 text-white">
                PORTS
              </th>
              <th className="p-2 text-center border bg-gray-700 text-white">
                Name
              </th>
            </tr>
          </thead>
          <tbody>
            {containerDataList.map((containerData, index) => (
              <tr key={index}>
                <td className="p-2 text-center border">
                  {containerData.Id.slice(0, 13)}
                </td>
                <td className="p-2 text-center border">
                  {containerData.Image}
                </td>
                <td className="p-2 text-center border">
                  {containerData.Created}
                </td>
                <td className="p-2 text-center border">
                  {containerData.Status}
                </td>
                <td className="p-2 text-center border">
                  {containerData.Ports[0] &&
                    containerData.Ports[0].PrivatePort +
                      ":" +
                      containerData.Ports[0].PublicPort +
                      "/" +
                      containerData.Ports[0].Type}
                </td>
                <td className="p-2 text-center border">
                  {containerData.Names[0]}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    ) : <Skeleton type="table" />
  );
};

export default ContainerList;
