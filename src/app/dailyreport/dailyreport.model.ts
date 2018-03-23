export class Report{
    constructor(public date:Date,        
        public Greenhouse:string,
        public itemRows:{  description:string,
                    manpower:number,
                    remarks:string}[],
        public _id?:any,
       ){

    }
}