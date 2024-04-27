import React, { useState } from "react"

import Input from "../Input"
import Button from "../Button"

import { SummaryImageFields } from "../../constants/image"

const ImageSearchHeader = () => {
  const [searchInpState, setSearchInpState] = useState<string>("")
  const [searchSelectColumnState, setSearchSelectColumnState] = useState<string>("")

  const handleSearchInp = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    setSearchInpState(() => value)
  }

  const handleSearchSelectColumn = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target
  
    if (value == "") {
      return
    }

    setSearchSelectColumnState(() => value)
  }

  const submitSearchContainerData = (e: React.MouseEvent<HTMLButtonElement>) => {
  }

  return (
    <header className="flex items-center justify-start gap-4 w-full border mb-2 p-2">
      <div className="flex items-center justify-center gap-2 w-1/4">
        <Input.Select id="search_column" name="search_column" onChange={handleSearchSelectColumn}>
          <Input.Option value="">Choose Search Column</Input.Option>
            { SummaryImageFields.map((SummaryImageFieldItem) => (
              <Input.Option key={SummaryImageFieldItem} value={SummaryImageFieldItem}>{SummaryImageFieldItem}</Input.Option>
            ))}
        </Input.Select>
      </div>
      <div className="felx items-center justify-center w-1/4 flex-1">
        <Input placeholder="Enter" onChange={handleSearchInp} />
      </div>
      <div>
        <Button onClick={submitSearchContainerData}>
          Search
        </Button>
      </div>
    </header>
  )
}

export default ImageSearchHeader