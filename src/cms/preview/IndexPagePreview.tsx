import * as React from "react"
import { type IndexPageFrontmatterType, IndexPageTemplate } from "../../pages"

type Prop = {
  entry: {
    getIn: (arg: string[]) => any
  }
}
const IndexPagePreview = ({ entry }: Prop): React.ReactElement => {
  const data = entry.getIn(["data"]).toJS() as IndexPageFrontmatterType

  console.log(data)
  if (!data) return <div>Loading...</div>
  return <IndexPageTemplate frontmatter={data} />
}

export default IndexPagePreview
