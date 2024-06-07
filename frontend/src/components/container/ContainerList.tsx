import React from "react";

import Button from "../Button";
import Skeleton from "../Skeleton";

import { SummaryContainerFields } from "../../constants/container";

import { types } from "../../../wailsjs/go/models";

interface IContainerListProps extends React.HTMLAttributes<HTMLDivElement> {
  containerList: types.ContainerSummary[]
	isLoading: boolean

	handleStartContainer: (event: React.MouseEvent<HTMLButtonElement>) => void
	handleStopContainer: (event: React.MouseEvent<HTMLButtonElement>) => void
	handleDeleteContainer: (event: React.MouseEvent<HTMLButtonElement>) => void
}

const ContainerList = ({ containerList, isLoading, handleStartContainer, handleStopContainer, handleDeleteContainer }: IContainerListProps) => {
	// Get Action Element
	// CASE 1: exited: START
	// CASE 2: running: STOP
	const getActionElement = (containerData: types.ContainerSummary) => {
		switch (containerData.State) {
			case "exited":
				return (
					<div className="flex items-center justify-center gap-1">
						<Button 
							disabled={isLoading}
							id={containerData.Id} 
							name={containerData.State}
							onClick={handleStartContainer}>
								Start
						</Button>
						<Button 
							variant="danger"
							disabled={isLoading}
							id={containerData.Id} 
							name={containerData.State}
							onClick={handleDeleteContainer}>
								Delete
						</Button>
					</div>
				)
			case "running":
				return (
					<Button 
						id={containerData.Id} 
						name={containerData.State}
						onClick={handleStopContainer}>
							Stop
					</Button>
				)
		}
	}

  return (
		isLoading ||
    containerList &&
    containerList.length > 0 ? (
      <div className="w-full mx-auto">
        <table>
          <thead className="border">
            <tr>
              { SummaryContainerFields.map((SummaryContainerFieldItem) => (
                <th key={SummaryContainerFieldItem} className="p-2 text-center text-white bg-gray-700 border">
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
                <td className="p-2 text-center border">
									{getActionElement(containerData)}
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
