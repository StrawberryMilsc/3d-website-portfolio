export default /* glsl */ `
uniform vec3 light_pos;
varying vec4 fcolor;
uniform vec3 camera_pos;
uniform vec4 diffuse;
uniform vec3 color_i;
uniform vec4 specular;
uniform float shininess;
uniform vec4 ambient;

void main() {
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    vec3 vertPosition = vec3(modelViewMatrix* vec4(position,1.0));
    vec3 norm = vec3(normalMatrix*position);

    vec3 N = normalize(norm);
    vec3 L = normalize(light_pos - vertPosition);

    float lambert = max(dot(N,L),0.0);
    float specular_val = 0.0;

    if (lambert > 0.0) {
        vec3 R = reflect(-L,N);
        vec3 V = normalize(-vertPosition);

        float specAngle = max(dot(R,V),0.0);
        specular_val = pow(specAngle,shininess);
    }

    fcolor = vec4(ambient * vec4(color_i,1.0)+lambert * diffuse * vec4(color_i,1.0)+ specular_val * specular*vec4(color_i,1.0));
    


}   
`;