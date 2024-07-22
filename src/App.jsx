import "bootstrap/dist/css/bootstrap.min.css";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { object, string } from "yup";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { FormControl } from "@mui/material";
export default function App() {
  const schema = object({
    email: string().required("Email là bắt buộc").email("Email không hợp lệ"),
    password: string()
      .required("Mật khẩu là bắt buộc")
      .min(6, "Mật này phải nhiều hơn 6 kí tự"),
    account_type: string().test(
      "account_type",
      "Vui lòng chọn loại tài khoản",
      (value) => {
        return +value !== 0;
      }
    ),
  });
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      email: "",
      password: "",
      account_type: 0,
    },
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
        <div className="mb-3">
          <Controller
            control={control}
            name="account_type"
            render={({ field: { onChange, value } }) => (
              <FormControl fullWidth>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={value}
                  onChange={onChange}
                >
                  <MenuItem value={0}>Chọn loại</MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
                {errors.account_type && (
                  <span className="text-danger">
                    {errors.account_type?.message}
                  </span>
                )}
              </FormControl>
            )}
          />
        </div>
        <div className="d-grid">
          <button className="btn btn-primary">Đăng nhập</button>
        </div>
      </form>
    </div>
  );
}
