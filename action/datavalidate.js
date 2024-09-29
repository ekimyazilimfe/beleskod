"use server"

import { schema } from "@/lib/definiations/auth";


export async function testAction(prevState, formData){
    const validatedFields = schema.safeParse({
        name: formData.get('name'),
        email: formData.get('email')
    })
    if (!validatedFields.success) {
        return {
          errors: validatedFields.error.flatten().fieldErrors,
        }
    }
}