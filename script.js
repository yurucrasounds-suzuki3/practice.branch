document.addEventListener('DOMContentLoaded', ()=>{
  const btn = document.getElementById('showTasks');
  const tasks = document.getElementById('tasks');
  btn && btn.addEventListener('click', ()=>{
    if(tasks.classList.contains('hidden')){
      tasks.classList.remove('hidden');
      btn.textContent = '練習タスクを隠す';
 changemessage
    } else { 
        
=======
    } else {

     main
      tasks.classList.add('hidden');
      btn.textContent = '練習タスクを表示';
    }
  });
});
