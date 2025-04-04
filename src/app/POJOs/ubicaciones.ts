export interface Ubicaciones {
    id: number;
    codigoUbicacion: string;
    descrip: string;
}

export class UbicacionesMap {
    get(data: any) {
        if (!data) {
            console.error('Error: data no está definido', data);
            return [];
        }
        let loc = data.map((val: any) => {
            return {
                id: val.id,
                codigoUbicacion: val.codigoUbicacion,
                descrip: val.descrip
            };
        });
        return loc;
    }
}
