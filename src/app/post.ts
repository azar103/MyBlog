export class Post {
  create_at: Date;
  constructor(public title:string,
             public content:string,
             public likes:number)
             { this.create_at = new Date();}

}
