import { Routes } from "@angular/router";
import { ErrorsComponent } from './components/errors/errors.component';
import { AddPostComponent } from './testAngular/add-post/add-post.component';
import { ListPostComponent } from './testAngular/list-post/list-post.component';
import { UpDateComponent } from './testAngular/up-date/up-date.component';
// import { LoginComponent } from './login/login.component';
// import { RegisterComponent } from './register/register.component';

const appRoutes: Routes = [
    {path:'',
     component:AddPostComponent

    },
    {path:'listPost',
     component:ListPostComponent

    },
    {path:'addPost',
     component:AddPostComponent
    },

    {path:'listPost/update/:titre',
     component:UpDateComponent

    },
    // {
    //     path: '**',
    //     component: ErrorsComponent   
    //   }
];
export default appRoutes;