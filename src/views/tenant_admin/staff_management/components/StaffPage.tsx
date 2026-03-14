import { Button } from "@/components/shadcn/ui/button"
import StatCard from "../../components/StatCard"
import { useState } from "react"
import TabsHeader from "../../components/TabHeader"
import StaffTable, { Staff } from "./StaffTable"
import SalaryTable from "./SalaryTable"
import SearchBar from "../../components/SearchBar"
import FilterBar from "../../components/FilterBar"
import AddStaffModal from "./AddStaffModal"
import AddSalaryEntry from "./AddSalaryEntry"
import StaffDetailPage from "./StaffDetailPage"

const StaffPage = () => {
    const [activeTab, setActiveTab] = useState('staff')
    const [search, setSearch] = useState('')
    const [selectedStaff, setSelectedStaff] = useState<Staff | null>(null)

    if (selectedStaff) {
        return <StaffDetailPage staff={selectedStaff} onBack={() => setSelectedStaff(null)} />
    }
    return (
        <div className="space-y-4">
            <div className="shrink-0 rounded-md border bg-card">
                <div className="flex p-4 border-b">
                    <p className="text-xl font-bold text-foreground">Staff Management</p>
                </div>
                <div className="flex flex-col gap-4">
                    <div className="grid grid-cols-3 gap-4">
                        <StatCard title="Total Staff" value="10" className="border-r" />
                        <StatCard title="Active Staff" value="10" className="border-r" />
                        <StatCard title="Inactive Staff" value="10" />
                    </div>
                </div>
            </div>
            <div className="shrink-0 rounded-md border bg-card">
                <div className="flex p-4 border-b">
                    <TabsHeader
                        value={activeTab}
                        onChange={setActiveTab}
                        tabs={[
                            { label: 'Staff', value: 'staff' },
                            { label: 'Salary', value: 'salary' },
                        ]}
                    />
                </div>
                <div className="flex items-center justify-between p-4 border-b">
                    <div className="flex items-center gap-2">
                        <SearchBar value={search} onChange={setSearch} placeholder="Search staff" />
                        <FilterBar />
                    </div>
                    <div className="flex items-center gap-2">
                        {activeTab === 'staff' && (
                            <AddStaffModal />
                        )}
                        {activeTab === 'salary' && (
                            <AddSalaryEntry />
                        )}
                    </div>
                </div>
                <div className="p-4">
                    {activeTab === 'staff' && (
                        <StaffTable onStaffClick={setSelectedStaff} />
                    )}
                    {activeTab === 'salary' && (
                        <SalaryTable />
                    )}
                </div>
            </div>
        </div>
    )
}

export default StaffPage