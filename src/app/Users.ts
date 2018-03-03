export class Users{
    userId:number;
    id:number;
    title:string;
    body:string;
    constructor(values: Object = {}) {
        //Constructor initialization
        Object.assign(this, values);
    }
}