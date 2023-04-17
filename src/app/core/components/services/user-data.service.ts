import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import { Observable} from 'rxjs';
import {ISelectedFilters} from "../../interfaces/selected-filters";
import {IUser} from "../../interfaces/user";
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {
  private apiUrl = 'https://randomuser.me/api/?results=100&seed=seed';
  constructor(private http: HttpClient) {
  }

  public getUsers(selectedFilters: ISelectedFilters): Observable<IUser[]> {
    const params = this.buildParams(selectedFilters);
    let filterFunction: (user: IUser) => boolean = () => true;
    const genderFilter = localStorage.getItem('gender');
    const cityFilter = localStorage.getItem('city');
    const streetFilter = localStorage.getItem('street');
    const emailFilter = localStorage.getItem('email');
    const phoneFilter = localStorage.getItem('phone');
    if (genderFilter === 'true') {
      filterFunction = (user: IUser) => user.gender === 'male';
    }
    if (cityFilter === 'true') {
      filterFunction = (user: IUser) => user.location.city === 'Madison';
    }
    if (streetFilter === 'true') {
      filterFunction = (user: IUser) => user.location.street.name === 'Rua da Saudade';
    }
    if (emailFilter === 'true') {
      filterFunction = (user: IUser) => user.email === 'edi.lopes@example.com';
    }
    if (phoneFilter === 'true') {
      filterFunction = (user: IUser) => user.phone === '016977 2412';
    }

    return this.http.get<any>(this.apiUrl, {params})
      .pipe(
        map(response => response.results),
        map(users => this.applyFilters(users)),
        map(users => users.filter(filterFunction))
      );
  }

  private applyFilters(users: IUser[]): IUser[] {
    console.log(users)
    return users;
  }

  private buildParams(selectedFilters: ISelectedFilters): HttpParams {
    let params = new HttpParams();
    if (selectedFilters.gender) {
      params = params.set('gender', selectedFilters.gender);
    }
    if (selectedFilters.city) {
      params = params.set('city', selectedFilters.gender);
    }
    if (selectedFilters.street) {
      params = params.set('street', selectedFilters.gender);
    }
    if (selectedFilters.email) {
      params = params.set('email', selectedFilters.gender);
    }
    if (selectedFilters.phone) {
      params = params.set('phone', selectedFilters.gender);
    }
    return params;
  }
}

