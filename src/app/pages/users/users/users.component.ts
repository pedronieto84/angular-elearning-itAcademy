import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { User } from 'src/app/interfaces/interfaces';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Observable, Subscription } from 'rxjs';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.sass'],
})
export class UsersComponent implements OnInit, AfterViewInit {
  user: User[] = [];
  displayedColumns: string[] = ['userId', 'userName', 'userScore', 'email'];

  dataSource: MatTableDataSource<User> = new MatTableDataSource(this.user);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService
      .getUsers()
      .subscribe((resp) => (this.dataSource.data = resp as User[]));
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
