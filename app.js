(() => {
  const button = document.getElementById('copy-button');
  const status = document.getElementById('status');
  const prompt = window.FANDOM_PROMPT;

  async function copy() {
    try {
      await navigator.clipboard.writeText(prompt);
      return true;
    } catch (error) {
      const field = document.createElement('textarea');
      field.value = prompt;
      field.style.position = 'fixed';
      field.style.top = '-9999px';
      document.body.appendChild(field);
      field.focus();
      field.select();
      let success = false;
      try { success = document.execCommand('copy'); }
      catch (e) { success = false; }
      field.remove();
      return success;
    }
  }

  button.addEventListener('click', async () => {
    if (await copy()) {
      status.textContent = '복사 완료! ChatGPT로 이동해서 붙여넣기 해줘 ♡';
      button.textContent = '복사 완료 ✓';
    } else {
      status.textContent = '복사가 차단됐어. 다른 브라우저에서 다시 시도해 줘.';
    }
  });
})();
