//** REACT APP STATE */

import { Member } from "./member";
import { Product } from "./product";

export interface AppRootState {
    homePage: HomePageState;
}

export interface HomePageState{
    popularDishes: Product[],
    newDishes: Product[],
    topUsers: Member[]
}