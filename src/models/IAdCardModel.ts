export interface IAdCardModel {
  address: string;
  category_id: string;
  city: string;
  commercial: number;
  created_at: string;
  delivery: boolean;
  email: null | string;
  highlighting: boolean;
  id: number;
  old_price: string | null;
  phone: string | null;
  photo: string | null;
  post_photo_v2: string[];
  price: string;
  rating: number;
  reviewed: number;
  secure_transaction: boolean;
  selection_size: boolean;
  title: string;
  trade: boolean;
  user_id: number;
  user_name: string;
  user_phone: string;
  user_photo: string | null;
  user_raiting: null | number;
  verify_moderator: { verify: [] };
  viewing: null;
}
