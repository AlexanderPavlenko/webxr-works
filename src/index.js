require('aframe')
import('../rust/pkg').then(module => {
  module.greet();
});