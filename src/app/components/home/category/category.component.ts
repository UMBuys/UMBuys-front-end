  /**
   * Date: 8/22/2020
   * Description: category component class
   * Author: Nanyan Jiang
  */
import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  vehicles : string[] = ["Vehicles", "assets/bootstrap-icons.svg#truck"];
  rentals : string[] = ["Rentals", "assets/bootstrap-icons.svg#building"];
  apparel : string[] = ["Apparel", "assets/bootstrap-icons.svg#tag"];
  electronics : string[] = ["Electronics", "assets/bootstrap-icons.svg#laptop"];
  entertainment : string[] = ["Entertainment", "assets/bootstrap-icons.svg#music-note-list"];
  free : string[] = ["Free", "assets/bootstrap-icons.svg#cash"];
  outdoor : string[] = ["Outdoor", "assets/bootstrap-icons.svg#sun"];
  home_goods : string[] = ["Home Goods", "assets/bootstrap-icons.svg#hammer"];
  home_sales : string[] = ["Home Sales", "assets/bootstrap-icons.svg#house"];
  office_supplies: string[] = ["Office Supplies", "assets/bootstrap-icons.svg#printer"];
  pet_supplies: string[] = ["Pet Supplies", "assets/bootstrap-icons.svg#suit-heart"];
  toys_and_games: string[] = ["Toys & Games", "assets/bootstrap-icons.svg#joystick"];

  categoryArray: string[][] = [this.apparel, this.electronics, this.entertainment, this.free, this.home_goods, this.home_sales, this.office_supplies, this.outdoor, this.pet_supplies, this.rentals, this.toys_and_games, this.vehicles];

  numberArray(n: number): any[] {
    return Array(n);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
