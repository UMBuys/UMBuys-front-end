import { Photo } from './photo';
import { Category } from './category';
import { Condition } from './condition';
import { Seller } from './seller';
export class Item{
  id: string;
  title: string;
  price: string;
  category: Category;
  condition?: Condition;
  brand?: string;
  description?: string;
  photos?: Photo[];
  postedDateTime?: Date;
  seller?: Seller;
}
