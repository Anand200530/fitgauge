document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('whr-form');
    const resultSection = document.getElementById('result');
    const ratioValue = document.getElementById('ratio-value');
    const riskBadge = document.getElementById('risk-badge');
    const riskDescription = document.getElementById('risk-description');
    const riskIndicator = document.getElementById('risk-indicator');

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        const gender = document.querySelector('input[name="gender"]:checked').value;
        const waist = parseFloat(document.getElementById('waist').value);
        const hip = parseFloat(document.getElementById('hip').value);
        const waistUnit = document.querySelector('input[name="waist-unit"]:checked').value;
        const hipUnit = document.querySelector('input[name="hip-unit"]:checked').value;

        if (isNaN(waist) || isNaN(hip) || waist <= 0 || hip <= 0) {
            alert('Please enter valid positive numbers for waist and hip measurements.');
            return;
        }

        // Convert to cm if in inches
        let waistCm = waist;
        let hipCm = hip;

        if (waistUnit === 'in') {
            waistCm = waist * 2.54;
        }
        if (hipUnit === 'in') {
            hipCm = hip * 2.54;
        }

        // Calculate WHR
        const whr = waistCm / hipCm;
        const whrRounded = Math.round(whr * 100) / 100;

        // Determine risk category
        let risk, riskClass, description;

        if (gender === 'male') {
            if (whr < 0.9) {
                risk = 'Low Risk';
                riskClass = 'low-risk';
                description = 'Your ratio indicates a lower risk of cardiovascular disease and other health conditions.';
            } else if (whr >= 0.9 && whr <= 0.99) {
                risk = 'Moderate Risk';
                riskClass = 'moderate-risk';
                description = 'Your ratio indicates a moderate risk. Consider lifestyle modifications for better health.';
            } else {
                risk = 'High Risk';
                riskClass = 'high-risk';
                description = 'Your ratio indicates a higher risk of cardiovascular disease. Consult a healthcare provider.';
            }
        } else {
            if (whr < 0.85) {
                risk = 'Low Risk';
                riskClass = 'low-risk';
                description = 'Your ratio indicates a lower risk of cardiovascular disease and other health conditions.';
            } else if (whr >= 0.85 && whr <= 0.94) {
                risk = 'Moderate Risk';
                riskClass = 'moderate-risk';
                description = 'Your ratio indicates a moderate risk. Consider lifestyle modifications for better health.';
            } else {
                risk = 'High Risk';
                riskClass = 'high-risk';
                description = 'Your ratio indicates a higher risk of cardiovascular disease. Consult a healthcare provider.';
            }
        }

        // Update UI
        ratioValue.textContent = whrRounded.toFixed(2);
        riskBadge.textContent = risk;
        riskDescription.textContent = description;

        // Reset and set risk class
        riskIndicator.className = 'risk-indicator';
        riskIndicator.classList.add(riskClass);

        // Show result
        resultSection.classList.remove('hidden');
        resultSection.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    });
});
