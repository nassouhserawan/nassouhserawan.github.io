import { Course } from "src/models/course";

export interface IWish {
    wishItems:Course[];
    getWishItemsSuccess:boolean;
    getWishItemsFailure:boolean;
    addToWishSuccess:boolean;
    addToWishFailure:boolean;
    deleteFromWishSuccess:boolean;
    deleteFromWishFailure:boolean;
    error:string;
 }