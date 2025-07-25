export class Mobile {
  id?: number; // Optional: used for editing existing records
  model!: string;
  brand!: string;
  price!: number;
  quantity!: number;
  imageFile?: string; // Base64 image or image URL
}
