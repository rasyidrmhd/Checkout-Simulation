Data form disimpan kedalam _local storage_ dengan _key_ "checkout_data", jadi ketika user memuat ulang atau saat berkunjung kembali, kondisi terakhir pada halaman masih tetap terjaga seperti sebelumnya.

_Local storage_ akan di _load_ saat pertama kali aplikasi dibuka. Terdapat beberapa validasi juga saat _load_ data ini, jadi user tidak akan bisa iseng memasukkan data yang aneh agar bisa skip salah satu _step_ atau yang lainnya.

Metode yang digunakan untuk menyimpan data form adalah dengan menggunakan _debounce_ setiap 2 detik setelah ada perubahan. hal ini dilakukan agar saat user sedang mengisi form pada halaman _delivery_, setiap perubahan (walau hanya 1 huruf) pada _input_ tidak akan langsung disimpan secara terus menerus dan membuat proses yang terlalu banyak.

[Checkout Simulation App](https://checkout-simulation.web.app/)

## Delivery Page

Pada `text area` _address_ ada ketentuan untuk menampilkan _counter_ angka jumlah karakter yang tersisa.

_user_ tidak akan bisa melanjutkan ke halaman _payment_ apabila semua _input_ belum terisi (kecuali _input_ _dropshipper_ dapat dikosongkan jika _dropshipper_ tidak dicentang).

## Payment Page

_Shipment_ dan _payment_ secara _default_ sudah memiliki _value_ yaitu opsi pertama pada masing-masing pilihan. jadi user dapat langsung melanjutkan atau dapat menggantinya sesuai keinginan.

## Finish Page

Pada halaman ini jika user menekan navigasi _go to homepage_ maka semua data akan di _reset_, data pada _local storage_ juga akan dihapus, lalu kembali ke halaman _delivery_.
