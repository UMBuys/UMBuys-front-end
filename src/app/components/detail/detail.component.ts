  /**
   * Date: 8/29/2020
   * Description: Detail page component
   * Author: Nanyan Jiang
  */
import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/models/item';
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  public item: Item;
  public sellerEmail: string;
  constructor() { }

  ngOnInit(): void {
    this.item = {id:"1", seller: {name:"John Dude", email:"nanyanjiang001@gmail.com"}, title:"Yamaha Classical 1/2 guitar CGS102A + gig bag YES IT'S AVAILABLE !!", price: '95', category: { name:"Musical Instruments"}, postedDateTime: new Date('2020-08-16'), brand: 'Greg Bennett', condition:{conditionDescription:'Used - Good'}, photos: [{path:"https://scontent-lga3-2.xx.fbcdn.net/v/t1.0-9/p720x720/118389756_10159032195906522_4237214352098528833_o.jpg?_nc_cat=101&_nc_sid=843cd7&_nc_ohc=vNFdAahlYykAX9SzyG-&_nc_ht=scontent-lga3-2.xx&tp=6&oh=0d2868b9a004f54173d10e683a4702b1&oe=5F71119C"},{ path:"https://scontent-lga3-2.xx.fbcdn.net/v/t1.0-9/p720x720/118616772_10224238273969303_6856793406315322080_o.jpg?_nc_cat=108&_nc_sid=843cd7&_nc_ohc=e_evAth5vA4AX-hYEmn&_nc_ht=scontent-lga3-2.xx&tp=6&oh=a4a7f2eab6a53d94d652fe7092ee57c4&oe=5F6FBE18https://scontent-lga3-2.xx.fbcdn.net/v/t1.0-9/p720x720/118616772_10224238273969303_6856793406315322080_o.jpg?_nc_cat=108&_nc_sid=843cd7&_nc_ohc=e_evAth5vA4AX-hYEmn&_nc_ht=scontent-lga3-2.xx&tp=6&oh=a4a7f2eab6a53d94d652fe7092ee57c4&oe=5F6FBE18"}]}
    this.sellerEmail = this.item.seller.email;
  }
  emailTo(): void{
    const mailText = "mailto:" + this.sellerEmail + "?subject=files&body=Hello from UMBuys! -- I would like to know more about  " + this.item.title; // add the links to body
    window.location.href = mailText;
  }
}
