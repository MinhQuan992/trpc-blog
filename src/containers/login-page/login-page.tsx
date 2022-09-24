import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";
import { trpc } from "../../utils/trpc";
import { CreateUserInput } from "../../schema/user.schema";
import { useRouter } from "next/router";

export const LoginPage = () => {
  const { handleSubmit, register } = useForm<CreateUserInput>();
  const router = useRouter();

  const { mutate, error } = trpc.useMutation(["users.register-user"], {
    onSuccess: () => {
      router.push("/login");
    },
  });

  const onSubmit = (values: CreateUserInput) => {
    mutate(values);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        {error && error.message}
        <h1>Email</h1>
        <input
          type="email"
          placeholder="Enter your Email"
          {...register("email")}
        />
        <br />
        <button type="submit">Login</button>
      </form>
      <Link href="/register">Register</Link>
    </>
  );
};
