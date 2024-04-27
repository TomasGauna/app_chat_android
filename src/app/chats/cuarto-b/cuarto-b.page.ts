import { Component, OnInit } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import { ConexionFs } from 'src/app/clases/conexion-fs';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-cuarto-b',
  templateUrl: './cuarto-b.page.html',
  styleUrls: ['./cuarto-b.page.scss'],
})
export class CuartoBPage implements OnInit {
  email = this.auth.get_email();
  mensaje = '';
  mensajesCargados: any;

  constructor(private firestore: Firestore, private auth: AuthService) {}

  ngOnInit() 
  {
    ConexionFs.traerFs('pps-4b', this.firestore).then((data)=>
    {
      this.mensajesCargados = data;
      console.log(this.mensajesCargados);
    });

    this.email = this.auth.get_email();
  }

  enviar()
  {
    let params = ConexionFs.guardarFs('pps-4b', this.email, this.mensaje, this.firestore);

    this.mensajesCargados.push(params);

    this.mensaje = '';
  }

  esUsuarioLogueado(usuario: string): boolean 
  {
    return usuario === this.email;
  }
}
