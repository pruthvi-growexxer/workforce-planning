import { Component, inject, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreateProjectComponent } from '../create-project/create-project.component';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss'],
})
export class ProjectListComponent implements OnInit {
  // Array to hold the list of projects
  projects = [
    {
      title: 'Project: Asia Expansion',
      description: 'Planning for Asia expansion',
      budget: '1.5 Cr',
      positions: 66,
      collaborators: 'Yash Mehta',
    },
    {
      title: 'Project: Australia Expansion',
      description: 'Planning for Australia expansion',
      budget: '1.5 Cr',
      positions: 66,
      collaborators: 'Yash Mehta',
    },
    {
      title: 'Project: Growth 2024',
      description: 'Planning for Growth 2024',
      budget: '1.5 Cr',
      positions: 66,
      collaborators: 'Yash Mehta',
    },
  ];
  readonly dialog = inject(MatDialog);

  constructor() {}

  ngOnInit(): void {}

  openAddProject(): void {
    const dialogRef = this.dialog.open(CreateProjectComponent, {
      data: {},
    });

    dialogRef.afterClosed().subscribe((result: any) => {
      console.log(result);
      if (result !== undefined) {
        this.projects.push(result);
        console.log(this.projects);
      }
    });

  }
}
