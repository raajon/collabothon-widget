import LoanScheduleDetails from "../widgets/calendar/atoms/quarks/LoanScheduleDetails"

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
    data: UniversalDetailProps 

}

export interface LoanScheduleProps {
    capital_installement: number;
    interest_installement: number;
    currency: string;
    loanDetails: {
        title: string;
        number: string;
        currency: string;
        total_capital: number;
        remaining_capital: number;
    };
}

export type UniversalDetailProps = LoanScheduleProps | any