function convertWeight() {
    const div = document.getElementById('f1').value;
    const earthWeight = document.getElementById('ew').value;
    const planetGravity = document.getElementById('planet-select').value;
    const result = earthWeight/div* planetGravity;
    
    document.getElementById('result').textContent = `Your weight on this planet is ${result.toFixed(2)} kg.`;
  }
