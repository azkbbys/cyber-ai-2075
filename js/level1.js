document.getElementById('content').innerHTML = `
    <h2>协议层 1/20</h2>
    <p>请输入通过本层的密码</p>
    <input type="text" id="password-input" autofocus>
`;

document.getElementById('password-input').addEventListener('input', (e) => {
    if (e.target.value === '通过本层的密码') {
        window.location.href = 'index.html?key=level2';
    }
});