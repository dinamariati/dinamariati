function changeBackground(event, sectionId) {
  // Menghapus kelas 'active' dari semua section
  document.querySelectorAll('.section').forEach(section => {
    section.classList.remove('active');
  });

  // Menghapus kelas 'active' dari semua tombol
  document.querySelectorAll('.nav-link').forEach(link => {
    link.classList.remove('active');
  });

  // Menambahkan kelas 'active' ke section yang dipilih
  document.getElementById(sectionId).classList.add('active');
  
  // Menambahkan kelas 'active' ke tombol yang diklik
  event.target.classList.add('active');
}
