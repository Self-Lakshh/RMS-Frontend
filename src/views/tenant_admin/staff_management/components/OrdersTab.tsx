import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/shadcn/ui/table"

import { Input } from "@/components/shadcn/ui/input"
import { Badge } from "@/components/shadcn/ui/badge"
import { Button } from "@/components/shadcn/ui/button"

import { ArrowUpDown, MoreVertical, SlidersHorizontal } from "lucide-react"

interface Order {
  id: number
  time: string
  orderId: string
  customer: string
  items: string
  amount: string
  createdBy: string
  status: "Completed" | "Pending"
}

const ordersData: Order[] = [
  {
    id: 1,
    time: "12 Feb 2025, 12:33 PM",
    orderId: "#0042",
    customer: "Customer_Details",
    items: "3 Items",
    amount: "$316.00",
    createdBy: "Rahul Kumar",
    status: "Completed",
  },
  {
    id: 2,
    time: "12 Feb 2025, 12:33 PM",
    orderId: "#0042",
    customer: "Customer_Details",
    items: "3 Items",
    amount: "$316.00",
    createdBy: "Self",
    status: "Completed",
  },
  {
    id: 3,
    time: "12 Feb 2025, 12:33 PM",
    orderId: "#0042",
    customer: "Customer_Details",
    items: "3 Items",
    amount: "$316.00",
    createdBy: "Self",
    status: "Completed",
  },
]

const OrdersTab = () => {
  return (
    <div className="space-y-4">

      {/* Table */}
      <div className="rounded-lg border bg-card overflow-hidden">
        <Table>

          <TableHeader>
            <TableRow className="bg-muted/40">

              <TableHead>
                <div className="flex items-center gap-1">
                  Time
                  <ArrowUpDown size={14} />
                </div>
              </TableHead>

              <TableHead>Order</TableHead>

              <TableHead>
                <div className="flex items-center gap-1">
                  Customers
                  <ArrowUpDown size={14} />
                </div>
              </TableHead>

              <TableHead>
                <div className="flex items-center gap-1">
                  Items
                  <ArrowUpDown size={14} />
                </div>
              </TableHead>

              <TableHead>Amount</TableHead>

              <TableHead>
                <div className="flex items-center gap-1">
                  Created By
                  <ArrowUpDown size={14} />
                </div>
              </TableHead>

              <TableHead>
                <div className="flex items-center gap-1">
                  Status
                  <ArrowUpDown size={14} />
                </div>
              </TableHead>

              <TableHead className="w-[40px]" />

            </TableRow>
          </TableHeader>

          <TableBody>
            {ordersData.map((order) => (
              <TableRow key={order.id}>

                <TableCell className="text-muted-foreground">
                  {order.time}
                </TableCell>

                <TableCell className="font-medium">
                  {order.orderId}
                </TableCell>

                <TableCell>
                  {order.customer}
                </TableCell>

                <TableCell>
                  {order.items}
                </TableCell>

                <TableCell>
                  {order.amount}
                </TableCell>

                <TableCell>
                  {order.createdBy}
                </TableCell>

                <TableCell>
                  <Badge className="bg-green-100 text-green-700 hover:bg-green-100">
                    {order.status}
                  </Badge>
                </TableCell>

                <TableCell>
                  <MoreVertical className="h-4 w-4 cursor-pointer text-muted-foreground" />
                </TableCell>

              </TableRow>
            ))}
          </TableBody>

        </Table>

        {/* Footer */}
        <div className="flex items-center justify-between p-4 text-sm text-muted-foreground border-t">
          <p>20 of 700 rows are shown.</p>

          <div className="flex gap-2">
            <Button variant="outline" size="sm">
              Previous
            </Button>

            <Button variant="outline" size="sm">
              Next
            </Button>
          </div>
        </div>

      </div>

    </div>
  )
}

export default OrdersTab