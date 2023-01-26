const init = () => {
    const width = 250;
    const height = 200;

    // レンダーの作成
    const renderer = new THREE.WebGLRenderer({
        canvas: document.querySelector("#mycanva")
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(window.devicePixelRatio);

    // シーンの作成
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xffffff);

    // カメラの作成
    const camera = new THREE.PerspectiveCamera(45, width/height, 1, 10000);
    camera.position.set(0, 0, 1000);

    // 立方体の作成
    const geometry = new THREE.BoxGeometry(300, 300, 300);
    const material = new THREE.MeshStandardMaterial({
        color: 0x606060
    })
    const box = new THREE.Mesh(geometry, material);
    scene.add(box);

    // ライトの作成
    const light = new THREE.DirectionalLight(0xffffff);
    light.intensity = 2;
    light.position.set(1, 1, 1);
    scene.add(light);

    // 更新
    const tick = () => {
        requestAnimationFrame(tick);
        box.rotation.x += 0.01;
        box.rotation.y += 0.01;
        renderer.render(scene, camera);
    }  
    tick()
}

window.addEventListener("DOMContentLoaded", init)