import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { z } from 'zod';

import { DashboardDataSchema } from '../dashboard.constants';


@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

  private http = inject(HttpClient);

  dashboardData = DashboardDataSchema;

  constructor() {
    this.getDashboardData();
  }

  getDashboardData(): void {
    const url = 'https://freeapi.miniprojectideas.com/api/HospitalAppointment/GetDashboardData'
    this.http.get(url).subscribe({
      next: (result:any) => {
        console.log(result)
      this.dashboardData = result['data'];
      },
      error: err => {
        console.log(err)
      }
    })
  }

}
