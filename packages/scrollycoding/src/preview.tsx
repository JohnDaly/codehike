import * as React from "react"
import { CodeRunner } from "react-smooshpack"
import {
  MiniBrowser,
  MiniBrowserProps,
} from "@code-hike/mini-browser"
import { Demo } from "./context"

interface PreviewProps extends MiniBrowserProps {}

export { Preview, PreviewProps }

function Preview({
  demo,
  ...props
}: { demo: Demo } & MiniBrowserProps) {
  const paths = Object.keys(demo.files)
  const files = {} as Record<string, { code: string }>
  paths.forEach(path => {
    files["/" + path] = { code: demo.files[path].code }
  })

  return (
    <MiniBrowser {...props}>
      <CodeRunner
        customSetup={{ files }}
        customStyle={{
          minHeight: "unset",
          height: "100%",
          border: 0,
        }}
      />
    </MiniBrowser>
  )
}
