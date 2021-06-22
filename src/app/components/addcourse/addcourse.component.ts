import { Component, Output, EventEmitter } from "@angular/core";

import { Course } from "src/app/model/course.model";


@Component({
    selector:'app-addcourse',
    templateUrl:'addcourse.component.html',
    styleUrls:['addcourse.component.css']
})

export class AddCourseComponent{
    @Output() courseAddEvent: EventEmitter<Course> = new EventEmitter<Course>();
    course: Course;
    isSubmitted: boolean = false;
    isFormValid: boolean = false;

    constructor(){
        this.course = {title:'', description:'',link:''}
    }

    addCourse(){
        this.isSubmitted = true;
        if(this.course.title != '' && this.course.description != '' && this.course.link != ''){
            
            console.log(this.course);
            this.courseAddEvent.emit(this.course);
            this.course={title:'', description:'',link:''};
            this.isSubmitted = false;
        } else {
           this.checkIsValid();
        }   
        

    }

    checkIsValid(){
        let cssClasses;
        if(this.course.title == '' && this.isSubmitted){
            cssClasses = {
                'isNotValid': true
            }
        } else {
            cssClasses = {
                'isNotValid': false
            }
        }

        return cssClasses;
    }

    inputChange() {
        if(this.course.title != '' && this.course.description != '' && this.course.link != '') {
            this.isFormValid = true;
        }
    }
}