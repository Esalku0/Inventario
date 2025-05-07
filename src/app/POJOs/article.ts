export interface Articles {
  id: number;
  nombre: string;
  descrip:string;
  idCategoria: number;
  idTipo: number;
  idProyecto: string;
  stock: number | undefined;
  modelo: string | undefined;
  longitud: number | undefined;
  diametro: number | undefined;
  peso: number | undefined;
  altura: number | undefined;
  materiales: string | undefined;
  unidadMedida: string | undefined;
  condicion: string | undefined;
  color: string | undefined;
  numSerie: number | undefined;
  marca: string | undefined;
  detalles: string | undefined;
  imagen:string|undefined;
  precio: number|undefined;
  dateCreation: Date|undefined;
  userCreation: string;
}

export class ArticlesMap {
  get(data: any) {
    if (!data) {
      console.error('Error: data no está definido', data);
      return [];
    }
    let loc = data.map((val: any) => {
      return {
        id: val.id,
        nombre: val.nombre,
        descrip:val.descrip,
        idCategoria: val.idCategoria,
        idTipo: val.idTipo,
        idProyecto: val.idProyecto,
        stock: val.stock,
        modelo: val.modelo,
        longitud: val.longitud,
        diametro: val.diametro,
        peso: val.peso,
        altura: val.altura,
        materiales: val.materiales,
        unidadMedida: val.unidadMedida,
        condicion: val.condicion,
        color: val.color,
        numSerie: val.numSerie,
        marca: val.marca,
        detalles: val.detalles,
        imagen:val.imagen,
        precio:val.precio,
        dateCreation: val.dateCreation,
        userCreation: val.userCreation,
      };
    });
    return loc;
  }
}

export class ArticulosSinMap {
  get(data: any) {
    if (data && Array.isArray(data) && data.length > 0) {
      return {
        id: data[0].id, // Accede al primer elemento del array
        nombre: data[0].nombre,
        descrip:data[0].descrip,
        idCategoria: data[0].idCategoria,
        idTipo: data[0].idTipo,
        idProyecto: data[0].idProyecto,
        stock: data[0].stock,
        modelo: data[0].modelo,
        longitud: data[0].longitud,
        diametro: data[0].diametro,
        peso: data[0].peso,
        altura: data[0].altura,
        materiales: data[0].materiales,
        unidadMedida: data[0].unidadMedida,
        condicion: data[0].condicion,
        color: data[0].color,
        numSerie: data[0].numSerie,
        marca: data[0].marca,
        detalles: data[0].detalles,
        imagen:data[0].imagen,
        precio:data[0].precio,
        dateCreation: data[0].dateCreation,
        userCreation: data[0].userCreation,
      };
    }
    console.log("sin map");
    console.error('Datos de ubicación de Sala no válidos:', data);
    return {} as Articles;
  }
}
