(() => {
  const prompt = window.FANDOM_PROMPT;
  const startLink = document.getElementById('start-link');
  const bottomStartLink = document.getElementById('bottom-start-link');
  const copyButton = document.getElementById('copy-button');
  const dialogCopy = document.getElementById('dialog-copy');
  const dialog = document.getElementById('prompt-dialog');
  const viewPrompt = document.getElementById('view-prompt');
  const closeDialog = document.getElementById('close-dialog');
  const content = document.getElementById('prompt-content');
  const toast = document.getElementById('toast');
  let toastTimer;

  const launchUrl = 'https://chatgpt.com/?prompt=' + encodeURIComponent(window.FANDOM_LAUNCH_PROMPT);
  startLink.href = launchUrl;
  bottomStartLink.href = launchUrl;
  content.textContent = prompt;

  function showToast(message) {
    toast.textContent = message;
    toast.classList.add('visible');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove('visible'), 3200);
  }

  async function copyPrompt() {
    try {
      await navigator.clipboard.writeText(prompt);
      showToast('프롬프트 복사 완료! ChatGPT에 붙여 넣어 줘 ♡');
    } catch {
      const area = document.createElement('textarea');
      area.value = prompt;
      area.setAttribute('readonly', '');
      area.style.position = 'fixed';
      area.style.left = '-9999px';
      document.body.appendChild(area);
      area.select();
      const success = document.execCommand('copy');
      area.remove();
      showToast(success ? '프롬프트 복사 완료! ♡' : '복사가 차단됐어. 프롬프트 보기를 눌러 직접 복사해 줘.');
    }
  }

  copyButton.addEventListener('click', copyPrompt);
  dialogCopy.addEventListener('click', copyPrompt);
  viewPrompt.addEventListener('click', () => dialog.showModal());
  closeDialog.addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', event => { if (event.target === dialog) dialog.close(); });

  for (const link of [startLink, bottomStartLink]) {
    link.addEventListener('click', () => {
      showToast('입력창이 비어 있으면 돌아와서 프롬프트 복사를 눌러 줘!');
    });
  }
})();