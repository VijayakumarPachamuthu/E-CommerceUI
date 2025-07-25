import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Mobile } from "./mobile";

@Injectable({
    providedIn: 'root'
})
export class MobileService {

    private baseUrl = 'http://localhost:8094/api/mobiles';


    constructor(private http: HttpClient) { }

    postMobile(formData: FormData) {
        return this.http.post(`${this.baseUrl}/postData`, formData);
    }
    getAllMobiles(): Observable<Mobile[]> {
        return this.http.get<Mobile[]>(`${this.baseUrl}/getAll`);
    }

    getMobilesByBrand(brand: string) {
        return this.http.get<Mobile[]>(`${this.baseUrl}/getBrandName/${brand}`);
    }

    getMobileById(id: number): Observable<Mobile> {
        return this.http.get<Mobile>(`${this.baseUrl}/getById/${id}`);
    }

    updateMobile(id: number, mobileData: FormData ): Observable<any> {
        return this.http.put(`${this.baseUrl}/updateById/${id}`, mobileData);
    }

    deleteMobileById(id: number): Observable<any> {
        return this.http.delete(`${this.baseUrl}/deleteById/${id}`);
    }
}
