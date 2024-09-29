import { RegisterSchema } from "@/lib/definiations/auth";

export async function RegisterAction(formData){
    const validatedFields = RegisterSchema.safeParse({
        name: "adgdsgds",
        email: "dgsdgdsggds"
    })
}