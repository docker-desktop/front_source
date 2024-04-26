import Input from "../Input"
import Button from "../Button"

import { SummaryContainerFields } from "../../constants/container"

const ContainerSearchHeader = () => {
  return (
    <header className="flex items-center justify-start gap-4 w-full border mb-2 p-2">
      <div className="flex items-center justify-center gap-2 w-1/4">
        <Input.Select id="search_column" name="search_column">
          <Input.Option value="">Choose Search Column</Input.Option>
            { SummaryContainerFields.map((SummaryContainerFieldItem) => (
              <Input.Option key={SummaryContainerFieldItem} value={SummaryContainerFieldItem}>{SummaryContainerFieldItem}</Input.Option>
            ))}
        </Input.Select>
      </div>
      <div className="felx items-center justify-center w-1/4 flex-1">
        <Input placeholder="Enter" />
      </div>
      <div>
        <Button>
          Search
        </Button>
      </div>
    </header>
  )
}

export default ContainerSearchHeader