import React from "react";
import { toast } from "react-toastify";

import Button from "../Button";
import Skeleton from "../Skeleton";

import { SummaryContainerFields } from "../../constants/container";

import { StartContainer, StopContainer } from "../../../wailsjs/go/services/containerService";
import { types } from "../../../wailsjs/go/models";

type BtnEvent = React.MouseEvent<HTMLButtonElement>;

interface IContainerListProps extends React.HTMLAttributes<HTMLDivElement> {
  containerList: types.ContainerSummary[]
	isLoading: boolean

	getServiceContainerList: () => Promise<void>
}

const ContainerList = ({ containerList, isLoading, getServiceContainerList }: IContainerListProps) => {
	// Start Container 
	const handleStartContainer = async (event: BtnEvent): Promise<void> => {
		const containerId = event.currentTarget.id;
		if (!containerId) {
			return
		}

		await StartContainer(containerId);
		await getServiceContainerList();
		return
	}

	// Stop Container 
	const handleStopContainer = async (event: BtnEvent): Promise<void> => {
		const containerId = event.currentTarget.id;
		if (!containerId) {
			return
		}

		await StopContainer(containerId);
		await getServiceContainerList();
		return

	}

	// Get Action Element
	// CASE 1: exited: START
	// CASE 2: running: STOP
	const getActionElement = (containerData: types.ContainerSummary) => {
		switch (containerData.State) {
			case "exited":
				return (
					<Button 
						disabled={isLoading}
						id={containerData.Id} 
						name={containerData.State}
						onClick={handleStartContainer}>
							Start
					</Button>
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
