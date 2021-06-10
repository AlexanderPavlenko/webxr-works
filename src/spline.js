// console.log = function () {};
const AFRAME = require('aframe');
window.THREE = AFRAME.THREE;
require('aframe-extras');
AFRAME.registerComponent('spline-scene', {
    init: function () {
        let scene = this.el.sceneEl;
        // this allows to render Spline camera only which ignores headset movement and aframe entities
        // scene.getElementsByTagName('canvas')[0].setAttribute('id', 'canvas3d');
        const SpeRuntime = require('./spline.runtime.min');
        const SPLINE = new SpeRuntime.Application();
        SPLINE.start('./scene.json');
        setTimeout(function () {
            scene.setObject3D('scene', SPLINE._scene);
        }, 3000);
        window.SPLINE = SPLINE;
    }
});