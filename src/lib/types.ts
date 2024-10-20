export interface DashboardType {
    objectId: string,
    title: string,
    widgets: WidgetType[][]
}

export interface NewEventType {
    objectId?: string,
    type: string,
    title?: string,
    startDate?: Date,
    endDate?: Date,
    seen: boolean,
    data: {
        description?: string
    }
}


export interface WidgetType {
    type: string,
    title: string,
    mode: string,
    filters: string[],
    filterable: string,
    alerts: string
}

export interface EventType {
    objectId: string
    type: string
    startDate: Date
    endDate: Date
    title: string
    data: UniversalDetailProps
    seen: boolean
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

export interface AppointmentProps {
    appointmentWIth: string
    place: string
}

export interface CustomProps {
    description: string
}

export interface DowntimeProps {
    description: string
}

export interface ImportantDeadlineProps {
    description: string
}

export interface StandingOrderProps {
    amount: number,
    account_to: string,
    receiver: string,
    currency: string,
    account_from: string
}

export type UniversalDetailProps = LoanScheduleProps |
    AppointmentProps |
    CustomProps |
    DowntimeProps |
    ImportantDeadlineProps |
    StandingOrderProps |
    any