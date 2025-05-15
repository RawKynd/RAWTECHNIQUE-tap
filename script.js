function showTab(tabId) {
  const contents = document.querySelectorAll('.tab-content');
  contents.forEach(c => c.classList.remove('active'));
  document.getElementById(tabId).classList.add('active');
}