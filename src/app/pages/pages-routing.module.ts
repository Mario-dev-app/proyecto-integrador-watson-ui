import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CitasComponent } from './citas/citas.component';

const routes: Routes = [
    { path: 'citas', component: CitasComponent},
    { path: '', pathMatch: 'full', redirectTo: 'citas'}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PagesRoutingModule {}
