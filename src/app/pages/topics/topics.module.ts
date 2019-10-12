import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TopicsPage } from './topics.page';
import { TopicsRoutingModule } from './topics-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TopicsRoutingModule
  ],
  declarations: [TopicsPage]
})
export class TopicsPageModule { }
