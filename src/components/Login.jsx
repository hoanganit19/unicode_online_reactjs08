import "bootstrap/dist/css/bootstrap.min.css";
import { useForm } from "react-hook-form";
export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    criteriaMode: "firstError",
    mode: "onSubmit",
    defaultValues: {
      //   email: "hoangan.web@gmail.com",
      //   password: "123456",
    },
  });
  const onSubmit = (data) => {
    console.log("submit");
    console.log(data);
  };

  console.log(errors);

  return (
    <div className="w-50 mx-auto py-3">
      <h2 className="text-center">Đăng nhập</h2>
      <form action="" onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label>Email</label>
          <input
            type="text"
            className="form-control"
            placeholder="Email..."
            {...register("email", {
              required: "Vui lòng nhập email",
              minLength: 10,
              pattern: /^\S+@\S+\.\S+$/,
            })}
          />
          {errors?.email?.types?.required && (
            <span className="text-danger">Vui lòng nhập email</span>
          )}
          {errors?.email?.types?.minLength && (
            <span className="text-danger">Độ dài không phù hợp</span>
          )}
          {errors?.email?.types?.pattern && (
            <span className="text-danger">Email không đúng định dạng</span>
          )}
        </div>
        <div className="mb-3">
          <label>Mật khẩu</label>
          <input
            type="password"
            className="form-control"
            placeholder="Mật khẩu..."
            {...register("password", {
              required: "Vui lòng nhập mật khẩu",
            })}
          />
          {errors.password && (
            <span className="text-danger">{errors.password?.message}</span>
          )}
        </div>
        <div className="d-grid">
          <button className="btn btn-primary">Đăng nhập</button>
        </div>
      </form>
    </div>
  );
}
