export interface OrderItem {
    name: string
    quantity: number
}

export interface OnlineOrder {
    orderId: string
    platform: 'Zomato' | 'Swiggy' | 'UberEats' | 'Other'
    amount: number
    items: OrderItem[]
    placedAgo: string
}

export interface RecentOrder {
    orderId: string
    orderType: 'Dine-in' | 'Takeaway' | 'Delivery'
    tableNumber: string
    amount: number
    status: 'Preparing' | 'Ready' | 'Completed' | 'Pending'
    placedAgo: string
    items: OrderItem[]
}

export interface DashboardStats {
    totalRevenue: number
    totalRevenueGrowth: number
    profitVsGoal: number
    profitVsGoalGrowth: number
    moneyLost: number
    itemSold: number
    itemSoldGrowth: number
}

export interface DashboardData {
    stats: DashboardStats
    onlineOrders: OnlineOrder[]
    recentOrders: RecentOrder[]
}
