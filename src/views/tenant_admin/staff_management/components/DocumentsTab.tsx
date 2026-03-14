import { Button } from "@/components/shadcn/ui/button"
import { FileText, ExternalLink } from "lucide-react"

interface Document {
  id: number
  name: string
  uploadedAt: string
}

const documents: Document[] = [
  {
    id: 1,
    name: "Adhaar card.pdf",
    uploadedAt: "Uploaded 12:33:33 Mar, 2023",
  },
  {
    id: 2,
    name: "Adhaar card.pdf",
    uploadedAt: "Uploaded 12:33:33 Mar, 2023",
  },
]

const DocumentsTab = () => {
  return (
    <div className="space-y-4">

      {documents.map((doc) => (
        <div
          key={doc.id}
          className="flex items-center justify-between rounded-lg border bg-card p-4"
        >
          {/* Left Section */}
          <div className="flex items-center gap-4">

            {/* Icon */}
            <div className="flex h-10 w-10 items-center justify-center rounded-md bg-green-100">
              <FileText className="h-5 w-5 text-green-600" />
            </div>

            {/* File Info */}
            <div>
              <p className="font-medium text-foreground">
                {doc.name}
              </p>
              <p className="text-sm text-muted-foreground">
                {doc.uploadedAt}
              </p>
            </div>

          </div>

          {/* Right Section */}
          <Button
            variant="outline"
            className="flex items-center gap-2"
          >
            <ExternalLink size={16} />
            View
          </Button>
        </div>
      ))}

    </div>
  )
}

export default DocumentsTab