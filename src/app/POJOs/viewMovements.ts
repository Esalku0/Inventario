export interface ViewMovements {
  id:number;
  idArticle: number;
  din: string;
  entryDate: Date | undefined;
  consumptionDate: Date | undefined;
  removedBy: string | undefined;
  quantityRemoved: number;
  material: string;
  characteristics: string;
  model: string;
  stock: number;
  location: string;
  reserved: number;
  quantityToOrder: number;
  extraRequest: string;
  quantityEntry:number;
}
   

export class viewMovementsMap {
  get(data: any) {
    if (!data) {
      console.error('Error: data no está definido', data);
      return [];
    }
    
    let loc = data.map((val: any) => {

      return {
        id: val.id,  
        idArticle: val.idArticle,
        din: val.din,
        entryDate: val.entryDate,
        consumptionDate: val.consumptionDate,
        removedBy: val.removedBy,
        quantityRemoved: val.quantityRemoved,
        material: val.material,
        characteristics: val.characteristics,
        model: val.model,
        stock: val.stock,
        location: val.location,
        reserved: val.reserved,
        quantityToOrder: val.quantityToOrder,
        extraRequest: val.extraRequest,
        quantityEntry:val.quantityEntry

      };
    });
    
    return loc;
  }
}