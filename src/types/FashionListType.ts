import type { FashionCategoryType } from "./FashionCategoryType";

export interface FashionItem {
  id: string;
  name: string;
  category: FashionCategoryType;  
  description?: string;
  colors?: string[];
  price?: number;
  image?: string;
}

export interface FashionCategory {
  name: FashionCategoryType;
  items: FashionItem[];
}
