  /**
   * Date: 8/22/2020
   * Description: Gallery component class
   * Author: Nanyan Jiang
  */
// purpose: display photo gallery of 8 items with photos and price;
// TODO: call service to retrieve pheoto from db
// TODO: make each items' photo link to their detail page
// Nanyan Jiang
import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/models/item';
import { Title } from '@angular/platform-browser';
import { Photo } from 'src/app/models/photo';
import { Category } from 'src/app/models/category';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  constructor() { }
  itemArr: Item[] = [
    {id: '1', title: 'Macbook pro', price: '1000', category: {name: 'Electronics'}, photos: [{ path: 'https://scontent-lga3-2.xx.fbcdn.net/v/t1.0-9/p720x720/118074080_10160155011431040_5698340050960916547_o.jpg?_nc_cat=102&_nc_sid=843cd7&_nc_ohc=bsa7Ropkc_QAX99NsDm&_nc_ht=scontent-lga3-2.xx&_nc_tp=6&oh=944fa0375dd88e0153f496d4a3774d6f&oe=5F68CCE2'}]},
    {id: '2', title: 'Playstation 4 console barely used original CUH-1001A 500gb', price: '240', category: {name: 'Electronics'}, photos: [{ path: 'https://scontent-lga3-2.xx.fbcdn.net/v/t1.0-9/p720x720/118102541_10157781237667989_7666006723253492916_o.jpg?_nc_cat=111&_nc_sid=843cd7&_nc_ohc=JcCi4ab6nQIAX-NCI1p&_nc_ht=scontent-lga3-2.xx&_nc_tp=6&oh=2ea48b35c299bc2725a23a7c6d3d7865&oe=5F688EF1'}]},
    {id: '3', title: '2017 Honda Accord Sport', price: '1500', category: {name: 'Vehicles'}, photos: [{ path: 'https://scontent-lga3-2.xx.fbcdn.net/v/t45.5328-4/106490249_3189167487829058_5408734631419674295_n.jpg?_nc_cat=107&_nc_sid=c48759&_nc_ohc=BfUdm2d9Qy8AX9X4ONj&_nc_ht=scontent-lga3-2.xx&oh=0f13e5445a855e6cf4911a945d535fb9&oe=5F68E0F6'}]},
    {id: '4', title: '2017 Mercedes-Benz C-Class C 300 4MATIC', price: '500', category: {name: 'Vehicles'}, photos: [{ path: 'https://scontent-lga3-2.xx.fbcdn.net/v/t45.5328-4/88213053_3521239921282402_378515072659488768_n.jpg?_nc_cat=103&_nc_sid=c48759&_nc_ohc=yYC7yDWLcXcAX9HDAC2&_nc_oc=AQnie_n6kLJyrYC_3SYVpRSVc-GaVY94OkLNkDh3NHrKsYXu9zwyrgSRHE_y6g2tSao&_nc_ht=scontent-lga3-2.xx&oh=2af33f3cdf98b2daf8d46e48654e54c2&oe=5F696C04'}]},
    {id: '5', title: '1963 Chevrolet Corvette', price: '15600', category: {name: 'Vehicles'}, photos: [{ path: 'https://scontent-lga3-2.xx.fbcdn.net/v/t45.5328-4/p720x720/117771306_3053110908150482_285929847212246169_n.jpg?_nc_cat=1&_nc_sid=c48759&_nc_ohc=0wHfD5g_ES8AX8ZRHdN&_nc_ht=scontent-lga3-2.xx&_nc_tp=6&oh=3ce8d4ca830c80804c24ba4c1f24bcfb&oe=5F6677B1'}]},
    {id: '6', title: 'SUPER FAST Macbook air 13"- with 30 days warranty- superb choice for gift/work/school', price: '425', category: {name: 'Electronics'}, photos: [{ path: 'https://scontent-lga3-2.xx.fbcdn.net/v/t1.0-9/p720x720/106100887_151994999813282_7077837235156459726_o.jpg?_nc_cat=105&_nc_sid=843cd7&_nc_ohc=lvXua01dYw0AX_4br7-&_nc_ht=scontent-lga3-2.xx&_nc_tp=6&oh=69cd136f4409c36a7cc5ec46e7c34ee4&oe=5F67AB6B'}]},
    {id: '7', title: '2016 Nissan Maxima 3.5 SL', price: '425', category: {name: 'Electronics'}, photos: [{ path: 'https://scontent-lga3-2.xx.fbcdn.net/v/t45.5328-4/89601834_3817047201668709_124645225149759488_n.jpg?_nc_cat=101&_nc_sid=c48759&_nc_ohc=shxOtx8XIYMAX9TfbEB&_nc_ht=scontent-lga3-2.xx&oh=bb61e6507a0429cc2c1df866deb12e93&oe=5F67CE78'}]},
    {id: '8', title: 'Moving Sale', price: '425', category: {name: 'Electronics'}, photos: [{ path: 'https://scontent-lga3-2.xx.fbcdn.net/v/t1.0-9/117810875_646233066327017_6007882217632065135_n.jpg?_nc_cat=108&_nc_sid=b9115d&_nc_ohc=Rqp8LfKPmkMAX9UHW2F&_nc_ht=scontent-lga3-2.xx&oh=fcc9d4a51b65a51e3e351a0a068e49c2&oe=5F69C7DA'}]},
    {id: '9', title: 'Moving Sale', price: '425', category: {name: 'Electronics'}, photos: [{ path: 'https://scontent-lga3-2.xx.fbcdn.net/v/t1.0-9/p720x720/117643398_10220027911025315_7181077904768500321_o.jpg?_nc_cat=100&_nc_sid=843cd7&_nc_ohc=OyHQNOaBspIAX9fnrWj&_nc_ht=scontent-lga3-2.xx&_nc_tp=6&oh=0361eaed1135b10d62e3f698891ac4dd&oe=5F66AD77'}]},
    {id: '10', title: 'Moving Sale', price: '425', category: {name: 'Electronics'}, photos: [{ path: 'https://scontent-lga3-2.xx.fbcdn.net/v/t1.0-9/p720x720/117950117_10220027911105317_3575948941250457512_o.jpg?_nc_cat=102&_nc_sid=843cd7&_nc_ohc=agdzXk5AFY4AX-xamhq&_nc_ht=scontent-lga3-2.xx&_nc_tp=6&oh=59d2b422b15e44902e64bc5a888ec8e0&oe=5F6938C6'}]}

  ];

  ngOnInit(): void {
  }

  toDetailPage(item: Item): void{

  }

}
