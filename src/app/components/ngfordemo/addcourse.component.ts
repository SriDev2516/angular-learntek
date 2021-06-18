import { Component, Output, EventEmitter } from "@angular/core";

import { Course } from "src/app/model/course.model";


@Component({
    selector:'app-addcourse',
    templateUrl:'addcourse.component.html',
    styleUrls:[]
})

export class AddCourseComponent{
    @Output() courseAddEvent: EventEmitter<Course> = new EventEmitter<Course>();
    course: Course;

    constructor(){
        this.course = {title:'', description:'',link:''}
    }

    addCourse(){

        console.log(this.course);
        this.courseAddEvent.emit(this.course);

    }
}