const urlParams = new URLSearchParams(window.location.search);
const pasienId = urlParams.get('pasienId');

export let urlPUT = "https://ws-rumahsakit-2e1eb71f14e2.herokuapp.com/update/" + pasienId;

export function AmbilResponse(result) {
    console.log(result); //menampilkan response API pada console
    alert(result.message); //menampilkan response API pada alert
    window.location.href = "index.html"; //reload halaman setelah klik ok pada alert
}