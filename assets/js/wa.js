document.addEventListener('DOMContentLoaded', function () {
    var form = document.getElementById('contact-form-main');
    var successMessage = document.getElementById('success');
    var errorMessage = document.getElementById('error');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        // Mendapatkan nilai dari elemen-elemen form
        var name = document.getElementById('name').value;
        var radioAttend = document.getElementById('attend').checked;
        var what = document.getElementById('what').value;
        var guestSelect = document.querySelector('select[name="guest"]');
        var selectedGuest = guestSelect.options[guestSelect.selectedIndex].text;

        // Menentukan nomor tujuan berdasarkan pilihan guest
        var phoneNumber = '';
        if (selectedGuest === 'Nadia Anugrantika') {
            phoneNumber = '6282260717254';
        } else if (selectedGuest === 'Saiful Miqdar') {
            phoneNumber = '6283871259489';
        }

        // Menentukan pesan berdasarkan pilihan radio
        var message = radioAttend ? 'Ya, saya bisa datang' : 'Maaf, Saya tidak bisa datang';

        // Menyusun URL untuk API WhatsApp
        var whatsappURL = 'https://wa.me/' + phoneNumber + '?text=' + encodeURIComponent('Nama : ' + '*' + name + '*' + '%0A' + message + '%0A%0A' + what);

        // Simulasi pengiriman pesan (misalnya dengan membuka jendela baru atau mengarahkan ke halaman)
        window.location.href = whatsappURL;

        // Tidak menampilkan pesan sukses atau error
    });
});
