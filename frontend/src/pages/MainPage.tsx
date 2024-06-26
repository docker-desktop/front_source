import React, { useState, useEffect } from 'react';

import Skeleton from '../components/Skeleton';

import { types } from "../../wailsjs/go/models";
import { DockerInfo, ProgramInfo } from "../../wailsjs/go/services/programService";

const MainPage = () => {
	const [version, setVersion] = useState<types.VersionInfo>();
	const [info, setInfo] = useState<types.Info>();

	useEffect(() => {
		getDockerVersion()
		getProgramInfo()
	}, [])

	const getDockerVersion = async (): Promise<void> => {
		const res = await DockerInfo()
		setVersion(() => res)
		return
	}

	const getProgramInfo = async (): Promise<void> => {
		const res = await ProgramInfo()
		console.log(res)
		setInfo(() => res)
		return
	}

	return (
		<div className="w-full h-full ">
			<h1 className="mb-4 text-2xl">Docker Desktop</h1>
			{/* program Info here */}
			<h2 className="my-1 text-xl">- Program Info</h2>
			{ info && info != null ? (
				<div className="flex flex-col justify-center">
					<table className="w-full">
						<thead className="border">
							<tr className="border">
								<th className="p-2 text-center text-white bg-gray-700 border">Architecture</th>
								<th className="p-2 text-center text-white bg-gray-700 border">Images</th>
								<th className="p-2 text-center text-white bg-gray-700 border">Containers</th>
								<th className="p-2 text-center text-white bg-gray-700 border">Container Running</th>
								<th className="p-2 text-center text-white bg-gray-700 border">Container Stopped</th>
								<th className="p-2 text-center text-white bg-gray-700 border">DockerRootDir</th>
								<th className="p-2 text-center text-white bg-gray-700 border">MemTotal</th>
								<th className="p-2 text-center text-white bg-gray-700 border">Server Version</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td className="p-2 text-center border">{info.Architecture}</td>
								<td className="p-2 text-center border">{info.Images}</td>
								<td className="p-2 text-center border">{info.Containers}</td>
								<td className="p-2 text-center border">{info.ContainersRunning}</td>
								<td className="p-2 text-center border">{info.ContainersStopped}</td>
								<td className="p-2 text-center border">{info.DockerRootDir}</td>
								<td className="p-2 text-center border">{info.MemTotal}</td>
								<td className="p-2 text-center border">{info.ServerVersion}</td>
							</tr>
						</tbody>
					</table>
				</div>
			) : (
				<Skeleton type="table" />
			)}

			{/* version Info here */}
			<h2 className="my-1 text-xl">- Docker Version</h2>
			{ version && version != null ? (
				<div className="flex flex-col justify-center">
					<table className="w-full">
						<thead>
							<tr className="border">
								<th className="p-2 text-center text-white bg-gray-700 border">API VERSION</th>
								<th className="p-2 text-center text-white bg-gray-700 border">ARCH</th>
								<th className="p-2 text-center text-white bg-gray-700 border">BUILD TIME</th>
								<th className="p-2 text-center text-white bg-gray-700 border">GIT COMMIT</th>
								<th className="p-2 text-center text-white bg-gray-700 border">GO VERSION</th>
								<th className="p-2 text-center text-white bg-gray-700 border">KERNEL VERSION</th>
								<th className="p-2 text-center text-white bg-gray-700 border">OS</th>
								<th className="p-2 text-center text-white bg-gray-700 border">VERSION</th>
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
				<Skeleton type="table" />
			)}
		</div>
	);
};

export default MainPage;
