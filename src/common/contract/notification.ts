export interface notification{
    message:string;
    type: notificationTypes;
    id:string;
}

export enum notificationTypes{
    error = 0,
    warning = 1,
    message = 2
}

export interface notificationState{
    notifications:notification[];
}