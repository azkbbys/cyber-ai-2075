// Check if we're on the error page
if (window.location.pathname.endsWith('err.html')) {
    // Generate random error codes
    const errorCode = document.getElementById('error-code');
    const chars = "01!@#$%^&*()_+-=[]{}|;':\",./<>?\\";
    const rows = Math.floor(document.getElementById('error-screen').clientHeight / 12);
    const cols = Math.floor(document.getElementById('error-screen').clientWidth / 8);
    
    for (let i = 0; i < rows; i++) {
        let line = '';
        for (let j = 0; j < cols; j++) {
            line += chars[Math.floor(Math.random() * chars.length)];
        }
        errorCode.innerHTML += line + '<br>';
    }
    
    // Update error count
    let errorCount = getCookie('errorCount') || 0;
    errorCount = parseInt(errorCount) + 1;
    setCookie('errorCount', errorCount, 365);
    document.getElementById('error-count').textContent = `这是你第${errorCount}次被AI困在虚拟牢笼`;
    
    // Redirect back after 3 seconds
    setTimeout(() => {
        window.location.href = 'index.html' + (getCookie('lastLevel') || '');
    }, 3000);
} 
// Check if we're on the end page
else if (window.location.pathname.endsWith('end.html')) {
    document.addEventListener('DOMContentLoaded', () => {
        document.getElementById('restart-btn').addEventListener('click', () => {
            // Clear all cookies
            document.cookie.split(";").forEach((c) => {
                document.cookie = c.replace(/^ +/, "").replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/");
            });
            window.location.href = 'index.html';
        });
        
        // GitHub button event
        document.getElementById('github-btn').addEventListener('click', () => {
            window.open('https://github.com/azkbbys/cyber-ai-2075', '_blank');
        });
    });
}
// Main page logic
else {
    document.addEventListener('DOMContentLoaded', () => {
        const urlParams = new URLSearchParams(window.location.search);
        const level = urlParams.get('key');
        
        // Check for saved level in cookie
        const savedLevel = getCookie('currentLevel');
        if (!level && savedLevel) {
            window.location.href = `index.html?key=${savedLevel}`;
            return;
        }
        
        // Set cookie for current level
        if (level) {
            const savedLevel = getCookie('currentLevel');
            if (savedLevel && !isValidLevelTransition(savedLevel, level)) {
                window.location.href = 'err.html';
                return;
            }
            setCookie('currentLevel', level, 365);
            setCookie('lastLevel', `?key=${level}`, 365);
        } else {
            // First visit - show start screen
            showStartScreen();
            return;
        }
        
        // Load appropriate level
        switch(level) {
            case 'level1':
                loadScript('js/level1.js');
                break;
            case 'level2':
                loadScript('js/level2.js');
                break;
            case 'level3':
                loadScript('js/level3.js');
                break;
            case 'birthday':
                loadScript('js/level4.js');
                break;
            case '00FFFF':
                loadScript('js/level5.js');
                break;
            case 'truth':
                loadScript('js/level6.js');
                break;
            case 'pi':
                loadScript('js/level7.js');
                break;
            case 'roman':
                loadScript('js/level8.js');
                break;
            case 'hack':
                loadScript('js/level9.js');
                break;
            case 'notfound':
                loadScript('js/level10.js');
                break;
            case 'elf':
                loadScript('js/level11.js');
                break;
            case 'shakespeare':
                loadScript('js/level12.js');
                break;
            case 'command':
                loadScript('js/level13.js');
                break;
            case 'einstein':
                loadScript('js/level14.js');
                break;
            case 'smile':
                loadScript('js/level15.js');
                break;
            case 'get':
                loadScript('js/level16.js');
                break;
            case 'success':
                loadScript('js/level17.js');
                break;
            case 'sql':
                loadScript('js/level18.js');
                break;
            case 'year_2075':
                loadScript('js/level19.js');
                break;
            case 'badfood':
                loadScript('js/level20.js');
                break;
            default:
                window.location.href = 'err.html';
        }
    });
}

function showStartScreen() {
    const content = document.getElementById('content');
    content.innerHTML = `
        <h1>VIBE-2075 虚拟牢笼</h1>
        <button id="start-btn">开始破解</button>
    `;
    
    // 显示开场剧情
    setTimeout(() => {
        showDialog(
            '系统警报',
            '警告！检测到未授权访问！\n\n你已被AI主脑VIBE-2075标记为威胁目标。\n\n这个虚拟牢笼是我们为你准备的最后归宿。\n\n不过...如果你真如传闻中那么厉害，或许能破解这20层协议防火墙。\n\n但别抱太大希望，上一个尝试的黑客现在还在404层徘徊。',
            () => {
                document.getElementById('start-btn').style.display = 'block';
            }
        );
        document.getElementById('start-btn').style.display = 'none';
    }, 1000);
    
    document.getElementById('start-btn').addEventListener('click', () => {
        window.location.href = 'index.html?key=level1';
    });
}

function loadScript(src) {
    const script = document.createElement('script');
    script.src = src;
    document.body.appendChild(script);
}

function setCookie(name, value, days) {
    const d = new Date();
    d.setTime(d.getTime() + (days * 24 * 60 * 60 * 1000));
    const expires = "expires=" + d.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
}

function getCookie(name) {
    const cookieName = name + "=";
    const decodedCookie = decodeURIComponent(document.cookie);
    const cookieArray = decodedCookie.split(';');
    for (let i = 0; i < cookieArray.length; i++) {
        let cookie = cookieArray[i];
        while (cookie.charAt(0) === ' ') {
            cookie = cookie.substring(1);
        }
        if (cookie.indexOf(cookieName) === 0) {
            return cookie.substring(cookieName.length, cookie.length);
        }
    }
    return "";
}

function isValidLevelTransition(current, next) {
    const levels = [
        'level1', 'level2', 'level3', 'birthday', '00FFFF',
        'truth', 'pi', 'roman', 'hack', 'notfound',
        'elf', 'shakespeare', 'command', 'einstein', 'smile',
        'get', 'success', 'sql', 'year_2075', 'badfood'
    ];
    const currentIndex = levels.indexOf(current);
    const nextIndex = levels.indexOf(next);
    
    return current === next || (nextIndex === currentIndex + 1);
}

function showDialog(title, content, callback) {
    const overlay = document.createElement('div');
    overlay.className = 'dialog-overlay';
    overlay.innerHTML = `
        <div class="dialog-box">
            <div class="dialog-title">${title}</div>
            <div class="dialog-content">${content}</div>
            <button class="dialog-button">确认</button>
        </div>
    `;
    document.body.appendChild(overlay);
    
    overlay.querySelector('.dialog-button').addEventListener('click', () => {
        document.body.removeChild(overlay);
        if (callback) callback();
    });
}