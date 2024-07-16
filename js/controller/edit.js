export function isiData(results) {  
  const inputMapping = [
      { id: 'pasienName', path: 'pasienName' },
      { id: 'gender', path: 'gender' },
      { id: 'ttl', path: 'ttl' },
      { id: 'status', path: 'status' },
      { id: 'phoneNumber', path: 'phonenumber' },
      { id: 'alamat', path: 'alamat' },
      { id: 'doctorName', path: 'doctor.name' },
      { id: 'diagnosis', path: 'medicalRecord.diagnosa' }
  ];

  inputMapping.forEach(({ id, path }) => {
      const inputElement = document.getElementById(id);
      const value = getNestedValue(results, path);
      if (inputElement) {
          inputElement.value = value;
      }
  });
}
  
function getNestedValue(obj, path) {
    return path.split('.').reduce((value, key) => (value && value[key]) ? value[key] : '', obj);
}
