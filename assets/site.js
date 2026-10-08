// CVSim site: placeholder for figures not yet added, and the "copy" button.
(function () {
  // A figure whose image file is missing shows its expected file name instead.
  document.querySelectorAll('figure.fig img').forEach(function (img) {
    var mark = function () { img.closest('figure').classList.add('missing'); };
    if (img.complete && img.naturalWidth === 0) { mark(); }
    img.addEventListener('error', mark);
  });

  // Copy the acknowledgement sentence to the clipboard.
  document.querySelectorAll('button.copy').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var text = document.getElementById(btn.dataset.target).innerText.trim();
      var status = btn.nextElementSibling;
      var done = function () { status.textContent = btn.dataset.done; setTimeout(function () { status.textContent = ''; }, 2500); };
      if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(text).then(done, function () { status.textContent = text; });
      } else {
        var ta = document.createElement('textarea');
        ta.value = text; document.body.appendChild(ta); ta.select();
        try { document.execCommand('copy'); done(); } catch (e) { status.textContent = text; }
        document.body.removeChild(ta);
      }
    });
  });
})();
