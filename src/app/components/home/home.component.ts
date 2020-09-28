  /**
   * Date: 8/22/2020
   * Description: Home component class
   * Author: Nanyan Jiang
  */
import { Component, OnInit } from '@angular/core';
// import fortawesome
import { faCarSide, faHome, faTshirt, faLaptop, faIcons, faHandshake, faTree, faCouch, faHouseUser, faPrint, faPaw, faPuzzlePiece} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // categories images
  vehicles = faCarSide;
  rentals = faHome;
  apparel = faTshirt;
  electronics = faLaptop;
  entertainment = faIcons;
  free = faHandshake;
  outdoor = faTree;
  home_goods = faCouch; 
  home_sale = faHouseUser;
  office_suppliy = faPrint;
  pet_suppliy = faPaw;
  toys_games = faPuzzlePiece;
  constructor() { }

  ngOnInit(): void {
  }

}
