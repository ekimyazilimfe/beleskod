"use server"

export async function BasvuruYapAksiyonu(prevState, formData){
    const formObj = Object.fromEntries(formData);
    // console.log(formObj);

    // const errors = {}

    

    // if(!formObj.name){
    //     errors.name = "İsim boş olamaz"
    // }

    // if(!formObj.surname){
    //     errors.surname = "Soyad boş olamaz"
    // }
    
    // return {errors}


    // const response = await fetch("localhost:3000/basvurular/ekle", {
    //     method: "POST",
    //     headers: {
    //         "Content-type": "application/json"
    //     },
    //     body: JSON.stringify(formObj)
    // })

    // const fields = [
    //     { key: "name", message: "İsim boş olamaz" },
    //     { key: "surname", message: "Soyad boş olamaz" }
    // ];
    
    // const errors = {};
    
    // fields.forEach(field => {
    //     if (!formObj[field.key]) {
    //         errors[field.key] = field.message;
    //     }
    // });
    
    // return { errors };

    const errors = {
        name: !formObj.name && "İsim boş olamaz",
        surname: !formObj.surname && "Soyad boş olamaz",
        phone: !formObj.phone && "Telefon alanı boş olamaz",
        tcno: !formObj.tcno && "TCNO alanı boş olamaz"
    };
      
    return { errors };
    
}


