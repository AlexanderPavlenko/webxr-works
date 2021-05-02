console.log = function () {};
const AFRAME = require('aframe');
window.THREE = AFRAME.THREE;
AFRAME.registerComponent('spline-scene', {
    init: function () {
        let scene = this.el;
        scene.getElementsByTagName('canvas')[0].setAttribute('id', 'canvas3d');
        const SpeRuntime = require('./spline.runtime.min');
        const SPLINE = new SpeRuntime.Application();
        SPLINE.start('./scene.json');
        setTimeout(function () {
            scene.setObject3D('scene', SPLINE._scene);
        }, 3000);
        window.SPLINE = SPLINE;
    }
});