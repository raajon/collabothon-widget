export interface DashboardType {
    objectId: string,
    title: string,
    widgets: WidgetType[][]
}

export interface WidgetType {
    type: string,
    title: string,
    mode: string
}

export interface EventType {
    type: string
    startDate: Date
    endDate: Date
    title: string
    data: any
    
}