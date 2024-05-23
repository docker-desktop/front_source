import React, { useState, useEffect } from 'react';

import Skeleton from '../components/Skeleton';

import { types } from "../../wailsjs/go/models";
import { DockerInfo } from "../../wailsjs/go/services/programService";

const MainPage = () => {
	const [version, setVersion] = useState<types.VersionInfo>();

	useEffect(() => {
		getDockerVersion()
	}, [])

	const getDockerVersion = async (): Promise<void> => {
		const res = await DockerInfo()

		// if res is not null
		setVersion(() => res)
		return
	}

	return (
		<div className="w-full h-full ">
			<h1 className="mb-4 text-2xl">Docker Desktop Info</h1>

			{/* version Info here */}
			{ version && version != null ? (
				<div></div>
			): (
				<Skeleton type="text" />
			)}
		</div>
	);
};

export default MainPage;
