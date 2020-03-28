import {Document} from "mongoose";

export interface BaseModelInterface extends Document{
    save(): any;
    load(data): any;
}