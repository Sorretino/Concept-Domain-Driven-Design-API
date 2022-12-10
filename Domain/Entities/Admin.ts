import { Entity } from "../../core/domain/Entity";

type AdminProps = {
  name: string;
  email: string;
  password: string;
  active: boolean;
  createdAt: Date;
};

export class Admin extends Entity<AdminProps> {
  private constructor(props: AdminProps, id?: string) {
    super(props, id);
  }

  static create(props: AdminProps, id?: string) {
    const admin = new Admin(props, id);
    return admin.props;
  }
}

export default Admin;
