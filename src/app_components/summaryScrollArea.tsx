import * as React from "react"

import { ScrollArea } from "@/components/ui/scroll-area"

interface SummaryAreaDemoProps{
    summary: string;
}

export function ScrollAreaDemo({summary}: SummaryAreaDemoProps) {
  return (
    <ScrollArea className="h-72 w-full rounded-md border border-gray-300">
      <div className="p-4">
        <React.Fragment>
            <p>{summary}</p>
          </React.Fragment>
       
      </div>
    </ScrollArea>
  )
}
