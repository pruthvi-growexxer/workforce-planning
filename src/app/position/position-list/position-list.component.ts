import { Component, ViewChild, Inject, PLATFORM_ID } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Chart, ChartConfiguration } from 'chart.js';
import { isPlatformBrowser } from '@angular/common';

export interface EmployeePosition {
  designation: string;
  department: string;
  budget: string;
  location: string;
  updatedBy: string;
  lastUpdated: string;
  action: string;
}

// Row Data Interface
interface IRow {
  make: string;
  model: string;
  price: number;
  electric: boolean;
}

@Component({
  selector: 'app-position-list',
  templateUrl: './position-list.component.html',
  styleUrl: './position-list.component.scss',
})
export class PositionListComponent {
  themeClass = 'ag-theme-alpine';

  columnDefs: any = [
    {
      headerName: 'Designation',
      field: 'designation',
      sortable: true,
      filter: false,
      resizable: true,
    },
    {
      headerName: 'Department',
      field: 'department',
      sortable: true,
      filter: false,
      resizable: true,
    },
    {
      headerName: 'Budget',
      field: 'budget',
      sortable: true,
      filter: false,
      resizable: true,
    },
    {
      headerName: 'Location',
      field: 'location',
      sortable: true,
      filter: false,
      resizable: true,
    },
    {
      headerName: 'Last Updated',
      field: 'lastUpdated',
      sortable: true,
      filter: false,
      resizable: true,
    },
    {
      headerName: 'Action',
      field: 'action',
      sortable: true,
      filter: false,
      resizable: true,
    },
  ];

