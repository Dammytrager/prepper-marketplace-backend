import {BaseModelInterface} from "./base-model.interface";

export interface CoursepackModelInterface extends BaseModelInterface {
    title: string;
    user: any;
    courses: any[];
    price: string;
    approve: boolean;
    removeCourse(id, next): any;
    delete(): any;
    getTitle(id, next): any
}
