import AdminDB from "../database/schemas/AdminSchema";
import Admin from "../../Domain/Entities/Admin";

interface Valores {
  name: string;
  email: string;
  password: string;
  active: boolean;
  createdAt: Date;
}

const AdminRepository = {
  // async save() {},
  async insert(props: Valores) {
    new AdminDB({});

    const admin = Admin.create(props);
    const result = await AdminDB.create(admin);
    return result;
  },

  async update() {
    new AdminDB({});
    const result = await AdminDB.find();
    return result.map((item) => Admin.create(item));
  },

  async delete() {
    new AdminDB({});
    const result = await AdminDB.find();
    return result.map((item) => Admin.create(item));
  },

  async getOneById() {
    new AdminDB({});
    const result = await AdminDB.find();
    return result.map((item) => Admin.create(item));
  },
  async getAll() {
    new AdminDB({});
    const result = await AdminDB.find();
    return result.map((item) => Admin.create(item));
  },
};

export default AdminRepository;
