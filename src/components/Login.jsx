import "bootstrap/dist/css/bootstrap.min.css";
import { useForm } from "react-hook-form";
export default function Login() {
  const {
    register,
    handleSubmit,
    // reset,
    setError,
    clearErrors,
    setValue,
    setFocus,
    getValues,
    trigger,
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
  const handleLogin = ({ email, password, account_type }) => {
    if (email !== "admin@gmail.com" || password !== "123456") {
      setError("email", {
        message: "Sai email hoặc mật khẩu",
      });
    }

    if (account_type === "1") {
      clearErrors("email");
    }
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
          <button
            className="btn btn-warning"
            type="button"
            onClick={() => setValue("email", "admin@gmail.com")}
          >
            Set Value
          </button>
          <button
            className="btn btn-warning"
            type="button"
            onClick={() => setFocus("password")}
          >
            Set Focus
          </button>
          <button
            className="btn btn-warning"
            type="button"
            onClick={() => {
              const values = getValues(["email", "password"]);
              console.log(values);
            }}
          >
            Get Values
          </button>
          <button
            className="btn btn-warning"
            type="button"
            onClick={() => {
              trigger();
            }}
          >
            Trigger
          </button>
        </div>
      </form>
    </div>
  );
}
