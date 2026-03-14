import { Badge } from "@/components/shadcn/ui/badge"
import StatCardHeader from "@/views/tenant_admin/components/StatCardHeader"
import { Staff } from "./StaffTable"
import { ArrowLeft, Copy, EllipsisVertical, UsersRound } from "lucide-react"
import TabHeader from "@/views/tenant_admin/components/TabHeader"
import { useState } from "react"
import SearchBar from "../../components/SearchBar"
import FilterBar from "../../components/FilterBar"
import DocumentsTab from "./DocumentsTab"
import OrdersTab from "./OrdersTab"
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
    BreadcrumbLink,
} from "@/components/shadcn/ui/breadcrumb"
import SalaryTable from "./SalaryTable"

type Props = {
    staff: Staff
    onBack: () => void
}

const StaffDetailPage = ({ staff, onBack }: Props) => {
    const [activeTab, setActiveTab] = useState('salaries')
    const [search, setSearch] = useState('')
    return (
        <div className="space-y-4">
            <div className="shrink-0 rounded-md p-4 bg-card border">
                <div className="flex flex-col gap-6">
                    <div>
                        <Breadcrumb className="border-b pb-2">
                            <BreadcrumbList>
                                <BreadcrumbItem>
                                    <BreadcrumbLink onClick={onBack} className="cursor-pointer">
                                        Staff Management
                                    </BreadcrumbLink>
                                </BreadcrumbItem>
                                <BreadcrumbSeparator />
                                <BreadcrumbItem>
                                    <BreadcrumbPage>Staff Details</BreadcrumbPage>
                                </BreadcrumbItem>
                            </BreadcrumbList>
                        </Breadcrumb>
                    </div>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 bg-blue-200 flex items-center justify-center rounded-md">
                                <UsersRound className="w-5 h-5 text-blue-500" />
                            </div>
                            <div>
                                <div className="flex items-center gap-2">
                                    <p className="text-xl font-bold text-foreground">{staff.name}</p>
                                    <Badge className="bg-green-100 text-green-700 rounded-full border-none">{staff.status}</Badge>
                                </div>
                                <div className="flex items-center gap-2">
                                    <p className="text-emerald-600">{staff.empCode}</p> 
                                    <div className="w-1 h-1 rounded-full bg-emerald-600" />
                                    <p className="text-emerald-600">{staff.role}</p>
                                </div>
                            </div>
                        </div>
                        <div className="w-10 h-10 border rounded-md flex items-center justify-center cursor-pointer">
                            <EllipsisVertical className="w-5 h-5" />
                        </div>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-5 border rounded-md">
                        <div className="flex items-center justify-between border-r pr-4">
                            <StatCardHeader title="Phone Number" value={staff.phone} />
                            <div
                                className="cursor-pointer"
                                onClick={() => navigator.clipboard.writeText(staff.phone)}
                            >
                                <Copy className="w-6 h-6 text-green-600" />
                            </div>
                        </div>
                        <div className="flex items-center justify-between border-r pr-4">
                            <StatCardHeader title="Email" value={staff.email} />
                            <div
                                className="cursor-pointer"
                                onClick={() => navigator.clipboard.writeText(staff.email)}
                            >
                                <Copy className="w-6 h-6 text-green-600" />
                            </div>
                        </div>
                        <StatCardHeader title="Serving Floor" value={staff.floor} className="border-r" />
                        <StatCardHeader title="Salary" value={staff.salary} className="border-r" />
                        <StatCardHeader title="Joining Date" value={staff.joiningDate} />
                    </div>
                </div>
            </div>

            <div className="shrink-0 rounded-md p-4 bg-card border">
                <p className="text-lg font-bold text-foreground">Performance</p>
            </div>

            <div className="shrink-0 rounded-md bg-card border">
                <div className="flex items-center justify-between border-b pb-2 p-4">
                    <TabHeader
                        value={activeTab}
                        onChange={setActiveTab}
                        tabs={[
                            { label: 'Salaries', value: 'salaries' },
                            { label: 'Documents', value: 'documents' },
                            { label: 'Orders', value: 'orders' },
                        ]}
                    />
                </div>
                <div className="flex items-center gap-2 px-4 pt-2">
                    <SearchBar value={search} onChange={setSearch} placeholder="Search staff" />
                    <FilterBar />
                </div>
                <div className="p-4">
                    {activeTab === 'salaries' && (
                        <SalaryTable />
                    )}
                    {activeTab === 'documents' && (
                        <DocumentsTab />
                    )}
                    {activeTab === 'orders' && (
                        <OrdersTab />
                    )}
                </div>
            </div>

        </div>
    )
}

export default StaffDetailPage  