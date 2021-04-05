import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Teste1Component } from './teste1/teste1.component';
import { Teste2Component } from './teste2/teste2.component';
import { routing } from './app.routing';
import { LoginComponent } from './login/login.component';
import { CadastroComponent } from './cadastro/cadastro.component';

import { HttpClientModule } from '@angular/common/http';
import { ListaComponent } from './lista/lista.component';



@NgModule({
  declarations: [
    AppComponent,
    Teste1Component,
    Teste2Component,
    LoginComponent,
    CadastroComponent,
    ListaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    routing
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
