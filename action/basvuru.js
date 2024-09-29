"use server"

export async function BasvuruYapAksiyonu(values){
    // const formObj = Object.fromEntries(formData);
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
    
    let errors = {}
    if(values.step == 1){
        errors = {
            name: !values.name ? "İsim boş olamaz" : null,
            surname: !values.surname ? "Soyad boş olamaz" : null,
            phone: !values.phone ? "Telefon alanı boş olamaz" : null,
            tcno: !values.tcno ? "TCNO alanı boş olamaz" : null
        };

        for (const key in errors) {
            if (Object.prototype.hasOwnProperty.call(errors, key)) {
                const element = errors[key];
                if(element) return { errors }
                
            }
        }
    }
    
    console.log("test");
    
    
}


