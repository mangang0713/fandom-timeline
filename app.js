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

  // 비공식 ?prompt= 링크 대신 ChatGPT 홈을 엽니다.
  // 사용자는 복사된 상세 프롬프트를 새 채팅에 붙여 넣습니다.
  startLink.href = 'https://chatgpt.com/';
  bottomStartLink.href = 'https://chatgpt.com/';
  content.textContent = prompt;

  function showToast(message) {
    toast.textContent = message;
    toast.classList.add('visible');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove('visible'), 3600);
  }

  async function copyPrompt() {
    try {
      await navigator.clipboard.writeText(prompt);
      showToast('전체 프롬프트 복사 완료! ChatGPT 채팅창에 붙여 넣어 줘 ♡');
      return true;
    } catch {
      // 일부 모바일 웹뷰 및 브라우저의 Clipboard API 제한 대비
      const area = document.createElement('textarea');
      area.value = prompt;
      area.setAttribute('readonly', '');
      area.style.position = 'fixed';
      area.style.left = '-9999px';
      document.body.appendChild(area);
      area.select();
      const success = document.execCommand('copy');
      area.remove();
      showToast(success
        ? '전체 프롬프트 복사 완료! ChatGPT에 붙여 넣어 줘 ♡'
        : '복사가 차단됐어. 프롬프트 보기를 눌러 직접 복사해 줘.');
      return success;
    }
  }

  copyButton.addEventListener('click', copyPrompt);
  dialogCopy.addEventListener('click', copyPrompt);
  viewPrompt.addEventListener('click', () => dialog.showModal());
  closeDialog.addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', (event) => {
    if (event.target === dialog) dialog.close();
  });

  // 클릭 시 복사를 시도하면서 새 탭에 ChatGPT 홈을 엽니다.
  // 직접 붙여 넣으므로 별도의 축약 프롬프트가 먼저 실행되지 않습니다.
  for (const link of [startLink, bottomStartLink]) {
    link.addEventListener('click', () => { void copyPrompt(); });
  }
})();