  rowData: EmployeePosition[] = [
    {
      designation: 'HR',
      department: 'Others',
      budget: '₹8L',
      location: 'Ahmedabad',
      updatedBy: 'Pruthvi Dhamecha',
      lastUpdated: 'Sep 6, 2022, 7:05pm',
      action: ''
    },
    {
      designation: 'UI Designer',
      department: 'Product',
      budget: '₹10L',
      location: 'Ahmedabad',
      updatedBy: 'Pruthvi Dhamecha',
      lastUpdated: 'Sep 6, 2022, 7:05pm',
      action: ''
    },
    {
      designation: 'Architect',
      department: 'Engineering',
      budget: '₹8L',
      location: 'Ahmedabad',
      updatedBy: 'Pruthvi Dhamecha',
      lastUpdated: 'Sep 6, 2022, 7:05pm',
      action: ''
    },
    {
      designation: 'Chief Legal Officer',
      department: 'Others',
      budget: '₹26L',
      location: 'Ahmedabad',
      updatedBy: 'Pruthvi Dhamecha',
      lastUpdated: 'Sep 6, 2022, 7:05pm',
      action: ''
    },
    {
      designation: 'Vice President',
      department: 'Product',
      budget: '₹35L',
      location: 'Ahmedabad',
      updatedBy: 'Pruthvi Dhamecha',
      lastUpdated: 'Sep 6, 2022, 7:05pm',
      action: ''
    },
    {
      designation: 'HR',
      department: 'Others',
      budget: '₹8L',
      location: 'Ahmedabad',
      updatedBy: 'Pruthvi Dhamecha',
      lastUpdated: 'Sep 6, 2022, 7:05pm',
      action: ''
    },
    {
      designation: 'UI Designer',
      department: 'Product',
      budget: '₹10L',
      location: 'Ahmedabad',
      updatedBy: 'Pruthvi Dhamecha',
      lastUpdated: 'Sep 6, 2022, 7:05pm',
      action: ''
    },
    {
      designation: 'Architect',
      department: 'Engineering',
      budget: '₹8L',
      location: 'Ahmedabad',
      updatedBy: 'Pruthvi Dhamecha',
      lastUpdated: 'Sep 6, 2022, 7:05pm',
      action: ''
    },
    {
      designation: 'Chief Legal Officer',
      department: 'Others',
      budget: '₹26L',
      location: 'Ahmedabad',
      updatedBy: 'Pruthvi Dhamecha',
      lastUpdated: 'Sep 6, 2022, 7:05pm',
      action: ''
    },
    {
      designation: 'Vice President',
      department: 'Product',
      budget: '₹35L',
      location: 'Ahmedabad',
      updatedBy: 'Pruthvi Dhamecha',
      lastUpdated: 'Sep 6, 2022, 7:05pm',
      action: ''
    },
    {
      designation: 'HR',
      department: 'Others',
      budget: '₹8L',
      location: 'Ahmedabad',
      updatedBy: 'Pruthvi Dhamecha',
      lastUpdated: 'Sep 6, 2022, 7:05pm',
      action: ''
    },
    {
      designation: 'UI Designer',
      department: 'Product',
      budget: '₹10L',
      location: 'Ahmedabad',
      updatedBy: 'Pruthvi Dhamecha',
      lastUpdated: 'Sep 6, 2022, 7:05pm',
      action: ''
    },
    {
      designation: 'Architect',
      department: 'Engineering',
      budget: '₹8L',
      location: 'Ahmedabad',
      updatedBy: 'Pruthvi Dhamecha',
      lastUpdated: 'Sep 6, 2022, 7:05pm',
      action: ''
    },
    {
      designation: 'Chief Legal Officer',
      department: 'Others',
      budget: '₹26L',
      location: 'Ahmedabad',
      updatedBy: 'Pruthvi Dhamecha',
      lastUpdated: 'Sep 6, 2022, 7:05pm',
      action: ''
    },
    {
      designation: 'Vice President',
      department: 'Product',
      budget: '₹35L',
      location: 'Ahmedabad',
      updatedBy: 'Pruthvi Dhamecha',
      lastUpdated: 'Sep 6, 2022, 7:05pm',
      action: ''
    },
    {
      designation: 'HR',
      department: 'Others',
      budget: '₹8L',
      location: 'Ahmedabad',
      updatedBy: 'Pruthvi Dhamecha',
      lastUpdated: 'Sep 6, 2022, 7:05pm',
      action: ''
    },
    {
      designation: 'UI Designer',
      department: 'Product',
      budget: '₹10L',
      location: 'Ahmedabad',
      updatedBy: 'Pruthvi Dhamecha',
      lastUpdated: 'Sep 6, 2022, 7:05pm',
      action: ''
    },
    {
      designation: 'Architect',
      department: 'Engineering',
      budget: '₹8L',
      location: 'Ahmedabad',
      updatedBy: 'Pruthvi Dhamecha',
      lastUpdated: 'Sep 6, 2022, 7:05pm',
      action: ''
    },
    {
      designation: 'Chief Legal Officer',
      department: 'Others',
      budget: '₹26L',
      location: 'Ahmedabad',
      updatedBy: 'Pruthvi Dhamecha',
      lastUpdated: 'Sep 6, 2022, 7:05pm',
      action: ''
    },
    {
      designation: 'Vice President',
      department: 'Product',
      budget: '₹35L',
      location: 'Ahmedabad',
      updatedBy: 'Pruthvi Dhamecha',
      lastUpdated: 'Sep 6, 2022, 7:05pm',
      action: ''
    },
    {
      designation: 'HR',
      department: 'Others',
      budget: '₹8L',
      location: 'Ahmedabad',
      updatedBy: 'Pruthvi Dhamecha',
      lastUpdated: 'Sep 6, 2022, 7:05pm',
      action: ''
    },
    {
      designation: 'UI Designer',
      department: 'Product',
      budget: '₹10L',
      location: 'Ahmedabad',
      updatedBy: 'Pruthvi Dhamecha',
      lastUpdated: 'Sep 6, 2022, 7:05pm',
      action: ''
    },
    {
      designation: 'Architect',
      department: 'Engineering',
      budget: '₹8L',
      location: 'Ahmedabad',
      updatedBy: 'Pruthvi Dhamecha',
      lastUpdated: 'Sep 6, 2022, 7:05pm',
      action: ''
    },
    {
      designation: 'Chief Legal Officer',
      department: 'Others',
      budget: '₹26L',
      location: 'Ahmedabad',
      updatedBy: 'Pruthvi Dhamecha',
      lastUpdated: 'Sep 6, 2022, 7:05pm',
      action: ''
    },
    {
      designation: 'Vice President',
      department: 'Product',
      budget: '₹35L',
      location: 'Ahmedabad',
      updatedBy: 'Pruthvi Dhamecha',
      lastUpdated: 'Sep 6, 2022, 7:05pm',
      action: ''
    },
  ];

