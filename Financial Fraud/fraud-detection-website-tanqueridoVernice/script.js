function getValue() {
    var A = 1.936 * (document.getElementById('cash').value / document.getElementById('cliabilities').value);
    var B = 4.766 * (document.getElementById('tliabilities').value / document.getElementById('tassets').value);
    var C = 0.029 * (document.getElementById('sales').value / document.getElementById('fassets').value);
    var D = 4.263 * (document.getElementById('inventory').value / document.getElementById('tassets').value);
    var KG = A + B + C + D - 5.768;
    var P = 1 / (1 + (Math.exp(-KG)));
    var F;


    if (P >= 0.5) {
        F = 'Fraudulent';
    }
    else F = 'Non-Fraudulent';

    document.getElementById('KGscore').textContent = KG.toFixed(2)
    document.getElementById('Prob').textContent = (P * 100).toFixed(2) + '%'
    document.getElementById('Fraud').textContent = F
}

