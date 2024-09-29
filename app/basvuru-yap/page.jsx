"use client"
import { useEffect, useformState, useState } from "react";
import { BasvuruYapAksiyonu } from "@/action/basvuru";
import {useFormState} from "react-dom"

export default function Basvuru() {
    const [errorsState, setErrorsState] = useState({})
    const [step, setStep] = useState(1);

    return (
        <>
            <h1>Başvuru Sayfası</h1>
            <form action={async(formData) => {
                console.log(formData);
                const formObj = Object.fromEntries(formData);
                console.log(formObj);

                const response = await BasvuruYapAksiyonu(formObj);
                console.log(response);

                if(response?.errors){
                    setErrorsState({
                        errors: response?.errors
                    })
                    return;
                }

                setStep(prev => prev + 1)
                
                
            }}>
                <input type="hidden" name="step" value={step} />
                {step === 1 && (
                    <>
                        <p>
                            <label htmlFor="">
                                <input type="text" name="name" id="name" placeholder="adınız" />
                            </label> <br />
                            {errorsState?.errors?.name && (<small className="text-red-500">{errorsState?.errors?.name}</small>)}
                        </p>
                        <p>
                            <label htmlFor="">
                                <input type="text" name="surname" id="surname" placeholder="soyadınız" />
                            </label>
                            {errorsState?.errors?.surname && (<small className="text-red-500">{errorsState?.errors?.surname}</small>)}
                        </p> 
                        <p>
                            <label htmlFor="">
                                <input type="number" name="phone" id="phone" placeholder="telefon numaranız" />
                            </label>
                            {errorsState?.errors?.phone && (<small className="text-red-500">{errorsState?.errors?.phone}</small>)}
                        </p> 
                        <p>
                            <label htmlFor="">
                                <input type="number" name="tcno" id="tcno" placeholder="tc numaranız" />
                            </label>
                            {errorsState?.errors?.tcno && (<small className="text-red-500">{errorsState?.errors?.tcno}</small>)}
                        </p>
                        <p>
                            <label htmlFor="">
                                <input type="date" name="dogumTarihi" id="dogumTarihi" placeholder="Doğum tarihi" />
                            </label>
                        </p>
                    </>
                )}
                {step === 2 && (
                    <input type="text" name="test" placeholder="TEST" />
                )}


                <button>{step === 4 ? "Kaydet" : "İlerle"}</button>
            </form>
        </>
    )
}