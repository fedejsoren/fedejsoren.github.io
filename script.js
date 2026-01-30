// === CONFIGURATION ===
const GOAL_AMOUNT = 1_000_000;

// Update this manually when donations come in
const CURRENT_AMOUNT = 137; // €

// =====================

const progressBar = document.getElementById("progress-bar");
const currentAmountEl = document.getElementById("current-amount");

const percentage = Math.min((CURRENT_AMOUNT / GOAL_AMOUNT) * 100, 100);

progressBar.style.width = percentage + "%";
currentAmountEl.textContent = CURRENT_AMOUNT.toLocaleString();

