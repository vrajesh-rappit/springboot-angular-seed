import { RouterModule, RouterOutlet, Routes } from '@angular/router';
import { MessageComponent } from './message/message.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

export const routes: Routes = [
    {
        path: 'user-profile',
        component: UserProfileComponent
    },
    {
        path: 'message',
        component: MessageComponent
    }
];


@NgModule({
    declarations: [
        MessageComponent,
        UserProfileComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule,
        MessageComponent,
        UserProfileComponent
    ]
})
export class AppRoutingModule { }
