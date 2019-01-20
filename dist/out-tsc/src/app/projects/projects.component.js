import * as tslib_1 from "tslib";
import { Component } from "@angular/core";
var ProjectsComponent = /** @class */ (function () {
    function ProjectsComponent() {
        this.handleJSON();
    }
    ProjectsComponent.prototype.ngOnInit = function () {
        // this.arrayOfProjects = this.handleJSON();
        // console.log(this.arrayOfProjects);
    };
    ProjectsComponent.prototype.handleJSON = function () {
        var _this = this;
        $.getJSON("assets/projects.json", function (result) {
            _this.arrayOfProjects = result.projects;
            var projectTotal = result.projects.length;
            result.projects.map(function (project, index) {
                //make card
                var cardvar = $("<div>")
                    .addClass("card project-card")
                    .appendTo(".project-card-container");
                //card title
                $("<h2>")
                    .html(project.name)
                    .appendTo($("<div>")
                    .addClass("card-title")
                    .appendTo(cardvar));
                var cardBody = $("<div>")
                    .addClass("card-body")
                    .appendTo(cardvar);
                $("<p>")
                    .html(project.languages)
                    .addClass("card-languages")
                    .appendTo(cardBody);
                $("<p>")
                    .html(project.description)
                    .addClass("card-description")
                    .appendTo(cardBody);
                var cardLinks = $("<div>")
                    .addClass("card-links")
                    .appendTo(cardBody);
                $("<div>")
                    .addClass("card-contain-github")
                    .append($("<a></a>")
                    .attr({ href: project.github, target: "_blank" })
                    .html("<i class='fa fa-github aria-hidden='true'>github</i>"))
                    .appendTo(cardLinks);
                if (project.live_page) {
                    $("<div>")
                        .addClass("card-contain-live")
                        .append($("<a></a>")
                        .attr({ href: project.live_page, target: "_blank" })
                        .html("<i class='fa fa-paper-plane-o aria-hidden='true'>live page</i>"))
                        .appendTo(cardLinks);
                }
            });
        });
    };
    ProjectsComponent = tslib_1.__decorate([
        Component({
            selector: "app-projects",
            templateUrl: "./projects.component.html",
            styleUrls: ["./projects.component.css"]
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], ProjectsComponent);
    return ProjectsComponent;
}());
export { ProjectsComponent };
//# sourceMappingURL=projects.component.js.map