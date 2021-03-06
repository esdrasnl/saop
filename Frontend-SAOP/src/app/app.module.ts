import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ChartsModule, ThemeService } from 'ng2-charts';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VisualizacionComponent } from './components/visualizacion/visualizacion.component';
import { HomeComponent } from './components/home/home.component';
import { FormsModule } from '@angular/forms';
import {  HttpClientModule} from '@angular/common/http';
import {CursoService} from './services/curso.service';
import { LoginComponent } from './components/login/login.component';
import { PrincipalComponent } from './components/principal/principal.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { RegistroComponent } from './components/registro/registro.component';
import { VisualizacionPensumComponent } from './components/visualizacion-pensum/visualizacion-pensum.component';
import { CursosGanadosComponent } from './components/cursos-ganados/cursos-ganados.component';
import { CreditosComponent } from './components/creditos/creditos.component';

@NgModule({
  declarations: [
    AppComponent,
    VisualizacionComponent,
    HomeComponent,
    LoginComponent,
    PrincipalComponent,
    PerfilComponent,
    RegistroComponent,
    VisualizacionPensumComponent,
    CursosGanadosComponent,
    CreditosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ChartsModule
  ],
  providers: [
    CursoService,
    ThemeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
