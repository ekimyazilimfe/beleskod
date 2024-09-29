"use client"
import { useEffect, useState } from "react";
import EgitimKategorileri from "@/data/egitimKategorileri.json"
import Egitimler from "@/data/egitimler.json"
import { BasvuruYapAksiyonu } from "@/action/basvuru";
import {useFormState} from "react-dom"

export default function Basvuru() {
    const [state, action] = useFormState(BasvuruYapAksiyonu, null);
    const [secilenBolum,setSecilenBolum] = useState("");
    const [filtrelenmisEgitimler, setFiltrelenmisEgitimler] = useState([]);
    const [secilenEgitimId, setSecilenEgitimId] = useState("");
    const [secilenEgitim, setSecilenEgitim] = useState({});

    const handleBolumChange = (event) => {
      const  secilenKategoriId = event.target.value;
      setSecilenBolum(secilenKategoriId);
    }

    const handleEgitimChange = (event) => {
        setSecilenEgitimId(event.target.value);
    }

    useEffect(() => {
        if(secilenEgitimId){
            const secilenEgitimObj = Egitimler.find(egitim => egitim.id === parseInt(secilenEgitimId));
            setSecilenEgitim(secilenEgitimObj);
        }

    }, [secilenEgitimId])
    
    useEffect(()=> {
        setFiltrelenmisEgitimler(
            Egitimler.filter(x => x.kategoriId === parseInt(secilenBolum))
        )

    }, [secilenBolum])


    return (
        <>
            <h1>Başvuru Sayfası</h1>
            <form action={action}>
                <p>
                    <label htmlFor="">
                        <input type="text" name="name" id="name" placeholder="adınız" />
                    </label> <br />
                    {state?.errors?.name && (<small className="text-red-500">{state?.errors?.name}</small>)}
                </p>
                <p>
                    <label htmlFor="">
                        <input type="text" name="surname" id="surname" placeholder="soyadınız" />
                    </label>
                    {state?.errors?.surname && (<small className="text-red-500">{state?.errors?.surname}</small>)}
                </p> 
                <p>
                    <label htmlFor="">
                        <input type="number" name="phone" id="phone" placeholder="telefon numaranız" />
                    </label>
                    {state?.errors?.phone && (<small className="text-red-500">{state?.errors?.phone}</small>)}
                </p> 
                <p>
                    <label htmlFor="">
                        <input type="number" name="tcno" id="tcno" placeholder="tc numaranız" />
                    </label>
                    {state?.errors?.tcno && (<small className="text-red-500">{state?.errors?.tcno}</small>)}
                </p>


                <p>
                    <label htmlFor="bolum">bölüm seç</label>
                    <select value={secilenBolum} id="bolum" name="bolum" onChange = {handleBolumChange} >
                        <option value="">LÜTFEN SEÇİNİZ</option>
                        {EgitimKategorileri.map(x => (
                            <option key={x.id} value={x.id}>{x.adi}</option>
                        ))}
                    </select>
                </p>

                <p>
                    <label htmlFor="egitim">eğitim seç</label>
                    <select onChange={handleEgitimChange} id="egitim" name="egitim">
                        <option value="">LÜTFEN SEÇİNİZ</option>
                        {filtrelenmisEgitimler.map(egitim => (
                            <option key={egitim.id} value={egitim.id}>{egitim.adi}</option>
                        ))}
                    </select>
                </p>

                <p>
                    <label htmlFor="katilimTercihi">eğitim katılım tercihi</label>
                    <select id="katilim" name="katilim">
                        {secilenEgitim?.isOnline && (
                            <option value="ONLINE">ONLINE</option>
                        )}
                        {secilenEgitim?.isOffline && (
                            <option value="OFFLINE">YÜZ YÜZE</option>
                        )}
                    </select>
                </p>


                <button>Formu Gönder</button>
            </form>
        </>
    )
}