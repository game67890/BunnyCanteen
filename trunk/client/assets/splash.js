(function () {

    // 设置 logo 图像的 Base64 数据


    // 自定义背景元素

    let backgroundDiv;

    // 添加全屏背景层，并置于cocos画布层上面

    function addFullScreenBackground() {

        const gameContainer = document.getElementById('Cocos3dGameContainer');

        const gameCanvas = document.getElementById('GameCanvas');

        if (gameContainer && gameCanvas) {

            backgroundDiv = document.createElement('div');

            backgroundDiv.style.position = 'absolute';

            backgroundDiv.style.top = '0';

            backgroundDiv.style.left = '0';

            backgroundDiv.style.width = '100%';

            backgroundDiv.style.height = '100%';

            //backgroundDiv.style.backgroundColor = '#ADD8E6'; // 设置背景颜色为浅蓝色

            backgroundDiv.style.zIndex = '0'; // 确保背景在cocos画布节点层的上面，cocos画布层默认为-1

            gameContainer.style.position = 'relative'; // 确保容器是相对定位的，以便背景能够覆盖整个容器

            gameContainer.insertBefore(backgroundDiv, gameCanvas); // 将背景插入到 canvas 之前

            // 添加 logo 图像

            //addLogoToBackground();

        }

    }

    // 设置 Base64 图片为 logo 并添加到 backgroundDiv

    function addLogoToBackground() {

        const logoImg = document.createElement('img');

        logoImg.src = logoBase64Data;

        logoImg.style.position = 'absolute';

        logoImg.style.top = '0';

        logoImg.style.left = '0';

        //logoImg.style.transform = 'translate(-50%, -50%)'; // 横竖居中

        logoImg.style.zIndex = '2'; // 确保 logo 在背景层的前面

        backgroundDiv.appendChild(logoImg);

    }

    // 隐藏进度条

    function hideProgressBar() {

        const splashElement = document.getElementById('splash');

        if (splashElement) {

            splashElement.style.display = 'none';

        }

    }

    // 隐藏背景

    function hideBackgroundDiv() {

        if (backgroundDiv) {

            backgroundDiv.style.display = 'none';

        }

    }

    if (typeof cc !== 'undefined' && !cc.EDITOR) {

        addFullScreenBackground();

        hideProgressBar();

        // 只监听一次，渲染过程之前所触发的事件。

        cc.director.once(cc.Director.EVENT_BEFORE_DRAW, hideBackgroundDiv);

    }

})();