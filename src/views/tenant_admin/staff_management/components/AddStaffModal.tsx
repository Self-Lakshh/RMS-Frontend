import { Button } from "@/components/shadcn/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/shadcn/ui/dialog"

import { Input } from "@/components/shadcn/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/shadcn/ui/select"

import { Label } from "@/components/shadcn/ui/label"

const AddStaffModal = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-black text-white">+ Add Staff</Button>
      </DialogTrigger>

      <DialogContent className="bg-card max-w-3xl">
        <DialogHeader>
          <DialogTitle className="text-lg font-semibold">
            Add Staff
          </DialogTitle>
        </DialogHeader>

        <div className="grid grid-cols-2 gap-6 mt-4">

          {/* Name */}
          <div className="space-y-2">
            <Label>Name of Staff</Label>
            <Input placeholder="Enter" />
          </div>

          {/* Salary */}
          <div className="space-y-2">
            <Label>Salary</Label>
            <Input placeholder="$ Enter" />
          </div>

          {/* Phone */}
          <div className="space-y-2">
            <Label>Phone Number *</Label>

            <div className="flex gap-2">
              <Select defaultValue="+91">
                <SelectTrigger className="w-[90px]">
                  <SelectValue />
                </SelectTrigger>

                <SelectContent>
                  <SelectItem value="+91">🇮🇳 +91</SelectItem>
                  <SelectItem value="+1">🇺🇸 +1</SelectItem>
                </SelectContent>
              </Select>

              <Input placeholder="Enter Number" />
            </div>
          </div>

          {/* Email */}
          <div className="space-y-2">
            <Label>Email (Optional)</Label>
            <Input placeholder="Enter" />
          </div>

          {/* Role */}
          <div className="space-y-2">
            <Label>Role</Label>

            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select" />
              </SelectTrigger>

              <SelectContent>
                <SelectItem value="manager">Manager</SelectItem>
                <SelectItem value="chef">Chef</SelectItem>
                <SelectItem value="waiter">Waiter</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Floor */}
          <div className="space-y-2">
            <Label>Floor</Label>

            <Select>
              <SelectTrigger>
                <SelectValue placeholder="All" />
              </SelectTrigger>

              <SelectContent>
                <SelectItem value="ground">Ground Floor</SelectItem>
                <SelectItem value="first">First Floor</SelectItem>
                <SelectItem value="second">Second Floor</SelectItem>
              </SelectContent>
            </Select>
          </div>

        </div>

        {/* Role Based Permissions */}
        <div className="space-y-2 mt-6">
          <Label>Role Based Permissions</Label>

          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Select" />
            </SelectTrigger>

            <SelectContent>
              <SelectItem value="default">Default</SelectItem>
              <SelectItem value="custom">Custom</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Suggested Permissions */}
        <div className="text-sm text-muted-foreground mt-4">
          Suggested Permissions
        </div>

        {/* Footer */}
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

export default AddStaffModal