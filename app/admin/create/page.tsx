import { getCurrentUser } from "@/app/actions/getCurremtUser";
import CreateForm from "@/app/components/admin/CreateForm";
import AuthContainer from "@/app/components/container/AuthContainer";

const CreateProduct = async () => {
  const currentUser = await getCurrentUser();
  if (!currentUser || currentUser.role !== "ADMIN") {
    return <div>Buraya Girişin Yasaklı</div>;
  }

  return (
    <AuthContainer>
      <CreateForm />
    </AuthContainer>
  );
};

export default CreateProduct;
