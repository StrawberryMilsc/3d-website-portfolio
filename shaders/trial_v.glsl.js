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

    vec4 color = vec4(color_i,1.0);

    vec3 view_vert = vec3(modelViewMatrix * vec4(position,1.0));

    view_vert=normalize(view_vert);

    vec3 dirLight = vec3(position - light_pos);

    dirLight = normalize(-dirLight);

    vec3 norm = position;

    float nDotL = dot(norm, dirLight);

    vec3 eyeNorm = normalize(camera_pos-view_vert);

    vec3 twoL = (dirLight) * vec3(2.0); 
    vec3 twoLightTimesnDotL = normalize(twoL* nDotL); 
    vec3 subtractWithL = normalize(twoLightTimesnDotL - dirLight);
    float rDotV = dot(subtractWithL, -view_vert);
    
    vec4 diffLight = clamp(diffuse * color * max(nDotL, 0.0),0.0,1.0);

    vec4 specLight = clamp(specular * color * pow(max(rDotV, 0.0),shininess),0.0,1.0);

    fcolor = vec4(diffLight+specLight+ambient);


}   
`;