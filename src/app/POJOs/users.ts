export interface Users {
    id: number;
    nombre: string;
    apellidos: string;
    email: string;
    contrasenya: string;
    idRol: number;
    idDepartamento: number;
}

export class UsersMap {
    get(data: any) {
        console.log("ola?");
        if (!data) {
            console.error('Error: data no está definido', data);
            return [];
        }

        let loc = data.map((val: any) => {
            console.log(val.nombre);
            return {
                id: val.id,
                nombre: val.nombre,
                apellidos: val.apellidos,
                email: val.email,
                contrasenya: val.contrasenya,
                idRol: val.idRol,
                idDepartamento: val.idDepartamento,
            };
        });

        return loc;
    }
}


export class UsersSinMap {
    get(data: any) {
      if (data && data.id) {
        return {
  
          id: data.id,
          nombre: data.nombre,
          apellidos: data.apellidos,
          email: data.email,
          contrasenya: data.contrasenya,
          idRol: data.idRol,
          idDepartamento: data.idDepartamento,
  
        };
      }
      console.log("sin map");
      // Si no se recibe la estructura esperada, retorna un objeto vacío o maneja el error.
      console.error('Datos de ubicación de Sala no válidos:', data);
      return {} as Users; // Retorna un objeto vacío del tipo HousingLocation
    }
  }
  