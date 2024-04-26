import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-canvas-box',
  standalone: true,
  imports: [],
  templateUrl: './canvas-box.component.html',
  styleUrl: './canvas-box.component.scss',
})
export class CanvasBoxComponent implements OnInit {
  ngOnInit(): void {
    this.loadModel();
  }

  loadModel(): void {
    // const url = 'https://threejs.org/examples/models/gltf/Flamingo.glb';
    // const gltfLoader = new GLTFLoader();
    // const gltf = gltfLoader.loadAsync(url);
    // console.log(gltf);
    // requestAnimationFrame(this.render.bind(this));
  }
}
