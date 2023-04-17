import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {ISelectedFilters} from "../../interfaces/selected-filters";
import {UserDataService} from "../services/user-data.service";


@Component({
  selector: 'app-table-filter',
  templateUrl: './table-filter.component.html',
  styleUrls: ['./table-filter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class TableFilterComponent implements OnInit {
  public selectedFilters: ISelectedFilters = {
    gender: false,
    city: false,
    street: false,
    email: false,
    phone: false
  };

  constructor(private userDataService: UserDataService) {
  }

  ngOnInit() {
    this.getLocalStorageData();
  }

  public onGenderChange(): void {
    this.selectedFilters.gender = !this.selectedFilters.gender;
    localStorage.setItem('gender', JSON.stringify(this.selectedFilters.gender));
    this.userDataService.getUsers(this.selectedFilters)
  }

  public onCityChange(): void {
    this.selectedFilters.city = !this.selectedFilters.city;
    localStorage.setItem('city', JSON.stringify(this.selectedFilters.city));

  }

  public onStreetChange(): void {
    this.selectedFilters.street = !this.selectedFilters.street;
    localStorage.setItem('street', JSON.stringify(this.selectedFilters.street));

  }

  public onEmailChange(): void {
    this.selectedFilters.email = !this.selectedFilters.email;
    localStorage.setItem('email', JSON.stringify(this.selectedFilters.email));
  }

  public onPhoneChange(): void {
    this.selectedFilters.phone = !this.selectedFilters.phone;
    localStorage.setItem('phone', JSON.stringify(this.selectedFilters.phone));
  }

  public getLocalStorageData(): void {
    const gender = localStorage.getItem('gender');
    if (gender) {
      this.selectedFilters.gender = JSON.parse(gender);
    }
    const city = localStorage.getItem('city');
    if (city) {
      this.selectedFilters.city = JSON.parse(city);
    }
    const street = localStorage.getItem('street');
    if (street) {
      this.selectedFilters.street = JSON.parse(street);
    }
    const email = localStorage.getItem('email');
    if (email) {
      this.selectedFilters.email = JSON.parse(email);
    }
    const phone = localStorage.getItem('phone');
    if (phone) {
      this.selectedFilters.phone = JSON.parse(phone);
    }
  }

}

