import { z } from "zod"
export const schema = z.object({
    name: z.string({
      invalid_type_error: 'Geçersiz değer',
    }).min(2, "İsim alanı minimum iki karakter olmalıdır")
    .max(20, "İsim alanı 20 karakterden fazla olamaz")
    .startsWith("kemal", "Kemal ile başlamalıdır"),
    email: z.string({
        invalid_type_error: "Geçersiz değer"
    }).min(1, "Email alanı boş olamaz").email("Lütfen geçerli bir eposta adresi giriniz")
})