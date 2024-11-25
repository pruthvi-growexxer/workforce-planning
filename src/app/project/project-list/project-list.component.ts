import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss']
})
export class ProjectListComponent implements OnInit {
  // Array to hold the list of projects
  projects = [
    {
      title: 'Project: Asia Expansion',
      description: 'Planning for Asia expansion',
      budget: '1.5 Cr',
      positions: 66,
      collaborators: 'Yash Mehta'
    },
    {
      title: 'Project: Australia Expansion',
      description: 'Planning for Australia expansion',
      budget: '1.5 Cr',
      positions: 66,
      collaborators: 'Yash Mehta'
    },
    {
      title: 'Project: Growth 2024',
      description: 'Planning for Growth 2024',
      budget: '1.5 Cr',
      positions: 66,
      collaborators: 'Yash Mehta'
    }
  ];

  constructor() {}

  ngOnInit(): void {
    // Additional initialization logic if required
  }

  // Add more logic here if you need interactivity
}
