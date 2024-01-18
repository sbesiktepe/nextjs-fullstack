import ManageClient from "@/app/components/admin/ManageClient";
import getProducts from "../getProducts";
import { getCurrentUser } from "@/app/actions/getCurremtUser";

const Manage = async () => {
  const products = await getProducts({ category: null });
  const currentUser = await getCurrentUser();

  if (!currentUser || currentUser.role !== "ADMIN") {
    return <div>Buraya girişin yasaklı</div>;
  }
  return (
    <div className="w-full m-2">
      <ManageClient products={products} />
    </div>
  );
};

export default Manage;
