import { Users } from "./People.model";


    export interface ResponseUsers{
         data: Users[];
         date:{
            date:string;
            timezone_type:number;
            timezone:string;
            }
        }