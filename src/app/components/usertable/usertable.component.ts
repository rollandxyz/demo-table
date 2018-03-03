import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

import { User } from '../../models/user.model';
import { UserDataSource } from '../../models/user.datasource';
import { MatMenu, MatMenuTrigger } from '@angular/material';

@Component({
  selector: 'app-usertable',
  templateUrl: './usertable.component.html',
  styleUrls: ['./usertable.component.css']
})
export class UsertableComponent implements OnInit {
  dataSource = new UserDataSource(this.userService);
  displayedColumns = ['name', 'email', 'phone', 'company'];

  constructor(private userService: UserService) { }
  ngOnInit() {}

  onColumnValueFilterChange(selectedValues) {
    console.log(selectedValues.length + ' = ' + selectedValues );
  }
}


