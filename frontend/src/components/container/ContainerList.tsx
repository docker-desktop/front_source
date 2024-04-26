import React from "react";
import Skeleton from "../Skeleton";

import { types } from "../../../wailsjs/go/models";
import { SummaryContainerFields } from "../../constants/container";

interface IContainerListProps extends React.HTMLAttributes<HTMLDivElement> {
  containerList: types.ContainerSummary[]
}

const ContainerList = ({ containerList }: IContainerListProps) => {
  return (
    containerList &&
    containerList.length > 0 ? (
      <div className="w-full mx-auto">
        <table>
          <thead className="border">
            <tr>
              { SummaryContainerFields.map((SummaryContainerFieldItem) => (
                <th key={SummaryContainerFieldItem} className="p-2 text-center border bg-gray-700 text-white">
                  {SummaryContainerFieldItem}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {containerList.map((containerData, index) => (
              <tr key={index}>
                <td className="p-2 text-center border">
                  {containerData.Id.slice(0, 13)}
                </td>
                <td className="p-2 text-center border">
                  {containerData.Image}
                </td>
                <td className="p-2 text-center border">
                  {new Date(containerData.Created).toLocaleDateString()}
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
