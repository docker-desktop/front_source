import React, { useState } from "react"

import Input from "../Input"
import Button from "../Button"

import { SummanryContainerSearchField } from "../../constants/container"

interface IProps {
	handleSearchInp: (e: React.ChangeEvent<HTMLInputElement>) => void
	handleSearchColumn: (e: React.ChangeEvent<HTMLSelectElement>) => void
	handleSearchContainer: () => Promise<void>
}

const ContainerSearchHeader = ({handleSearchInp, handleSearchColumn, handleSearchContainer}: IProps) => {
  return (
    <header className="flex items-center justify-start w-full p-2 mb-2 border gap-4">
      <div className="flex items-center justify-center w-1/4 gap-2">
        <Input.Select id="search_column" name="search_column" onChange={handleSearchColumn}>
          <Input.Option value="">Choose Search Column</Input.Option>
            {SummanryContainerSearchField.map((SummaryContainerFieldItem) => (
              <Input.Option key={SummaryContainerFieldItem} value={SummaryContainerFieldItem}>{SummaryContainerFieldItem}</Input.Option>
            ))}
        </Input.Select>
      </div>
      <div className="items-center justify-center flex-1 w-1/4 felx">
        <Input placeholder="Enter" onChange={handleSearchInp} />
      </div>
      <div>
        <Button onClick={handleSearchContainer}>
          Search
        </Button>
      </div>
    </header>
  )
}

export default ContainerSearchHeader
