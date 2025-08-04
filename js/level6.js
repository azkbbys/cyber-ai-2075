document.getElementById('content').innerHTML = `
    <h2>协议层 6/20</h2>
    <pre id="pi-digits" style="text-align: left; max-width: 100%; overflow: auto;">loading...</pre>
`;

fetch('https://files.pilookup.com/pi/1000.txt')
    .then(response => response.text())
    .then(data => {
        // 每100位换行，保留原始空格
        const formattedData = data.substring(0, 1000)
            .replace(/(.{100})/g, '$1\n')
            .replace(/\s+/g, ' ');  // 合并多余空格
        document.getElementById('pi-digits').textContent = formattedData;
    })
    .catch(() => {
        document.getElementById('pi-digits').textContent = 
            "3.1415926535 8979323846 2643383279 5028841971 6939937510\n" +
            "5820974944 5923078164 0628620899 8628034825 3421170679\n" +
            "8214808651 3282306647 0938446095 5058223172 5359408128\n" +
            "4811174502 8410270193 8521105559 6446229489 5493038196";
    });