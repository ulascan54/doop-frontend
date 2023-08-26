import * as yup from "yup"

const validations = yup.object({
  email: yup
    .string()
    .email("Geçerli bir email giriniz !!")
    .required("zorunlu alan"),
  password: yup
    .string("Parolanız 5 karakater olmalıdır")
    .required("zorunlu alan")
    .min(5),
})

export default validations
