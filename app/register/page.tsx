import { getCurrentUser } from "../actions/getCurremtUser";
import RegisterClient from "../components/auth/RegisterClient";

const Register = () => {
  const currentUser = getCurrentUser();
  return (
    <div>
      <RegisterClient currentUser={currentUser} />
    </div>
  );
};

export default Register;
