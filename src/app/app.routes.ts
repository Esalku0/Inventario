import { inject } from '@angular/core';
import { Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { HomeComponent } from './app/app.component';
import { ArticlesComponent } from './articles/articles.component';
import { CategoriesComponent } from './categories/categories.component';
import { TypesComponent } from './types/types.component';
import { AddArticleComponent } from './add-article/add-article.component';
import { ViewMovementsComponent } from './view-movements/view-movements.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ControlStockComponent } from './control-stock/control-stock.component';
import { UbicacionesComponent } from './ubicaciones/ubicaciones.component';
import { ProyectosComponent } from './proyectos/proyectos.component';

export const routes: Routes = [
  { path: '', component: LoginComponent, title: 'login' },
  { path: 'home', component: HomeComponent, title: 'Home', canActivate: [() => inject(AuthGuard).estaLogeado()] },
  { path: 'login', component: LoginComponent, title: 'login' },
  { path: 'viewArticles', component: ArticlesComponent, title: 'Ver Articulos',canActivate: [() => inject(AuthGuard).estaLogeado()] },
  { path: 'viewMovements/:id', component: ViewMovementsComponent, title: 'Movimiento del articulo `${id}` ',canActivate: [() => inject(AuthGuard).estaLogeado()] },
  { path: 'AddArticle', component: AddArticleComponent, title: 'Añadir Articulos', canActivate: [() => inject(AuthGuard).logeadoYadmin()] },
  { path: 'AddCategory', component: CategoriesComponent, title: 'Añadir Categorias', canActivate: [() => inject(AuthGuard).logeadoYadmin()] },
  { path: 'AddType', component: TypesComponent, title: 'Añadir Tipos', canActivate: [() => inject(AuthGuard).logeadoYadmin()] },
  { path: 'registerUser', component: RegisterComponent, title: 'Registro Usuario', canActivate: [() => inject(AuthGuard).logeadoYadmin()] },
  { path: 'controlStock', component: ControlStockComponent, title: 'Gestionar Stock', canActivate: [() => inject(AuthGuard).logeadoYadmin()] },
  { path: 'AddUbicacion', component: UbicacionesComponent, title: 'Añadir Ubicaciones', canActivate: [() => inject(AuthGuard).logeadoYadmin()] },
  { path: 'AddProyecto', component: ProyectosComponent, title: 'Añadir Proyectos', canActivate: [() => inject(AuthGuard).logeadoYadmin()] }
];
