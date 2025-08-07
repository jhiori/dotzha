import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DataRawPathJsonFile } from '../global.params/global.params';
import { DataCo } from '../interfaces/companies.interface';

@Injectable({
  providedIn: 'root'
})
export class CompaniesDataService {
  private dataFileCo = DataRawPathJsonFile.DATA_FILE_CO
  
  constructor(private http: HttpClient) { }

  getCompanies(): Observable<any[]>{
    return this.http.get<DataCo[]>(this.dataFileCo)
  }
}
