export interface DashboardType{
    objectId: string,
    title:string,
    widgets: WidgetType[][]
}

export interface WidgetType{
    type:string,
    title:string
}