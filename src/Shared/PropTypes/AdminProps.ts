export interface AdminProps {
  id?: string | null;
  name: string;
  email: string;
  password: string;
  active: boolean;
  createdAt?: Date;
}
