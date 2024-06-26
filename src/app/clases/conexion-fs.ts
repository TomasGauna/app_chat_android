import { Firestore, addDoc, collection, query, orderBy, getDocs } from '@angular/fire/firestore';

export class ConexionFs 
{
    static guardarFs(col: string, usuario: string, mensaje: string, firestore: Firestore)
    {
        let options : any = { timeZone: 'America/Argentina/Buenos_Aires'};
        let fechaHora = new Date().toLocaleString('es-AR', options);
        let params = {usuario: usuario, fecha: fechaHora, mensaje: mensaje};
        
        let coleccion = collection(firestore, col);
        
        addDoc(coleccion, params);

        return params;
    }

    static async traerFs(col: string, firestore: Firestore)
    {
        const colRef = collection(firestore, col);
        const q = query(colRef, orderBy('fecha'));

        try 
        {
            const querySnapshot = await getDocs(q);
            const data: any[] = [];

            querySnapshot.forEach((doc) => {
                data.push(doc.data());
            });

            return data;
        } 
        catch (error) 
        {
            console.error('Error al obtener datos de Firestore:', error);
            throw error;
        }
    }
}
