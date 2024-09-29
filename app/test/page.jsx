"use client"
import { testAction } from "@/action/datavalidate";
import { useFormState } from "react-dom"

export default function Test(){
    const [state, action] = useFormState(testAction, null);
    return(
        <div>
            <form action={action}>
                <input type="text" name="name" placeholder="Adınızı giriniz" />
                {state?.errors?.name && (<small>{state.errors.name}</small>)}
                <br />
                <input type="text" name="email" placeholder="E-posta adresini gir"/>
                {state?.errors?.email && (
                    <ul>
                        {state?.errors.email.map((error, index) => (
                            <li key={index}>{error}</li>
                        ))}
                    </ul>
                )}
                {/* <input type="date" />
                <input type="number" />
                <label htmlFor=""><input type="radio" /> Test</label> */}
                <button>Kayıt Ol</button>
            </form>
        </div>
    )
}