"use client";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import AuthContainer from "../container/AuthContainer";
import Input from "../General/Input";
import Button from "@/app/utils/Button";
import { FaGoogle } from "react-icons/fa";
import Link from "next/link";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

interface LoginClientProps {
  currentUser: any;
}

const LoginClient: React.FC<LoginClientProps> = ({ currentUser }) => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FieldValues>();

  useEffect(() => {
    if (currentUser) {
      router.push("/cart");
      router.refresh();
    }
  }, [currentUser]);

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    signIn("credentials", {
      ...data,
      redirect: false,
    }).then((callback) => {
      if (callback?.ok) {
        router.push("/cart");
        router.refresh();
      }
      if (callback?.error) {
        console.log(callback.error);
      }
    });
  };

  return (
    <div>
      <AuthContainer>
        <div className="w-full md:w-[500px] p-3 shadow-lg rounded-md">
          <h2 className="p-2 font-bold md:text-lg text-slate-500 my-3 md:my-10 md:px-10">
            Login
          </h2>

          <Input
            placeholder="Email"
            type="text"
            id="email"
            register={register}
            errors={errors}
            required
          />
          <Input
            placeholder="Parola"
            type="password"
            id="password"
            register={register}
            errors={errors}
            required
          />
          <Button
            primary
            className="p-2 rounded-md w-full"
            onClick={handleSubmit(onSubmit)}
          >
            Giriş Yap
          </Button>
          <div>
            Daha Önce Kayıt Olmadıysan{" "}
            <Link href={"/register"}>Buraya Tıkla</Link>
          </div>
          <div className="text-center p-4">OR</div>
          <Button
            className="p-2 rounded-md w-full"
            primary
            onClick={() => {
              signIn("google");
            }}
          >
            Google İle Giriş Yap
          </Button>
        </div>
      </AuthContainer>
    </div>
  );
};

export default LoginClient;
