import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/shadcn/ui/table"

import { Badge } from "@/components/shadcn/ui/badge"
import { FileText, MoreVertical } from "lucide-react"

interface Salary {
  id: number
  date: string
  name: string
  role: string
  amount: string
  type: "Credited" | "Debited"
  transactionId: string
  file: string
  description: string
}

const salaryData: Salary[] = [
  {
    id: 1,
    date: "12:33:22 Mar 15, 2023",
    name: "Sonal Kurre",
    role: "Manager",
    amount: "₹28,000",
    type: "Credited",
    transactionId: "#0042455464564565465",
    file: "Adhaar card.pdf",
    description: "Monthly Salary - December 2026",
  },
  {
    id: 2,
    date: "12:33:22 Mar 15, 2023",
    name: "Sonal Kurre",
    role: "Manager",
    amount: "₹28,000",
    type: "Credited",
    transactionId: "#0042455464564565465",
    file: "Adhaar card.pdf",
    description: "Monthly Salary - December 2026",
  },
]

const SalaryTable = () => {
  return (
    <div className="rounded-lg border bg-white">
      <Table>
        <TableHeader>
          <TableRow className="border-b bg-gray-200/50">
            <TableHead>Date and Time</TableHead>
            <TableHead>Staff</TableHead>
            <TableHead>Amount</TableHead>
            <TableHead>Type</TableHead>
            <TableHead>Transaction ID</TableHead>
            <TableHead>ID Proof</TableHead>
            <TableHead>Description</TableHead>
            <TableHead className="w-[40px]" />
          </TableRow>
        </TableHeader>

        <TableBody>
          {salaryData.map((salary) => (
            <TableRow key={salary.id}>
              <TableCell className="text-sm text-muted-foreground">
                {salary.date}
              </TableCell>

              <TableCell>
                <div className="flex flex-col">
                  <span className="font-medium">{salary.name}</span>
                  <span className="text-xs text-muted-foreground">
                    {salary.role}
                  </span>
                </div>
              </TableCell>

              <TableCell className="font-medium">
                {salary.amount}
              </TableCell>

              <TableCell>
                <Badge className="bg-green-100 text-green-700 hover:bg-green-100">
                  {salary.type}
                </Badge>
              </TableCell>

              <TableCell className="text-muted-foreground">
                {salary.transactionId}
              </TableCell>

              <TableCell>
                <a
                  href="#"
                  className="flex items-center gap-2 text-blue-600 hover:underline"
                >
                  <FileText size={16} />
                  {salary.file}
                </a>
              </TableCell>

              <TableCell className="text-muted-foreground">
                {salary.description}
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

export default SalaryTable