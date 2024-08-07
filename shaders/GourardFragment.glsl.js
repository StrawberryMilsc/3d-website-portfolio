export default /*glsl */ `
uniform vec2 screenSize;
varying vec4 fcolor;
void main() {
    
    gl_FragColor = fcolor;
}`;