export interface Proyectos {
    idProyecto: number;
    nombre: string;
    descrip: string;
    cliente: string;
    estado:string;
}

export class ProyectosMap {
    get(data: any) {
        if (!data) {
            console.error('Error: data no está definido', data);
            return [];
        }
        let loc = data.map((val: any) => {

            return {
                idProyecto: val.idProyecto,
                nombre: val.nombre,
                descrip: val.descrip,
                cliente: val.cliente,
                estado: val.estado

            };
        });
        return loc;
    }
}
