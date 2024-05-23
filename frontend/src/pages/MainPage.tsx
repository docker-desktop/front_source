import React, {useState} from 'react';

import {types} from "../../wailsjs/go/models";

const MainPage = () => {
	const [version, setVersion] = useState<types.VersionInfo>();

	return (
		<div className="w-full h-full ">
			<h1 className="text-2xl">Docker Desktop Info</h1>
		</div>
	);
};

export default MainPage;
