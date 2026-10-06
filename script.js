let progress=82;

const modal=document.getElementById('modal');
const modalTitle=document.getElementById('modalTitle');
const modalText=document.getElementById('modalText');

document.getElementById('loginBtn').onclick=()=>{
  const name=prompt('Masukkan nama pengguna:');
  if(name && name.trim()){
    alert('Selamat datang di EduConnect, '+name.trim()+'! Semangat belajar 🎓');
  }
};

function openClass(name){
  modalTitle.textContent=name;
  modalText.textContent='Kelas '+name+' siap dipelajari. Pilih Mulai Sekarang untuk membuka kelas.';
  modal.classList.remove('hidden');
}

function finish(name){
  progress=Math.min(100,progress+3);
  document.getElementById('percent').textContent=progress+'%';
  document.getElementById('heroPercent').textContent=progress+'%';
  document.getElementById('heroBar').style.width=progress+'%';
  let d=parseInt(document.getElementById('done').textContent,10);
  document.getElementById('done').textContent=d+1;
  document.getElementById('heroDone').textContent=d+1;
  modalTitle.textContent='Materi berhasil dibuka';
  modalText.textContent='Materi '+name+' berhasil dibuka. Progress belajarmu sekarang '+progress+'%.';
  modal.classList.remove('hidden');
}

function closeModal(){modal.classList.add('hidden')}
modal.addEventListener('click',(e)=>{if(e.target===modal)closeModal()});
