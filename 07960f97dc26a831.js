import"./style.css";import*as THREE from"three";import{OrbitControls}from"three/examples/jsm/controls/OrbitControls.js";import{DragControls}from"three/examples/jsm/controls/DragControls.js";import*as dat from"lil-gui";import VertexShader from"./shaders/water/vertex.glsl";import FragmentShader from"./shaders/water/fragment.glsl";let video0,turn=0;video0=document.getElementById("video0"),video0.play();const texture=new THREE.VideoTexture(video0);let textureArray=[texture],i=0;const canvas=document.querySelector("canvas.webgl"),scene=new THREE.Scene;let j=0;for(let e=0;e<1;e++){const e=new THREE.BoxBufferGeometry(1,1,1,512,512,512);j>3&&(j=0);const t=new THREE.ShaderMaterial({uniforms:{time:{value:1},resolution:{value:new THREE.Vector2},uTexture:{value:textureArray[0]}},vertexShader:VertexShader,fragmentShader:FragmentShader});let r=new THREE.Mesh(e,t);scene.add(r),r.position.set(0,0,0),j++}const geometry1=new THREE.BoxBufferGeometry(2,2,2),material1=new THREE.MeshBasicMaterial({wireframe:!0,wireframeLinewidth:20});let mesh2=new THREE.Mesh(geometry1,material1);scene.add(mesh2);const sizes={width:window.innerWidth,height:window.innerHeight};window.addEventListener("resize",(()=>{sizes.width=window.innerWidth+344,sizes.height=window.innerHeight,camera.aspect=sizes.width/sizes.height,camera.updateProjectionMatrix(),renderer.setSize(sizes.width,sizes.height),renderer.setPixelRatio(Math.min(window.devicePixelRatio,2))}));const camera=new THREE.OrthographicCamera(sizes.width/-2,sizes.width/2,sizes.height/2,sizes.height/-2,1e-7,1e6);camera.position.set(-.9329133646012636,-1.1245561563863518,-.930078545195),camera.zoom=150,scene.add(camera);const controls=new OrbitControls(camera,canvas);controls.enableRotate=!1,controls.autoRotate=!0,controls.enableZoom=!1,controls.enableDamping=!0;const renderer=new THREE.WebGLRenderer({canvas,alpha:!0});renderer.setSize(sizes.width+250,sizes.height),renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),renderer.setClearColor(0,0);const clock=new THREE.Clock;function rotator(){if(console.log("poopy",countDownVar),countDownVar<1500&&countDownVar>1480){turn++;let e=1;!function t(){if(setTimeout((function(){turn>0&&(camera.position.x+=.05,camera.position.y+=.02,camera.position.z+=.01,camera.zoom+=1,e++,e<40&&t())}),20),turn>7){camera.position.set(-.9329133646012636,-1.1245561563863518,-.930078545195);let e=.5;for(;camera.zoom>150;)camera.zoom-=e;turn=0}}()}}document.addEventListener("click",rotator);const tick=()=>{new THREE.ShaderMaterial({uniforms:{time:{value:1},resolution:{value:new THREE.Vector2},uTexture:{value:textureArray[i]}},vertexShader:VertexShader,fragmentShader:FragmentShader}),clock.getElapsedTime(),controls.update(),camera.updateProjectionMatrix(),renderer.render(scene,camera),window.requestAnimationFrame(tick)};tick();