export function isiData(results) {  
  const inputMapping = [
      { id: 'nama', path: 'pasienName' },
      { id: 'gender', path: 'gender' },
      { id: 'ttl', path: 'ttl' },
      { id: 'status', path: 'status' },
      { id: 'phone_number', path: 'phone_number' },
      { id: 'alamat', path: 'alamat' },
      { id: 'doctor_name', path: 'doctor.name' },
      { id: 'doctor_specialty', path: 'doctor.specialty' },
      { id: 'doctor_contact', path: 'doctor.contact' },
      { id: 'medicalrecord_visitdate', path: 'medicalRecord.visitdate' },
      { id: 'medicalrecord_doctor', path: 'medicalRecord.doctor' },
      { id: 'medicalrecord_diagnosis', path: 'medicalRecord.diagnosis' },
      { id: 'medicalrecord_treatment', path: 'medicalRecord.treatment' },
      { id: 'medicalrecord_notes', path: 'medicalRecord.notes' }
  ];

  inputMapping.forEach(({ id, path }) => {
      const inputElement = document.getElementById(id);
      const value = getNestedValue(results, path);
      if (inputElement) {
          inputElement.value = value;
      }
  });
}
  
function getNestedValue(obj, path, index, property) {
    const value = path.split('.').reduce((value, key) => (value && value[key]) ? value[key] : '', obj);
    // console.log(`Value at path ${path}:`, value);
  
    if (Array.isArray(value) && value.length > index && value[index].hasOwnProperty(property)) {
      return value[index][property];
    }
  
    return value;
}