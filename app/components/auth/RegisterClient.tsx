"use client";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import AuthContainer from "../container/AuthContainer";
import Input from "../General/Input";
import Button from "@/app/utils/Button";
import { FaGoogle } from "react-icons/fa";
import Link from "next/link";
import axios from "axios";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const RegisterClient = ({ currentUser }: { currentUser: any }) => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FieldValues>();

  useEffect(() => {
    if (currentUser.reason) {
      router.push("/cart");
      router.refresh();
    }
  }, []);

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    axios.post("/api/register", data).then(() => {
      console.log("Kullanıcı Oluşturuldu.");
      signIn("credentials", {
        email: data.email,
        password: data.password,
        redirect: false,
      }).then((callback: any) => {
        if (callback?.ok) {
          router.push("/cart");
          router.refresh();
        }
        if (callback?.error) {
          console.log(callback.error);
        }
      });
    });
  };

  return (
    <div>
      <AuthContainer>
        <div className="w-full md:w-[500px] p-3 shadow-lg rounded-md">
          <h2 className="p-2 font-bold md:text-lg text-slate-500 my-3 md:my-10 md:px-10">
            Register
          </h2>
          <Input
            placeholder="İsim"
            type="text"
            id="name"
            register={register}
            errors={errors}
            required
          />
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
            Kayıt Ol
          </Button>
          <div>
            Eğer Kayıt Olduysan <Link href={"/login"}>Click Here</Link>
          </div>
          <div className="text-center p-4">OR</div>
          <Button
            className="p-2 rounded-md w-full"
            primary
            onClick={() => {
              signIn("google");
            }}
          >
            Google İle Üye Ol
          </Button>
        </div>
      </AuthContainer>
    </div>
  );
};

export default RegisterClient;
