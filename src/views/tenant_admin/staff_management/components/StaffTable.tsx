import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/shadcn/ui/table"

import { Badge } from "@/components/shadcn/ui/badge"
import { MoreVertical } from "lucide-react"

export interface Staff {
  id: number
  empCode: string
  name: string
  role: string
  floor: string
  status: "Active" | "Inactive"
  email: string
  phone: string
  salary: string
  joiningDate: string
}

const staffData: Staff[] = [
  {
    id: 1,
    empCode: "EMP001",
    name: "Sonal Kurre",
    role: "Manager",
    floor: "1st Floor",
    status: "Active",
    email: "sonal@somi.com",
    phone: "+91 9876543210",
    salary: "₹28,000",
    joiningDate: "15 Mar 2023",
  },
  {
    id: 2,
    empCode: "EMP002",
    name: "Rahul Verma",
    role: "Chef",
    floor: "Ground Floor",
    status: "Active",
    email: "rahul@somi.com",
    phone: "+91 9123456780",
    salary: "₹22,000",
    joiningDate: "10 Feb 2023",
  },
]

const StaffTable = ({ onStaffClick }: { onStaffClick?: (staff: Staff) => void }) => {
  return (
    <div className="rounded-lg border bg-white">
      <Table>
        <TableHeader>
          <TableRow className="border-b bg-gray-200/50">
            <TableHead>Emp Code</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Floor</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Phone</TableHead>
            <TableHead>Salary</TableHead>
            <TableHead>Joining Date</TableHead>
            <TableHead className="w-[40px]" />
          </TableRow>
        </TableHeader>

        <TableBody>
          {staffData.map((staff) => (
            <TableRow
              key={staff.id}
              onClick={() => onStaffClick?.(staff)}
              className={onStaffClick ? "cursor-pointer hover:bg-muted/50 transition-colors" : ""}
            >
              <TableCell className="font-medium">
                {staff.empCode}
              </TableCell>

              <TableCell>
                <div className="flex flex-col">
                  <span className="font-medium">{staff.name}</span>
                  <span className="text-xs text-muted-foreground">
                    {staff.role}
                  </span>
                </div>
              </TableCell>

              <TableCell>{staff.floor}</TableCell>

              <TableCell>
                <Badge
                  className={
                    staff.status === "Active"
                      ? "bg-green-100 text-green-700 hover:bg-green-100"
                      : "bg-red-100 text-red-700 hover:bg-red-100"
                  }
                >
                  {staff.status}
                </Badge>
              </TableCell>

              <TableCell className="text-muted-foreground">
                {staff.email}
              </TableCell>

              <TableCell className="text-muted-foreground">
                {staff.phone}
              </TableCell>

              <TableCell className="font-medium">
                {staff.salary}
              </TableCell>

              <TableCell className="text-muted-foreground">
                {staff.joiningDate}
              </TableCell>

              <TableCell>
                <MoreVertical
                  size={18}
                  className="cursor-pointer text-muted-foreground"
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

export default StaffTable