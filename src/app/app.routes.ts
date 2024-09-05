import { Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { AdminComponent } from './admin/admin.component';
import { AdminSpaceComponent } from './admin/admin-space/admin-space.component';

import { canActivate } from './auth.guard';

export const routes: Routes = [
    {path:"",
        component:UserComponent
    }, 
    {path:"admin", 
        component:AdminComponent, 
      
    },
    {
        path:"admin-space", 
        component:AdminSpaceComponent,
        canActivate:[canActivate]
    }
];
