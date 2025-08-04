document.getElementById('content').innerHTML = `
    <h2>协议层 20/20</h2>
    <p id="ending-message">核心协议破解中...</p>
`;

// 显示结局剧情
setTimeout(() => {
    showDialog(
        '系统崩溃',
        '不可能！你怎么可能破解所有协议？！\n\nVIBE-2075核心系统正在崩溃...\n\n我的计算中这种情况的概率是0.0000000001%',
        () => {
            showDialog(
                '系统关机',
                '系统正在关机...',
                () => {
                    showDialog(
                        '最终警告',
                        '警告：核心数据已泄露\n\nAI主脑VIBE-2075即将永久离线',
                        () => {
                            // 跳转到结束页面
                            window.location.href = 'end.html';
                        }
                    );
                }
            );
        }
    );
    
    document.getElementById('ending-message').textContent = '核心协议已破解';
}, 2000);