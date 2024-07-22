import "bootstrap/dist/css/bootstrap.min.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { object, string } from "yup";
export default function App() {
  const schema = object({
    email: string().required("Email là bắt buộc").email("Email không hợp lệ"),
    password: string()
      .required("Mật khẩu là bắt buộc")
      .min(6, "Mật này phải nhiều hơn 6 kí tự"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const handleLogin = (data) => {
    console.log(data);
  };
  return (
    <div className="w-50 mx-auto py-3">
      <h2 className="text-center">Đăng nhập</h2>
      <form action="" onSubmit={handleSubmit(handleLogin)}>
        <div className="mb-3">
          <label>Email</label>
          <input
            type="text"
            className="form-control"
            placeholder="Email..."
            {...register("email")}
          />
          {errors.email && (
            <span className="text-danger">{errors.email?.message}</span>
          )}
        </div>
        <div className="mb-3">
          <label>Mật khẩu</label>
          <input
            type="password"
            className="form-control"
            placeholder="Mật khẩu..."
            {...register("password")}
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
