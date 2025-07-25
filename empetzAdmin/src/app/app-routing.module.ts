import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { AuthGuard } from './core/auth.guard';

const routes: Routes = [
  
  {path:'',loadChildren:()=>import('./auth/auth.module').then(m=>m.AuthModule)},
  {path:'admin',loadChildren:()=>import('./admin/admin.module').then(m=>m.AdminModule)}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
