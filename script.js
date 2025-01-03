const passwordInput = document.getElementById('password');
const strengthBar = document.getElementById('strength-bar');
const feedbackText = document.getElementById('feedback-text');

passwordInput.addEventListener('input', () => {
    const password = passwordInput.value;
    const strength = evaluatePasswordStrength(password);

    updateStrengthBar(strength);
    updateFeedbackText(strength);
});

function evaluatePasswordStrength(password) {
    let strength = 0;

    if (password.length >= 8) strength += 1; // Minimum length requirement
    if (/[a-z]/.test(password)) strength += 1; // Lowercase letter
    if (/[A-Z]/.test(password)) strength += 1; // Uppercase letter
    if (/\d/.test(password)) strength += 1; // Digit
    if (/[@$!%*?&#]/.test(password)) strength += 1; // Special character

    return strength;
}

function updateStrengthBar(strength) {
    const strengthPercentage = (strength / 5) * 100;
    strengthBar.style.width = strengthPercentage + '%';
    if (strength <= 2) {
        strengthBar.style.backgroundColor = 'red';
    } else if (strength <= 4) {
        strengthBar.style.backgroundColor = 'orange';
    } else {
        strengthBar.style.backgroundColor = 'green';
    }
}

function updateFeedbackText(strength) {
    const messages = [
        'Very Weak',
        'Weak',
        'Medium',
        'Strong',
        'Very Strong'
    ];
    feedbackText.textContent = messages[strength - 1] || 'Start typing to see password strength';
}
// Export project files
// module.exports = { htmlContent, cssContent, jsContent };