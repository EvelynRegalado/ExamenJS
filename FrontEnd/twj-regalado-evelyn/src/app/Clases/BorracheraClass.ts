/**
 * Created by Pc Xtreme on 15/06/2017.
 */
export class BorracheraClass{

  constructor(public id?:number,
              public motivo?:string,
              public latitudDondeEmpezo?:number,
              public longitudDondeEmpezo?:number,
              public createdAt?:Date,
              public updateAt?:Date){
    this.motivo=motivo;
  }
}
