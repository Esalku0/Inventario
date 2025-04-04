export interface Departamentos {
    idDepartamento: number;
    nombre: string;
    descrip: string;
}

export class DepartamentosMap {
    get(data: any) {
        if (!data) {
            console.error('Error: data no está definido', data);
            return [];
        }

        let loc = data.map((val: any) => {

            return {
                idDepartamento: val.idDepartamento,
                nombre: val.nombre,
                descrip: val.descrip
            };
        });
        console.log(loc.nombre);
        return loc;
    }
}

export class DepartamentosSinMap {
    get(data: any) {
        if (data && Array.isArray(data) && data.length > 0) {
            return {
                idDepartamento: data[0].idDepartamento, // Accede al primer elemento del array
                nombre: data[0].nombre,
                descrip: data[0].descrip
            };
        }
        console.log("sin map");
        console.error('Datos de ubicación de Sala no válidos:', data);
        return {} as Departamentos; 
    }
}
