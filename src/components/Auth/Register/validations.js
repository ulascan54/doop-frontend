import * as yup from "yup"

const validations = yup.object({
  name: yup.string().required("zorunlu alan"),
  surname: yup.string().required("zorunlu alan"),
  email: yup
    .string()
    .email("Geçerli bir email giriniz !!")
    .required("zorunlu alan"),
  password: yup
    .string("Parolanız 5 karakater olmalıdır")
    .required("zorunlu alan")
    .min(5),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "parola uyuşmadı ")
    .required("zorunlu alan"),
})

export default validations
