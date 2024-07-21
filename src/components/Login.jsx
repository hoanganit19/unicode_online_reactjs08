import "bootstrap/dist/css/bootstrap.min.css";
import { useForm } from "react-hook-form";
export default function Login() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    criteriaMode: "firstError",
    mode: "onSubmit",
    defaultValues: {
      email: "",
      password: "",
      account_type: 0,
    },
  });
  const handleLogin = (data) => {
    console.log("submit");
    console.log(data);
    reset({
      email: "",
      password: "",
      account_type: 0,
    });
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
            {...register("email", {
              //validate
              required: "Vui lòng nhập email",
              //onChange
              //onBlur
            })}
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
            {...register("password", {
              required: "Vui lòng nhập mật khẩu",
            })}
          />
          {errors.password && (
            <span className="text-danger">{errors.password?.message}</span>
          )}
        </div>
        <div className="mb-3">
          <label>Loại tài khoản</label>
          <select className="form-select" {...register("account_type")}>
            <option value="0">Chọn loại tài khoản</option>
            <option value="1">Quản trị</option>
            <option value="2">Khách</option>
          </select>
        </div>
        <div className="d-grid">
          <button className="btn btn-primary">Đăng nhập</button>
        </div>
      </form>
    </div>
  );
}
