class DialogSystem {
    constructor() {
        this.dialogs = [];
        this.currentIndex = 0;
        this.isTyping = false;
        this.currentText = '';
    }

    showDialogs(dialogs) {
        this.dialogs = dialogs;
        this.currentIndex = 0;
        this.createDialogBox();
        this.showNextDialog();
    }

    createDialogBox() {
        const container = document.createElement('div');
        container.className = 'dialog-container';
        container.innerHTML = `
            <div class="dialog-box">
                <div class="dialog-name">VIBE-2075</div>
                <div class="dialog-text"></div>
            </div>
        `;
        container.addEventListener('click', () => this.onClick());
        document.body.appendChild(container);
        this.textElement = container.querySelector('.dialog-text');
    }

    onClick() {
        if (this.isTyping) {
            this.skipTyping();
        } else {
            this.showNextDialog();
        }
    }

    showNextDialog() {
        if (this.currentIndex >= this.dialogs.length) {
            document.querySelector('.dialog-container').remove();
            return;
        }

        const dialog = this.dialogs[this.currentIndex++];
        this.typeText(dialog);
    }

    typeText(text) {
        this.isTyping = true;
        this.currentText = '';
        this.textElement.innerHTML = '';
        this.textElement.classList.add('typewriter');

        let i = 0;
        const typing = setInterval(() => {
            if (i < text.length) {
                this.currentText += text.charAt(i);
                this.textElement.textContent = this.currentText;
                i++;
            } else {
                clearInterval(typing);
                this.isTyping = false;
                this.textElement.classList.remove('typewriter');
            }
        }, 20);
    }

    skipTyping() {
        this.isTyping = false;
        this.textElement.classList.remove('typewriter');
        this.textElement.textContent = this.dialogs[this.currentIndex-1];
    }
}

const dialogSystem = new DialogSystem();