  defaultColDef = {
    flex: 1,
    minWidth: 100,
    filter: true,
    sortable: true,
    resizable: true,
  };
  public rowModelType: any = 'serverSide';
  public cacheBlockSize = 10;
  pagination = true;
  paginationPageSize = 2;
  paginationPageSizeSelector = [2, 10, 20, 50, 100];

  displayedColumns: string[] = [
    'designation',
    'department',
    'budget',
    'location',
    'updatedBy',
    'lastUpdated',
    'actions',
  ];
  searchValue = '';
  selectedDesignation = '';
  designations = [
    'HR',
    'UI designer',
    'Architect',
    'Programmer Analyst',
    'Chief Legal Officer',
    'Vice President',
    'Chief Marketing Officer',
    'Program Manager',
  ];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  // Chart labels
  public doughnutChartLabels: string[] = [
    'Engineering',
    'Product',
    'Sales',
    'Others',
  ];

  public backgroundColor: string[] = [
    '#4CAF50',
    '#FFC107',
    '#2196F3',
    '#9E9E9E',
  ];

  // Chart data
  public doughnutChartData: ChartConfiguration<'doughnut'>['data'] = {
    labels: this.doughnutChartLabels,
    datasets: [
      {
        data: [30, 20, 30, 10], // Percentage values
        backgroundColor: ['#4CAF50', '#FFC107', '#2196F3', '#9E9E9E'], // Colors for each segment
        hoverBackgroundColor: ['#4CAF50', '#FFC107', '#2196F3', '#9E9E9E'],
        borderWidth: 0, // Removes border between segments
      },
    ],
  };

  // Chart options
  public doughnutChartOptions: ChartConfiguration<'doughnut'>['options'] = {
    responsive: true,
    cutout: '80%', // Creates the inner circular cutout for the doughnut effect
    plugins: {
      legend: {
        display: false, // Hides default legend
      },
      tooltip: {
        callbacks: {
          label: (context) => `${context.label}: ${context.raw}%`,
        },
      },
    },
  };
  public isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) platformId: Object) {
    this.isBrowser = isPlatformBrowser(platformId);

    // Register the custom plugin to add center text
    Chart.register({
      id: 'centerText',
      beforeDraw(chart) {
        const { width } = chart;
        const { height } = chart.chartArea;
        const ctx = chart.ctx;
        const centerX = width / 2;
        const centerY = height / 2;

        ctx.save();
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';

        // Main text
        ctx.font = 'bold 20px Poppins';
        ctx.fillStyle = '#212121';
        ctx.fillText('1.5 Cr', centerX, centerY - 10);

        // Subtext
        ctx.font = '14px Poppins';
        ctx.fillStyle = '#757575';
        ctx.fillText('Used', centerX, centerY + 10);

        ctx.restore();
      },
    });
  }

  // Filter logic
  applyFilters(): void {
    // this.filteredData = this.dataSource.filter((employee) => {
    //   const matchesSearch =
    //     !this.searchValue ||
    //     employee.designation
    //       .toLowerCase()
    //       .includes(this.searchValue.toLowerCase());
    //   const matchesDesignation =
    //     !this.selectedDesignation ||
    //     employee.designation === this.selectedDesignation;
    //   return matchesSearch && matchesDesignation;
    // });
  }

  clearFilters(): void {}
  // Clear the search input
  clearSearch(): void {
    this.searchValue = '';
    this.applyFilters();
  }

  // Filter by designation
  filterByDesignation() {
    // this.filteredData = this.selectedDesignation
    //   ? this.dataSource.filter(
    //       (item) => item.designation === this.selectedDesignation
    //     )
    //   : this.dataSource;
  }

  onGridReady(params: any) {
    if (this.isBrowser) {
      params.api.sizeColumnsToFit();
    }
  }

  openAddPosition(): void {}
}
