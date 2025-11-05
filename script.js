// Petit script pour la démo
document.addEventListener('DOMContentLoaded', () => {
  const p = document.getElementById('tagline');
  if (p) p.textContent += " (v0)";
  // TODO: extraire ce message depuis config.js plus tard
});

// TODO: branch login - gérer la soumission
function fakeLogin(email) {
  return email && email.includes('@');
}
