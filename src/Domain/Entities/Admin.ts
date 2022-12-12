import { Entity } from "~/Core/Domain/Entity";
import { AdminProps } from "~/Shared/PropTypes/AdminProps";

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
