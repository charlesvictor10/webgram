import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AgentComponent } from './agent/agent.component';
import { RoleComponent } from './role/role.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'agent', component: AgentComponent},
  {path: 'profil', component: RoleComponent},
  {path: '**', redirectTo: "/login", pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
