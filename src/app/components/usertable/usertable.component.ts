import { User } from './../../models/user.model';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { UserDataSource } from '../../models/user.datasource';
import { MatMenu, MatMenuTrigger } from '@angular/material';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Component({
  selector: 'app-usertable',
  templateUrl: './usertable.component.html',
  styleUrls: ['./usertable.component.css']
})
export class UsertableComponent implements OnInit {
  dataSource = new UserDataSource(this.userService);
  displayedColumns = ['name', 'email', 'phone', 'company'];

  uniqueValues = new Set();

  constructor(private userService: UserService) { }
  ngOnInit() {}

  // set column value filter
  onColumnValueFilterChange(selectedValues) {
    console.log(selectedValues.length + ' = ' + selectedValues );
  }

  populateUniqueValues(colName) {
    this.uniqueValues.clear();
    const users = this.dataSource.connect();
    users.subscribe((result: User[]) => {
      result.forEach(aUser => {
        if (colName === 'name') {
          this.uniqueValues.add(aUser.name);
        } else if (colName === 'email') {
          this.uniqueValues.add(aUser.email);
        } else if (colName === 'company') {
          this.uniqueValues.add(aUser.company.name);
        }
        console.log(aUser.name);
      });
      console.log(result.length + ' - ' + this.uniqueValues.size);

    }), (
      console.log('error')
    );
  }
}


