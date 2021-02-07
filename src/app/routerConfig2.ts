import { Routes } from "@angular/router";
import { ErrorsComponent } from './components/errors/errors.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const appRoutes: Routes = [
    {path:'login',
     component:LoginComponent
    },

    {path:'register',
     component:RegisterComponent

    },
    {
        path: '**',
        component: ErrorsComponent   
      }
];
export default appRoutes;