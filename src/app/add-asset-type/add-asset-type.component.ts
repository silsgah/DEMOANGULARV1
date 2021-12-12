import { Component, OnInit } from '@angular/core';
import { AssetType } from '../models/assetType.model';
import { AssetTypeService } from '../services/assetType.service';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ColDef, ColumnApi, GridApi, GridOptions } from 'ag-grid-community';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-asset-type',
  templateUrl: './add-asset-type.component.html',
  styleUrls: ['./add-asset-type.component.css']
})
export class AddAssetTypeComponent implements OnInit {
  asset_Type: AssetType = {
    title: '',
    description: '',
    id: ''
  }
  public gridOptions: GridOptions;
  assetTypeData: AssetType[] = [];
  form: FormGroup;
  title: AbstractControl;
  description: AbstractControl;
  submitted: boolean = false;
  addsubmitted: boolean = false;
  updatesubmitted: boolean = false;
  submittedControl: boolean = false;
  get assetType() {
    return this.form.get("assetType");
  }
  get assetTypeDescription() {
    return this.form.get("assetDescription");
  }

  constructor(private toastr: ToastrService, private assetTypeService: AssetTypeService, fb: FormBuilder) {
    this.form = new FormGroup({
      'assetType': new FormControl('', [Validators.required, Validators.minLength(3)]),
      'assetDescription': new FormControl('', [Validators.required, Validators.minLength(10)])
    });
    this.title = this.form.controls['assetType'];
    this.description = this.form.controls['assetDescription'];

    this.gridOptions = <GridOptions>{
      context: this,
      rowSelection: 'single',
      sortable: true,
      filter: true,
      resizable: true,
      headerHeight: 100,
      onSelectionChanged: (event) => this.onSelectionChanged()
    }
  }
  ngOnInit(): void {
    this.retrieveAssetType();
  }
  retrieveAssetType(): void {
    this.assetTypeService.getAll()
      .subscribe(
        data => {
          this.assetTypeData = data;
        },
        error => {
          console.log(error);
        });
  }
  saveAssetType(): void {
    const data = {
      title: this.title.value,
      description: this.description.value
    };
    this.assetTypeService.create(data)
      .subscribe(
        response => {
          this.submitted = false;
          this.toastr.success('Asset Type Added', 'Success');
          this.retrieveAssetType();
        },
        error => {
          this.toastr.error('Unable to add request', 'Error');
        });
  }
  updateAssetType(): void {
    const updatedata = {
      title: this.title.value,
      description: this.description.value
    };
    console.log(updatedata);
    this.assetTypeService.update(this.asset_Type.id, updatedata)
      .subscribe(
        response => {
          this.submitted = false;
          this.toastr.success('Asset Type Updated', 'Success');
          this.retrieveAssetType();
        },
        error => {
          this.toastr.error('Unable to update request', 'Error');
        });
  }
  deleteAssetType(): void {
    this.assetTypeService.delete(this.asset_Type.id)
      .subscribe(
        response => {
          this.submitted = false;
          this.toastr.success('Asset Type Deleted', 'Success');
          this.retrieveAssetType();
        },
        error => {
          this.toastr.error('Unable to delete request', 'Error');
        });
  }
  cancelAssetType(): void {
    this.submitted = false;
    this.asset_Type = {
      title: '',
      description: ''
    };
  }
  newAssetType(): void {
    this.submitted = true;
    this.submittedControl = false;
    this.addsubmitted = true;
    this.updatesubmitted = false;
    this.asset_Type = {
      title: '',
      description: '',
      id: ''
    };
  }
  private gridApi!: GridApi;
  private columnApi!: ColumnApi;
  onGridReady({ api }: { api: GridApi }) {
    api.sizeColumnsToFit();
    this.gridApi = api;
  }
  onSelectionChanged() {
    const selectedRows = this.gridApi.getSelectedRows();
    var row = this.gridApi.getSelectedRows();
    this.form.controls['assetType'].setValue(selectedRows[0].title);
    this.form.controls['assetDescription'].setValue(selectedRows[0].description);
    this.asset_Type.id = selectedRows[0].id
    this.submitted = true;
    this.submittedControl = false;
    this.addsubmitted = false;
    this.updatesubmitted = true;
  }
  onDeselectAll(): void {
    this.gridApi.deselectAll();
  }
  onToggleDetialsColumn(): void {
    const detailsColumn = this.columnApi.getColumn('make');
    this.columnApi.setColumnVisible('make', !detailsColumn?.isVisible())
  }
  columnDefs: ColDef[] = [
    { headerName: 'Id', field: 'id', width: 90, sortable: true, colId: 'id', checkboxSelection: true, headerCheckboxSelection: true },
    { headerName: 'Asset Type', field: 'title', width: 200, sortable: true, colId: 'title' },
    { headerName: 'Description', field: 'description', width: 400, sortable: true }
  ];
}
