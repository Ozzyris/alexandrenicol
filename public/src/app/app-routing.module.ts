import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// =============================================================================
// VIEWS
// =============================================================================
import { HomeComponent } from './views/home/home.component';


// =============================================================================
// ROUTES
// =============================================================================
const routes: Routes = [
	{ path: 'home', component: HomeComponent, data: { title: 'Alexandre Nicol' } },
	{ path: '',   redirectTo: 'home', pathMatch: 'full' },
]

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})


export class AppRoutingModule { }
