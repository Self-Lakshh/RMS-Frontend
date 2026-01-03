import React, { memo } from 'react'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/shadcn/ui/card'
import { Separator } from '@/components/shadcn/ui/separator'
import { Badge } from '@/components/shadcn/ui/badge'
import { Check, Timer, X } from 'lucide-react'
import { cn } from '../../../../components/shadcn/utils'
import { Button } from '@/components/shadcn/ui/button'

export type OrderItem = {
    name: string
    quantity: number
}

export type OnlineCardProps = {
    orderId: string
    platform: string
    amount: number
    currency?: string
    items: OrderItem[]
    placedAgo: string
    onAccept: (orderId: string) => void
    onReject: (orderId: string) => void
    className?: string
}

const LiveOnlineOrders: React.FC<OnlineCardProps> = memo(
    ({
        orderId,
        platform,
        amount,
        currency = '$',
        items,
        placedAgo,
        onAccept,
        onReject,
        className = '',
    }) => {
        const itemSummary = items
            .map((i) => `${i.quantity}X ${i.name}`)
            .join(', ')
        return (
            <>
                <Card style={{ boxShadow: 'rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 3px 0px 1px' }} className={cn("rounded-xl border shadow-md",
                    className)}>
                    <CardHeader className="flex p-4 pb-2 flex-row items-start justify-between">
                        <div className='flex items-center gap-4'>
                            <span className="font-semibold text-base">
                                {orderId}
                            </span>
                            <Badge
                                variant="outline"
                                className="bg-red-100 rounded-full text-red-600">
                                {platform}
                            </Badge>
                        </div>
                        <div className="font-bold text-base">
                            {currency}
                            {amount.toFixed(2)}
                        </div>
                    </CardHeader>

                    <Separator />

                    <CardContent className="py-4 overflow-hidden max-h-20">
                        <p className="text-teal-600 text-sm line-clamp-2 overflow-hidden font-medium">
                            {itemSummary}
                        </p>
                    </CardContent>

                    <Separator />

                    <CardFooter className="flex p-3 items-center justify-between">
                        <div className="flex items-center gap-2  text-teal-600">
                            <Timer className="w-4 h-4" />
                            <span className="text-sm ">
                                {placedAgo}
                            </span>
                        </div>

                        <div className="flex gap-2">

                            <Button
                                variant="outline"
                                className="bg-red-100 p-2.5 text-red-600 hover:bg-red-200 shadow-none"
                                onClick={() => onReject(orderId)}>
                                <X className="w-4 h-4" />
                            </Button>

                            <Button
                                variant="outline"
                                className="bg-green-600 p-3 text-primary-foreground hover:bg-green-600/90 hover:text-primary-foreground shadow-none"
                                onClick={() => onAccept(orderId)}>
                                <span className="flex items-center gap-1">
                                    <Check className="w-4 h-4" />
                                    Accept
                                </span>
                            </Button>
                        </div>
                    </CardFooter>
                </Card>
            </>
        )
    },
)

export default LiveOnlineOrders
