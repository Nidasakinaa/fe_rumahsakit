import { addInner } from "https://bukulapak.github.io/element/process.js";
// import { getRandomColor, getRandomColorName } from "https://bukulapak.github.io/image/process.js";
import { isiTabel } from "../temp/table.js";
export function isiTablePasien(results) {
    results.forEach(isiRow);
    console.log(results);
}
function isiRow(value) {
    let content =
        isiTabel.replace("#NAMA#", value.pasienName)
            .replace("#GENDER#", value.gender)
            .replace("#USIA#", value.usia)
            .replace("#NOHP#", value.phonenumber)
            .replace("#ALAMAT#", value.alamat)
            .replace("#DOCTOR#", value.doctor.name)
            .replace("#DSPECIALITY#", value.doctor.specialty) 
            .replace("#DCONTACT#", value.doctor.contact)
            .replace("#VISITDATE#", value.medicalRecord.visitdate)
            .replace("#DIAGNOSIS#", value.medicalRecord.diagnosis)
            .replace("#TREATMENT#", value.medicalRecord.treatment)
            .replace("#NOTES#", value.medicalRecord.notes)
            .replace("#IDEDIT#", value._id)
            .replace("#IDHAPUS#", value._id);
            // .replace("#WARNA#", getRandomColor());
            // // .replace(/#WARNALOGO#/g, getRandomColorName());

    addInner("iniTabel", content);
}