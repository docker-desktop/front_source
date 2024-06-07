import React, { useState } from "react"

import Input from "../Input"
import Button from "../Button"

import { SummaryImageFields, SummanryImageSearchField } from "../../constants/image"

interface IProps {
	handleSearchInp: (e: React.ChangeEvent<HTMLInputElement>) => void
	handleSearchColumn: (e: React.ChangeEvent<HTMLSelectElement>) => void
	handleSearchImage: (e: React.MouseEvent<HTMLButtonElement>) => void
}
const ImageSearchHeader = ({handleSearchInp, handleSearchColumn, handleSearchImage}: IProps) => {
  return (
    <header className="flex items-center justify-start w-full p-2 mb-2 border gap-4">
      <div className="flex items-center justify-center w-1/4 gap-2">
        <Input.Select id="search_column" name="search_column" onChange={handleSearchColumn}>
          <Input.Option value="">Choose Search Column</Input.Option>
            {SummanryImageSearchField.map((SummaryImageFieldItem) => (
              <Input.Option key={SummaryImageFieldItem} value={SummaryImageFieldItem}>{SummaryImageFieldItem}</Input.Option>
            ))}
        </Input.Select>
      </div>
      <div className="items-center justify-center flex-1 w-1/4 felx">
        <Input placeholder="Enter" onChange={handleSearchInp} />
      </div>
      <div>
        <Button onClick={handleSearchImage}>
          Search
        </Button>
      </div>
    </header>
  )
}

export default ImageSearchHeader
