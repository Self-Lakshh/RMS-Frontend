export type TableStatus = 'available' | 'occupied' | 'reserved' | 'inactive'

export type Table = {
    id: string
    number: string
    name: string
    floorId: string
    floorName: string
    capacity: number
    status: TableStatus
    enabled: boolean
    totalRevenue: number
    totalOrders: number
    qrCode?: string
    createdAt: string
    updatedAt: string
}

export type Floor = {
    id: string
    name: string
    tableCount: number
    isActive: boolean
    createdAt: string
}

export type TableOrder = {
    id: string
    orderId: string
    tableId: string
    customerId: string
    customerName: string
    items: Array<{
        name: string
        quantity: number
        price: number
    }>
    totalAmount: number
    status: 'pending' | 'preparing' | 'completed' | 'cancelled'
    createdBy: string
    createdAt: string
}

export type TableStats = {
    totalFloors: number
    totalTables: number
    availableTables: number
    occupiedTables: number
    inactiveTables: number
}

export type CreateTableInput = Omit<
    Table,
    'id' | 'createdAt' | 'updatedAt' | 'totalRevenue' | 'totalOrders' | 'qrCode'
>
export type UpdateTableInput = Partial<CreateTableInput> & { id: string }

export type CreateFloorInput = Omit<Floor, 'id' | 'createdAt' | 'tableCount'>
export type UpdateFloorInput = Partial<CreateFloorInput> & { id: string }
