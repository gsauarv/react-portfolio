import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

function Contacts() {
  const schema = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().email().required(),
    phone: yup.string().required(),
    message: yup.string().required(),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = (data, e) => {
    console.log(data);
    data = "";
    e.target.reset();
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control">
          <p>Name</p>
          <input type="text" name="fullName" {...register("name")}></input>
          {errors.name?.message}
        </div>

        <div className="form-control">
          <p>Email</p>
          <input type="email" name="email" {...register("email")}></input>
          {errors.email?.message}
        </div>

        <div className="form-control">
          <p>Phone No</p>
          <input type="tel" name="phone" {...register("phone")}></input>
          {errors.phone?.message}
        </div>

        <div className="form-control">
          <p>Message</p>
          <textarea
            type="texts"
            name="message"
            {...register("message")}
          ></textarea>
          {errors.message?.message}
        </div>

        <button className="btn">Submit</button>
      </form>
    </div>
  );
}

export default Contacts;
