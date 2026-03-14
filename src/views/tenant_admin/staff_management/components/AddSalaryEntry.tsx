import { Button } from "@/components/shadcn/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/shadcn/ui/dialog"

import { Input } from "@/components/shadcn/ui/input"
import { Textarea } from "@/components/shadcn/ui/textarea"
import { Label } from "@/components/shadcn/ui/label"

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/shadcn/ui/select"

const AddSalaryEntry = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-black text-white">+ Add Entry</Button>
      </DialogTrigger>

      <DialogContent className="bg-card max-w-3xl">
        <DialogHeader>
          <DialogTitle className="text-lg font-semibold">
            Add Entry
          </DialogTitle>
        </DialogHeader>

        {/* FORM GRID */}
        <div className="grid grid-cols-2 gap-6 mt-4">

          {/* Staff */}
          <div className="space-y-2">
            <Label>Staff</Label>

            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select" />
              </SelectTrigger>

              <SelectContent>
                <SelectItem value="sonal">Sonal Kurre</SelectItem>
                <SelectItem value="rahul">Rahul Verma</SelectItem>
                <SelectItem value="john">John Smith</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Amount */}
          <div className="space-y-2">
            <Label>Amount</Label>
            <Input placeholder="Enter" />
          </div>

          {/* Transaction Type */}
          <div className="space-y-2">
            <Label>Transaction Type</Label>

            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Enter" />
              </SelectTrigger>

              <SelectContent>
                <SelectItem value="credited">Credited</SelectItem>
                <SelectItem value="debited">Debited</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Transaction ID */}
          <div className="space-y-2">
            <Label>Transaction ID</Label>
            <Input placeholder="Enter" />
          </div>

        </div>

        {/* Description */}
        <div className="space-y-2 mt-6">
          <Label>Description</Label>
          <Textarea
            placeholder="Type your message here."
            className="min-h-[100px]"
          />
        </div>

        {/* Upload */}
        <div className="space-y-2 mt-6">
          <Label>Upload File (Optional)</Label>
          <Input type="file" />
        </div>

        {/* FOOTER */}
        <div className="flex justify-between mt-6">
          <Button variant="outline">Cancel</Button>

          <Button className="bg-black text-white">
            Save
          </Button>
        </div>

      </DialogContent>
    </Dialog>
  )
}

export default AddSalaryEntry