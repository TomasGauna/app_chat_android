import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  mostrarSpinner = false;
  mensajeError = '';

  constructor(private router: Router, private auth: AuthService) { }

  ngOnInit() {
  }

  entrarChat(chat: string)
  {
    this.mostrarSpinner = true;
    setTimeout(()=>{
      if(chat === 'a')
      {
        this.router.navigate(['/cuarto-a']);
      }
      else
      {
        this.router.navigate(['/cuarto-b']);
      }
      this.mostrarSpinner = false;
    }, 2000);
  }

  cerrarSesion()
  {
    this.mostrarSpinner = true;
    this.auth.logout()
      ?.then(() =>
      {
        console.log("redireccionando...");
        setTimeout(()=>{
          this.mostrarSpinner = false;
          this.router.navigate(['/login']);
        }, 1500);
      })
      .catch(error =>
      {
        setTimeout(()=>{
          this.mensajeError = error;
        }, 1500);
      });
  }
}
