import { cn } from '@/components/shadcn/utils'

interface StatCardHeaderProps {
    title: string
    value: string | number
    className?: string
}

const StatCardHeader = ({ title, value, className }: StatCardHeaderProps) => {
    return (
        <div
            className={cn(
                'flex flex-col justify-center px-3 py-3 md:px-4 md:py-4 min-h-0 overflow-hidden', // contain content
                className
            )}
        >
            <p className="mb-1 text-sm font-normal text-teal-600 truncate">{title}</p>

            <div className="flex items-baseline gap-2 overflow-hidden min-w-0">
                <p
                    className="text-base font-bold text-blue-800 dark:text-blue-400 shrink-0"
                    title={String(value)}
                >
                    {value}
                </p>
            </div>
        </div>
    )
}

export default StatCardHeader