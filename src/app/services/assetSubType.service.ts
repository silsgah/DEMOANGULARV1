import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AssetSubType } from '../models/assetSubType';


const baseUrl = 'http://localhost:8080/api/assetSubType';
@Injectable({
    providedIn: 'root'
})

export class AssetSubTypeService {

    constructor(private http: HttpClient) { }

    getAll(): Observable<AssetSubType[]> {
        return this.http.get<AssetSubType[]>(baseUrl);
    }

    get(id: any): Observable<AssetSubType> {
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

    findByTitle(title: any): Observable<AssetSubType[]> {
        return this.http.get<AssetSubType[]>(`${baseUrl}?title=${title}`);
    }
}