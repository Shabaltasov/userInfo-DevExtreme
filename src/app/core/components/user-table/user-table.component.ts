import { Component, OnInit} from '@angular/core';
import {UserDataService} from '../services/user-data.service';
import {ISelectedFilters} from "../../interfaces/selected-filters";
import {IUser} from "../../interfaces/user";

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.scss']})
export class UserTableComponent implements OnInit {
  public users: IUser[] = [];
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
    this.getUsers();
  }

  public getUsers(): void {
    this.userDataService.getUsers(this.selectedFilters)
      .subscribe(users => {
        this.users = users;
      });
  }
}
