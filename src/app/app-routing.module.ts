import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssetSubTypeComponent } from './asset-sub-type/asset-sub-type.component';
import { AddAssetTypeComponent } from './add-asset-type/add-asset-type.component';

const routes: Routes = [
  { path: '', redirectTo: 'assetType', pathMatch: 'full' },
  { path: 'assetType', component: AddAssetTypeComponent },
  { path: 'addAssetSubType', component: AssetSubTypeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
