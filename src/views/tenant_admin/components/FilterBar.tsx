import { ListFilter } from "lucide-react"
import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuItem,
} from "@/components/shadcn/ui/dropdown-menu"

type FilterBarProps = {
    onSortAsc?: () => void
    onSortDesc?: () => void
}

const FilterBar = ({ onSortAsc, onSortDesc }: FilterBarProps) => {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <button
                    className="flex items-center justify-center h-10 w-10 shrink-0 bg-card border rounded-md"
                >
                    <ListFilter className="w-5 h-5 text-slate-500" />
                </button>
            </DropdownMenuTrigger>

            <DropdownMenuContent align="end" className="w-40">
                <DropdownMenuItem onClick={onSortAsc}>
                    Sort A → Z
                </DropdownMenuItem>
                <DropdownMenuItem onClick={onSortDesc}>
                    Sort Z → A
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default FilterBar