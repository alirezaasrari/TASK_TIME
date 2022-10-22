export interface IsecondPageObject {
    employeeId:number,
    emotion: string,
    description: string
}

export interface IEmployee{
    name:string
}

export interface IEmployeeُSecondPage{
    dateTime:string,
    emotion: string,
    description: string,
}

export interface ILastPage{
    stars:number,
    description: string,
    date: string,
}

export interface IEmployeeDetail{
    id:number,
    name:string
}

export interface ISecondPageEmployeeDetail{
    name?: string;
    id:number,
    datetime:string
    emotion: string,
    description:string,
    employeeid:number
}

export interface IPostEmployee{
    name:string
}

export interface IGetAllSecondPages{
    id:number,
    dateTime: string,
    emotion: string,
    description:string,
    employeeId:number,
    employee:null
}

export interface IPostSecondPageData{
    emotion: string,
    description: string,
    employeeId: number,
    employee?: IEmployeeDetail
}

export interface IPostLastPageData{
    stars: number,
    description: string,
    employeeId: number,
    employee?: IEmployeeDetail
}

export interface IGetAllLastPages{
    id: number,
    stars: number,
    description: string,
    date: string,
    employeeId: number,
    employee?: IEmployeeDetail
}

export interface IEmployeeStateDetail{
    id:number,
    date: string,
    employeeState: string,
    employeeId: number
}

export interface IEmployeeStateDetailForUpdate{
    employeeState: string,
    employeeId:number
}