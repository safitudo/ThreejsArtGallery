var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

var light = new THREE.PointLight( 0xffffff, 2, 10000 );
light.position.set( 0,6,3 );


    var anisotropy = renderer.getMaxAnisotropy();
    var monaTexture = THREE.ImageUtils.loadTexture('tion.jpeg');
    monaTexture.anisotropy = anisotropy;
    monaTexture.wrapS = monaTexture.wrapT = THREE.RepeatWrapping;
    // monaTexture.repeat.set( 1, 0.5 );

    var wanisotropy = renderer.getMaxAnisotropy();
    var wallTexture = THREE.ImageUtils.loadTexture('lava-005.jpg');
    wallTexture.anisotropy = wanisotropy;
    wallTexture.wrapS = wallTexture.wrapT = THREE.RepeatWrapping;
    // wallTexture.repeat.set( 500, 500 );

var cube = new THREE.Mesh( new THREE.BoxGeometry( 6.66, 3, 3 ), new THREE.MeshLambertMaterial( {map: monaTexture} ) );

cube.position.x = 0;
cube.position.y = 3.3;
cube.position.z = -4.2;
// cube.setPosition(1,1,1);


scene.add( cube );



//http://www.stone-export.com/English/images/lava/lava-005.jpg
    // camera = new THREE.PerspectiveCamera(
    //   75, window.innerWidth / window.innerHeight, 1, 10000);

    

    var maxAnisotropy = renderer.getMaxAnisotropy();
    var groundTexture = THREE.ImageUtils.loadTexture('background.png');
    groundTexture.anisotropy = maxAnisotropy;
    groundTexture.wrapS = groundTexture.wrapT = THREE.RepeatWrapping;
    groundTexture.repeat.set( 15, 15 );
    var ground = new THREE.Mesh(
      new THREE.PlaneGeometry( 15, 15 ),
      new THREE.MeshLambertMaterial({map: groundTexture}) );
    ground.rotation.x = -Math.PI / 2;

    var wall = new THREE.Mesh(
      new THREE.PlaneGeometry( 15, 15 ),
      new THREE.MeshLambertMaterial({ color: 0xf3f3f3 }) );
    // wall.position.x=-200;
    wall.position.z=-3.53;

    var rightWall = new THREE.Mesh(
      new THREE.PlaneGeometry( 15, 15 ),
      new THREE.MeshLambertMaterial({ color: 0x333333 }) );
    rightWall.position.x=-5.95;
    rightWall.rotation.y=1.57;

    var leftWall = new THREE.Mesh(
      new THREE.PlaneGeometry( 15, 15 ),
      new THREE.MeshLambertMaterial({ color: 0x333333 }) );
    leftWall.position.x=5.95;
    leftWall.rotation.y=-1.57;

    scene.add(ground);
    scene.add(wall);
    scene.add(rightWall);
    scene.add(leftWall);
    scene.add( light );
	
	camera.position.z = 2;
	camera.position.y = 2.4;
var rotateCube = 0;

var direction = 0.01;
function render() {
	requestAnimationFrame( render );
	renderer.render( scene, camera );
  // light.rotateX(0.1)
  // light.rotateY(0.1)
  //light.rotateZ(0.1)
  //light.position.y+=1
 // light.position.z+=1
  if (rotateCube == 1 ){
    console.log("pass 1");
    if (cube.rotation.x+0.05>(Math.PI/2)){
      // console.log("pass 2");
      cube.rotation.x=Math.PI/2
      rotateCube = 0
      setTimeout("rotateCube=2;",6000)
    } else {
      // console.log("pass 3");
      cube.rotateX(0.05);
    }
  }

  if (rotateCube == 2 ){
    console.log("pass 2");
    if (cube.rotation.x - 0.05 <0){
      // console.log("pass 2");
      rotateCube = 0
      cube.rotation.x=0
      setTimeout("rotateCube=1;",6000)
    } else {
      // console.log("pass 3");
      cube.rotateX(-0.05);
    }
  }



    

  if (light.position.x > 1.5)
    direction = -0.01;
  if (light.position.x<-0.8)
    direction = 0.01;
  light.position.x+=direction

  light.position.z-=(direction*2.4)
  // camera.position.z-=direction
  // console.log(light.position.x);
	 // cube.rotateX(0.01);
	// leftWall.rotateY(0.01);
	// camera.position.z-=0.01;
	// camera.position.y-=0.01;
//  console.log(light.position)
	// console.log(camera.position.y,camera.position.z)
}
render();


setTimeout("rotateCube=1;",6000)