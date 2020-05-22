const AFRAME = require('aframe')
require('aframe-particle-system-component')
require('./a-ocean')
require('super-hands')
AFRAME.registerComponent('control-gamepad', {
    init: function () {
        let scene = this.el;
        let box = scene.querySelector('a-box');
        const renderLoop = () => {
            gamepad = navigator.getGamepads()[0];
            if (!gamepad) {
                console.debug('gamepad disappeared')
                return
            }
            // console.debug(gamepad.axes);
            box.setAttribute('position', `${gamepad.axes[0]} 1 ${gamepad.axes[1]-2}`);
            box.setAttribute('rotation', `${gamepad.axes[3]*90} ${gamepad.axes[2]*90} 0`);
            requestAnimationFrame(renderLoop);
        };
        window.addEventListener("gamepadconnected", function () {
            console.debug(navigator.getGamepads()[0]);
            requestAnimationFrame(renderLoop);
        });
    }
});