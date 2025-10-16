document.addEventListener('DOMContentLoaded', function(){
  const yearEl = document.getElementById('year');
  if(yearEl) yearEl.textContent = new Date().getFullYear();

  const form = document.getElementById('waitlist');
  if(!form) return;

  form.addEventListener('submit', async function(e){
    e.preventDefault();
    const input = form.querySelector('#email');
    const email = (input && input.value) ? input.value.trim() : '';
    if(!email) return input.focus();

    // simple client-side validation
    const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if(!valid){
      input.setCustomValidity('Please enter a valid email');
      input.reportValidity();
      return;
    }

    // UX: disable while 'submitting'
    const btn = form.querySelector('button');
    btn.disabled = true;
    btn.textContent = 'Thanks!';

    // No backend in this repo — emulate success and store in localStorage
    try{
      const key = 'squadspace_waitlist_emails';
      const stored = JSON.parse(localStorage.getItem(key) || '[]');
      if(!stored.includes(email)) stored.push(email);
      localStorage.setItem(key, JSON.stringify(stored));
      // small confetti-ish effect (CSS fallback)
      form.classList.add('submitted');
    }catch(err){
      console.warn('Could not save email', err);
    }

    setTimeout(()=>{
      btn.disabled = false;
      btn.textContent = 'Notify me';
      if(input) input.value = '';
    }, 1800);
  });
});
