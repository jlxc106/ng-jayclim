import { Component, OnInit } from "@angular/core";

declare var $: any;

@Component({
  selector: "app-projects",
  templateUrl: "./projects.component.html",
  styleUrls: ["./projects.component.css"]
})
export class ProjectsComponent implements OnInit {
  arrayOfProjects: Object[];
  constructor() {
    this.handleJSON();
  }

  ngOnInit() {
  }

  handleJSON() {
    $.getJSON("assets/projects.json", (result)  => {
      this.arrayOfProjects = result.projects;
    });
  }
}
