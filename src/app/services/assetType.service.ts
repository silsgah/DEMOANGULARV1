import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AssetType } from '../models/assetType.model';

const baseUrl = 'http://localhost:8080/api/assetType';
@Injectable({
    providedIn: 'root'
})

export class AssetTypeService {

    constructor(private http: HttpClient) { }

    getAll(): Observable<AssetType[]> {
        return this.http.get<AssetType[]>(baseUrl);
    }

    get(id: any): Observable<AssetType> {
        return this.http.get(`${baseUrl}/${id}`);
    }

    create(data: any): Observable<any> {
        return this.http.post(baseUrl, data);
    }

    update(id: any, data: any): Observable<any> {
        return this.http.put(`${baseUrl}/${id}`, data);
    }

    delete(id: any): Observable<any> {
        return this.http.delete(`${baseUrl}/${id}`);
    }

    deleteAll(): Observable<any> {
        return this.http.delete(baseUrl);
    }

    findByTitle(title: any): Observable<AssetType[]> {
        return this.http.get<AssetType[]>(`${baseUrl}?title=${title}`);
    }
}