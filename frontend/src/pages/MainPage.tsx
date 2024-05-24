import React, { useState, useEffect } from 'react';

import Skeleton from '../components/Skeleton';

import { types } from "../../wailsjs/go/models";
import { DockerInfo } from "../../wailsjs/go/services/programService";

const MainPage = () => {
	const [version, setVersion] = useState<types.VersionInfo>();
	// const [info, setInfo] = useState<types.Info>();

	useEffect(() => {
		getDockerVersion()
	}, [])

	const getDockerVersion = async (): Promise<void> => {
		const res = await DockerInfo()

		console.log(res)
		// if res is not null
		setVersion(() => res)
		return
	}

	return (
		<div className="w-full h-full ">
			<h1 className="mb-4 text-2xl">Docker Desktop</h1>

			{/* version Info here */}
			<h2 className="my-1 text-xl">- Docker Version</h2>
			{ version && version != null ? (
				<div className="flex flex-col justify-center">
					<table className="w-full">
						<thead>
							<tr className="border">
								<th className="border">API VERSION</th>
								<th className="border">ARCH</th>
								<th className="border">BUILD TIME</th>
								<th className="border">GIT COMMIT</th>
								<th className="border">GO VERSION</th>
								<th className="border">KERNEL VERSION</th>
								<th className="border">OS</th>
								<th className="border">VERSION</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td className="p-2 text-center border">{version.ApiVersion}</td>
								<td className="p-2 text-center border">{version.Arch}</td>
								<td className="p-2 text-center border">{new Date(version.BuildTime).toLocaleDateString()}</td>
								<td className="p-2 text-center border">{version.GitCommit}</td>
								<td className="p-2 text-center border">{version.GoVersion}</td>
								<td className="p-2 text-center border">{new Date(version.KernelVersion).toLocaleDateString()}</td>
								<td className="p-2 text-center border">{version.Os}</td>
								<td className="p-2 text-center border">{version.Version}</td>
							</tr>
						</tbody>
					</table>
				</div>
			): (
				<Skeleton type="text" />
			)}
		</div>
	);
};

export default MainPage;
