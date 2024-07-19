import { addInner } from "https://bukulapak.github.io/element/process.js";
// import { getRandomColor, getRandomColorName } from "https://bukulapak.github.io/image/process.js";
import { isiTabel } from "../temp/table.js";
export function isiTablePasien(results) {
    results.forEach(isiRow);
    console.log(results);
}
function isiRow(value) {
    let content =
        isiTabel.replace("#NAMA#", value.pasienName ? value.pasienName : "Nama tidak tersedia")
            .replace("#GENDER#", value.gender ? value.gender : "Gender tidak tersedia")
            .replace("#USIA#", value.usia ? value.usia : "Usia tidak tersedia")
            .replace("#NOHP#", value.phonenumber ? value.phonenumber : "No.HP tidak tersedia")
            .replace("#ALAMAT#", value.alamat ? value.alamat : "Alamat tidak tersedia")
            .replace("#DOCTOR#", value.doctor.name ? value.doctor.name : "Nama dokter tidak tersedia")
            .replace("#DSPECIALITY#", value.doctor.specialty ? value.doctor.specialty : "Gender tidak tersedia") 
            .replace("#DCONTACT#", value.doctor.contact ? value.doctor.contact : "Kontak dokter tidak tersedia")
            .replace("#VISITDATE#", value.medicalRecord.visitdate ? value.medicalRecord.visitdate : "Tanggal Kunjungan tidak tersedia")
            .replace("#DIAGNOSIS#", value.medicalRecord.diagnosis ? value.medicalRecord.diagnosis : "Diagnosis tidak tersedia")
            .replace("#TREATMENT#", value.medicalRecord.treatment ? value.medicalRecord.treatment : "Treatment tidak tersedia")
            .replace("#NOTES#", value.medicalRecord.notes)
            .replace("#IDEDIT#", value._id)
            .replace("#IDHAPUS#", value._id);
            // .replace("#WARNA#", getRandomColor());
            // // .replace(/#WARNALOGO#/g, getRandomColorName());

    addInner("iniTabel", content);
}