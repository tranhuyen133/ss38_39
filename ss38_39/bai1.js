let currentStep = 1;

function showStep(step) {
    const steps = document.querySelectorAll('.step');
    steps.forEach((s, index) => {
        if (index + 1 === step) {
            s.classList.add('active');
        } else {
            s.classList.remove('active');
        }
    });
}

function prevStep() {
    if (currentStep > 1) {
        currentStep--;
        showStep(currentStep);
    }
    updateButtons();
}

function nextStep() {
    if (currentStep < 4) {
        currentStep++;
        showStep(currentStep);
    }
    updateButtons();
}

function updateButtons() {
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    prevBtn.disabled = currentStep === 1;
    nextBtn.disabled = currentStep === 4;
}


showStep(currentStep);
updateButtons();
