export interface DashboardType{
    title:string,
    widgets: WidgetType[][]
}

export interface WidgetType{
    type:string,
    title:string
}