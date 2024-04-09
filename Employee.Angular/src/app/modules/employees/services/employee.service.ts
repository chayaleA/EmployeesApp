import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Employee } from "../models/employee.model";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable()
export class EmployeeService {

    constructor(private _http: HttpClient) {
    }

    getAllEmployees(): Observable<Employee[]> {
        const token = localStorage.getItem("accessToken");
        const headers = new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        });
        return this._http.get<Employee[]>("https://employees-net.onrender.com/api/Employee", { headers: headers });
    }

    getEmplyeeById(employeeId: string): Observable<Employee> {
        const token = localStorage.getItem("accessToken");
        const headers = new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        });
        return this._http.get<Employee>(`https://employees-net.onrender.com/api/Employee/${employeeId}`, { headers: headers });
    }

    addEmployee(employee: Employee): Observable<boolean> {
        const token = localStorage.getItem("accessToken");
        const headers = new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        });
        return this._http.post<boolean>("https://employees-net.onrender.com/api/Employee/", employee, { headers: headers });
    }

    updateEmployee(updateEmployee: Employee, id: number): Observable<boolean> {
        const token = localStorage.getItem("accessToken");
        const headers = new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        });
        return this._http.put<boolean>("https://employees-net.onrender.com/api/Employee/" + id, updateEmployee, { headers: headers });
    }

    deleteEmployee(id: number): Observable<boolean> {
        const token = localStorage.getItem("accessToken");
        const headers = new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        });
        return this._http.delete<boolean>("https://employees-net.onrender.com/api/Employee/" + id, { headers: headers });
    }
}