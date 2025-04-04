export interface Categories {
  idCategory: number;
  name: string;
  descrip: string;
}



export class CategoriesMap {
  get(data: any) {
    if (!data) {
      console.error('Error: data no está definido', data);
      return [];
    }
    let loc = data.map((val: any) => {

      return {
        idCategory: val.idCategory,
        name: val.name,
        descrip: val.descrip,

      };
    });

    return loc;
  }
}
export class CategoriesSinMap {
  get(data: any) {
    if (data && Array.isArray(data) && data.length > 0) {
      return {
        idCategory: data[0].idCategory, // Accede al primer elemento del array
        name: data[0].name,
        descrip: data[0].descrip
      };
    }
    console.log("sin map");
    console.error('Datos de ubicación de Sala no válidos:', data);
    return {} as Categories;
  }
}
