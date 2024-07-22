import "bootstrap/dist/css/bootstrap.min.css";
import { useForm } from "react-hook-form";
export default function Login() {
  const {
    register,
    handleSubmit,
    // reset,
    // setError,
    // clearErrors,
    // setValue,
    // setFocus,
    // getValues,
    // trigger,
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
    // if (email !== "admin@gmail.com" || password !== "123456") {
    //   setError("email", {
    //     message: "Sai email hoặc mật khẩu",
    //   });
    // }
    // if (account_type === "1") {
    //   clearErrors("email");
    // }
    console.log(data);
  };

  return (
    <div className="w-50 mx-auto py-3">
      <h2 className="text-center">Đăng nhập</h2>
      <form action="" onSubmit={handleSubmit(handleLogin)}>
        <div className="mb-3">
          <label>Tên</label>
          <input
            type="text"
            className="form-control"
            placeholder="Tên..."
            {...register("name", {
              //validate
              required: "Vui lòng nhập tên",
              minLength: {
                value: 5,
                message: "Tên phải từ 5 ký tự trở lên",
              },
              maxLength: {
                value: 20,
                message: "Tên không được vượt quá 20 ký tự",
              },
            })}
          />
          {errors.email && (
            <span className="text-danger">{errors.name?.message}</span>
          )}
        </div>
        <div className="mb-3">
          <label>Email</label>
          <input
            type="text"
            className="form-control"
            placeholder="Email..."
            {...register("email", {
              //validate
              required: "Vui lòng nhập email",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Định dạng email không hợp lệ",
              },
              validate: async (email) => {
                if (!email) {
                  return "Vui lòng nhập email";
                }
                const response = await fetch(
                  `https://jsonplaceholder.typicode.com/users?email=${email}`
                );
                const data = await response.json();
                if (data.length > 0) {
                  return "Email đã tồn tại";
                }
                // return true;
              },
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
              pattern: {
                value:
                  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\\$%\\^&\\*]).{8,}$/,
                message: "Mật khẩu yếu, vui lòng chọn mật khẩu khác",
              },
            })}
          />
          {errors.password && (
            <span className="text-danger">{errors.password?.message}</span>
          )}
        </div>
        <div className="mb-3">
          <label>Loại tài khoản</label>
          <select
            className="form-select"
            {...register("account_type", {
              validate: (value) => {
                if (+value === 0) {
                  return "Vui lòng chọn loại tài khoản";
                }
                return true;
              },
            })}
          >
            <option value="0">Chọn loại tài khoản</option>
            <option value="1">Quản trị</option>
            <option value="2">Khách</option>
          </select>
          {errors.account_type && (
            <span className="text-danger">{errors.account_type?.message}</span>
          )}
        </div>
        <div className="d-grid">
          <button className="btn btn-primary">Đăng nhập</button>
          {/* <button
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
          </button> */}
        </div>
      </form>
    </div>
  );
}
