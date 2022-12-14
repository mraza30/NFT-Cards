export interface CardProps {
  id: string;
  title: string;
  likes: number;
  highest_bid: number;
  discount_price: number;
  discount_perc: number;
  ends_in: string;
  is_hot: boolean;
  is_sale: boolean;
  imageUrl: string;
  imageAlt: string;
  bgColor: string;
  is_liked: boolean;
}
