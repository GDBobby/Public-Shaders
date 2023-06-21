#version 450

layout (location = 0) in vec4 fragColor;

layout (location = 0) out vec4 outColor;

void main(){
	//float greenColor = .46 - abs(fragUV) * 0.26;
	//outColor = vec4(0.0, .23 - (0.15 * sqrt(abs(fragUV))), 0.0, 1.0);
	
	outColor = fragColor;
}