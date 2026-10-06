let progress=82;
document.getElementById('loginBtn').onclick=()=>{
  const name=prompt('Masukkan nama pengguna:');
  if(name) alert('Selamat datang di EduConnect, '+name+'!');
};
function openClass(name){alert('Kelas '+name+' dipilih.');}
function finish(name){
  progress=Math.min(100,progress+3);
  document.getElementById('percent').textContent=progress+'%';
  let d=parseInt(document.getElementById('done').textContent);
  document.getElementById('done').textContent=d+1;
  alert('Materi '+name+' berhasil dibuka. Progress diperbarui.');
}