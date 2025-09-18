import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Mobile } from "./mobile";
import { AuthService } from "./services/auth.service";

@Injectable({
    providedIn: 'root'
})
export class MobileService {

    private baseUrl = 'http://localhost:8094/api/mobiles';

    constructor(private http: HttpClient,private authService: AuthService) { }
    
  private getAuthHeaders(): HttpHeaders {
    const token = this.authService.getToken();
    return new HttpHeaders({
      Authorization: `Bearer ${token}`  // pass token in header
    });
  }

    postMobile(formData: FormData) {
        return this.http.post(`${this.baseUrl}/postData`, formData, { headers: this.getAuthHeaders() });
    }
    getAllMobiles(): Observable<Mobile[]> {
        return this.http.get<Mobile[]>(`${this.baseUrl}/getAll`, { headers: this.getAuthHeaders() });
    }

    getMobilesByBrand(brand: string) {
        return this.http.get<Mobile[]>(`${this.baseUrl}/getBrandName/${brand}`, { headers: this.getAuthHeaders() });
    }

    getMobileById(id: number): Observable<Mobile> {
        return this.http.get<Mobile>(`${this.baseUrl}/getById/${id}`, { headers: this.getAuthHeaders() });
    }

    updateMobile(id: number, mobileData: FormData): Observable<any> {
        return this.http.put(`${this.baseUrl}/updateById/${id}`, mobileData, { headers: this.getAuthHeaders() });
    }

    deleteMobileById(id: number): Observable<any> {
        return this.http.delete(`${this.baseUrl}/deleteById/${id}`, { headers: this.getAuthHeaders() });
    }
}
