import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {
  APP_BASE_HREF,
  LocationStrategy,
  HashLocationStrategy
} from "@angular/common";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { SidebarItemComponent } from "./sidebar-item/sidebar-item.component";
import { ExampleDef } from './example.mode';
import { AssetTypeListComponent } from './asset-type-list/asset-type-list.component';
import { AddAssetTypeComponent } from './add-asset-type/add-asset-type.component';
import { AgGridModule } from 'ag-grid-angular';
import { AssetSubTypeComponent } from './asset-sub-type/asset-sub-type.component';
import { RouterModule, Routes, Router } from "@angular/router";
import { UnitrateComponent } from './unitrate/unitrate.component';

export const examples: ExampleDef[] = [
  { label: "Intro", name: "Root", path: "", component: AppComponent },
  {
    label: "Asset Type",
    name: "Asset Type",
    path: "addAssetType",
    component: AddAssetTypeComponent
  },
  {
    label: "Asset Sub Type",
    name: "Asset Sub Type",
    path: "addAssetSubType",
    component: AssetSubTypeComponent
  }
];

const routes: Routes = [
  { path: "", component: AppComponent, pathMatch: "full" },
  { path: 'addAssetType', component: AddAssetTypeComponent, pathMatch: "full" },
  { path: 'addAssetSubType', component: AssetSubTypeComponent, pathMatch: "full" },

];
@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    SidebarItemComponent,
    AssetTypeListComponent,
    AddAssetTypeComponent,
    HeaderComponent,
    AssetSubTypeComponent,
    UnitrateComponent
  ],
  imports: [
    BrowserModule,
    AgGridModule.withComponents([]),
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
    HttpClientModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule
  ],
  providers: [
    { provide: APP_BASE_HREF, useValue: "/" },
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    { provide: "ExampleDefs", useValue: examples }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
