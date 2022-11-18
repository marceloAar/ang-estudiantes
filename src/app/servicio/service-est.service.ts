import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


//const API_BASE = "http://localhost:8080";

@Injectable({
  providedIn: 'root'
})
export class ServiceEstService {

  constructor(
    private http: HttpClient
  ) { }


  getAll(){
    return this.http.get('http://localhost:8080/api/v1/estudiantes');
  }

  //create(estudiante: any){
  //  return this.http.post('${API_BASE}/api/v1/estudiantes', estudiante);
  //}

  //update(id: string, estudiante:any){
  //  return this.http.put('${API_BASE}/api/v1/estudiantes/${id}', estudiante);
  //}

  //delete(id: string){
  //  return this.http.delete('${API_BASE}/api/v1/estudiantes/${id}');
  //}

}
