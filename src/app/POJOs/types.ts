export interface Types {
  idType: number;
  name: string;
  descrip: string;
  idCategory: number;
}

export class TypesMap {
  get(data: any) {
    if (!data) {
      console.error('Error: data no está definido', data);
      return [];
    }

    let loc = data.map((val: any) => {

      return {
        idType: val.idType,
        name: val.name,
        descrip: val.descrip,
        idCategory: val.idCategory

      };
    });

    return loc;
  }
}

export class TypesSinMap {
  get(data: any) {
    if (data && Array.isArray(data) && data.length > 0) {
      return {
        idType: data[0].idType, // Accede al primer elemento del array
        name: data[0].name,
        descrip: data[0].descrip,
        idCategory: data[0].idCategory
      };
    }
    console.log("sin map");
    console.error('Datos de ubicación de Sala no válidos:', data);
    return {} as Types;
  }
}



//-------------------------------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------------------------------

