const $=id=>document.getElementById(id);
let progress=82;
let done=8;
const loginPage=$('loginPage'),app=$('app'),loginError=$('loginError');

function showApp(name){
  loginPage.classList.add('hidden');
  app.classList.remove('hidden');
  const clean=name||'Andi';
  ['welcomeName','sideName','profileName'].forEach(id=>$(id).textContent=clean);
  const initial=clean.charAt(0).toUpperCase();
  ['sideAvatar','topAvatar','profileAvatar'].forEach(id=>$(id).textContent=initial);
  $('today').textContent=new Date().toLocaleDateString('id-ID',{day:'numeric',month:'long',year:'numeric'});
  updateProgress();
}
$('loginForm').addEventListener('submit',e=>{
  e.preventDefault();
  const username=$('username').value.trim();
  const password=$('password').value;
  if((username==='siswa'||username==='andi')&&password==='123456'){
    localStorage.setItem('educonnectUser',username==='andi'?'Andi':'Siswa');
    showApp(username==='andi'?'Andi':'Siswa');
    loginError.textContent='';
  }else loginError.textContent='Username atau password salah. Gunakan akun demo di bawah.';
});
$('showPassword').onclick=()=>{
  $('password').type=$('password').type==='password'?'text':'password';
  $('showPassword').textContent=$('password').type==='password'?'Lihat':'Sembunyikan';
};
$('logoutBtn').onclick=()=>{
  localStorage.removeItem('educonnectUser');
  app.classList.add('hidden');
  loginPage.classList.remove('hidden');
  $('password').value='';
  $('username').value='';
  toast('Kamu berhasil keluar dari EduConnect.');
};
function updateProgress(){
  $('statDone').textContent=done;
  $('statProgress').textContent=progress+'%';
  $('circleText').textContent=progress+'%';
  $('bigPercent').textContent=progress+'%';
  $('progressDone').textContent=done+' / 10';
  $('targetText').textContent=done+' dari 10';
}
function completeMaterial(name){
  if(progress<100){progress=Math.min(100,progress+3);done=Math.min(10,done+1);updateProgress();}
  toast('Materi '+name+' dibuka. Progress diperbarui menjadi '+progress+'%.');
}
function openCourse(name){
  $('modalCourseTitle').textContent=name;
  $('modalCourseText').textContent='Selamat datang di kelas '+name+'. Materi, latihan, dan aktivitas pembelajaran tersedia di sini.';
  $('courseModal').classList.remove('hidden');
}
function closeCourse(){$('courseModal').classList.add('hidden')}
$('courseModal').addEventListener('click',e=>{if(e.target.id==='courseModal')closeCourse()});
function toast(message){
  const t=$('toast');t.textContent=message;t.classList.add('show');
  clearTimeout(window.toastTimer);window.toastTimer=setTimeout(()=>t.classList.remove('show'),2800);
}
document.querySelectorAll('.side-nav a').forEach(a=>{
  a.addEventListener('click',()=>{
    document.querySelectorAll('.side-nav a').forEach(x=>x.classList.remove('active'));
    a.classList.add('active');
    $('pageTitle').textContent=a.querySelector('span').textContent;
    document.querySelector('.sidebar').classList.remove('open');
  });
});
$('menuBtn').onclick=()=>document.querySelector('.sidebar').classList.toggle('open');
document.querySelectorAll('.filter').forEach(btn=>btn.onclick=()=>{
  document.querySelectorAll('.filter').forEach(x=>x.classList.remove('active'));
  btn.classList.add('active');
});
const saved=localStorage.getItem('educonnectUser');
if(saved)showApp(saved);