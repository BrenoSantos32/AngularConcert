import { ModuleWithProviders } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { ListaComponent } from './lista/lista.component';
import { Teste1Component } from './teste1/teste1.component';
import { Teste2Component } from './teste2/teste2.component';

const APP_ROUTES: Routes = [
    {path: '', component: LoginComponent},
    {path: 'lista', component: ListaComponent},
    {path: 'cadastro', component: CadastroComponent},
    {path: 'teste1', component: Teste1Component},
    {path: 'teste2', component: Teste2Component}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);

declare module "@angular/core" {
    interface ModuleWithProviders<T = any> {
        ngModule: Type<T>;
        providers?: Provider[];
    }
}