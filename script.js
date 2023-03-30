onload = function() {
  cv = document.querySelector('#cvl');
  ctx = cv.getContext('2d')
  if(!!ctx) {
    s = 1.5 * Math.PI,
    tc = pct = 0,
    btn = document.querySelector('#lbtn');
    lnk = document.querySelector('link[rel*="icon"]');
    ctx.lineWidth = 2;
    ctx.strokeStyle = 'fuchsia';
    if(btn.disabled) btn.removeAttribute('disabled');
    btn.addEventListener('click', function() {
      tc = setInterval(updateLoader, 60);
      this.textContent = 'Loader';
      this.style.backgroundColor = '#999';
      this.setAttribute('disabled', '');
    });
  }

  };

  function updateLoader() {
    ctx.clearRect(0, 0, 16, 16);
    ctx.beginPath();
    ctx.arc(8, 8, 6, s, (pct * 2 * Math.PI / 100 + s));
    ctx.stroke();

    lnk.href = cv.toDataURL('image/png');
    if(pct === 100) {
      clearInterval(tc);
      btn.textContent = 'Loaded';
      btn.style.backgroundColor = 'limegreen';
      return;
    }

   pct++;
  }
