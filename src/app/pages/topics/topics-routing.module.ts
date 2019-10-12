import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TopicsPage } from './topics.page';

const routes: Routes = [
    {
        path: '',
        component: TopicsPage,
        children: [
            {
                path: 'addition', loadChildren: './addition/addition.module#AdditionPageModule'
            },
            {
                path: 'subtraction', loadChildren: './subtraction/subtraction.module#SubtractionPageModule'
            },
            {
                path: '',
                redirectTo: 'addition',
                pathMatch: 'full'
            }
        ]
    },
    {
        path: '',
        redirectTo: 'addition',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class TopicsRoutingModule { }