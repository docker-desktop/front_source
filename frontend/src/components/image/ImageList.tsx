import React from "react";
import Skeleton from "../Skeleton";

import { types } from "../../../wailsjs/go/models";
import { SummaryImageFields } from "../../constants/image";

interface IImageListProps extends React.HTMLAttributes<HTMLDivElement> {
  imageList: types.ImageSummary[];
}

const ImageList = ({ imageList }: IImageListProps) => {
	console.log(imageList);
  return imageList && imageList.length > 0 ? (
    <div className="w-full mx-auto">
      <table>
        <thead className="border">
          <tr>
            {SummaryImageFields.map((SummaryImageFieldItem) => (
              <th
                key={SummaryImageFieldItem}
                className="p-2 text-center text-white bg-gray-700 border"
              >
                {SummaryImageFieldItem}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {imageList.map((imageData, index) => (
            <tr key={index}>
              <td className="p-2 text-center border">{imageData.Id.slice(0, 13)}</td>
              <td className="p-2 text-center border">
                {imageData.Labels &&
                  Object.keys(imageData.Labels) &&
                  Object.keys(imageData.Labels).map((key) => (
                    <div key={key}>
                      {imageData.Labels[key]}
                    </div>
                  ))}
              </td>
              <td className="p-2 text-center border">
                {imageData.RepoTags && imageData.RepoTags.length > 0 && imageData.RepoTags.join(", ")}
              </td>
              <td className="p-2 text-center border">
								{/* docker images 커맨드로 나오는 이미지의 size를 td에 표기, MB로 */}
								{imageData.Size && (imageData.Size / 1024 / 1024).toFixed(2)} MB
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  ) : (
    <Skeleton type="table" />
  );
};

export default ImageList;
