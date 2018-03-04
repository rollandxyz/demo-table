import { DataSource } from '@angular/cdk/collections';
import { User } from './user.model';
import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

export class UserDataSource extends DataSource<any> {
    constructor(private userService: UserService) {
      super();
    }
    connect(): Observable<User[]> {
      return this.userService.getUser();
    }
    disconnect() {}
}
