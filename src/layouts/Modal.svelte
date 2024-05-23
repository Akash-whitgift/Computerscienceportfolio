<script>
  import { onMount } from 'svelte';

  export let id;
  export let onClose;

  let content;
  let modalImage;
  const modalsData = {
    modal1: {
      title: 'Uses of Ultraviolet Light',
      content: `
        <ul>
          <li>Curing Resins</li>
          <li>Curing Inks</li>
          <li>Odour Blocking</li>
          <li>Purifying Air</li>
          <li>Phototherapy</li>
          <li>Curing Adhesives</li>
          <li>Killing Bacteria</li>
          <li>Banknote Security</li>
          <li>Plant Grow lights</li>
          <li>Fluorescence</li>
        </ul>
        
      `,
      image: 'https://images.pexels.com/photos/3912479/pexels-photo-3912479.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', // Specify the image URL for modal1
    },
    modal2: {
      title: 'Uses of Infrared Light',
      content: `
        <ul>
          <li>Remote Controls</li>
          <li>Thermography</li>
          <li>Heating</li>
          <li>Communication</li>
          <li>Security Systems</li>
          <li>Medical Imaging</li>
          <li>Optical Fiber Communication</li>
          <li>Photobiomodulation</li>
          <li>Photodynamic Therapy</li>
          <li>Photothermal Therapy</li>
        </ul>
      `,
      image: 'https://example.com/image2.jpg', // Specify the image URL for modal2
    },
    modal3: {
      title: 'Uses of Visible Light',
      content: `
        <ul>
          <li>Photosynthesis</li>
          <li>Photography</li>
          <li>Artificial Lighting</li>
          <li>Optical Fiber Communication</li>
          <li>Optical Microscopy</li>
          <li>Optical Tweezers</li>
          <li>Optical Coherence Tomography</li>
          <li>Optical Spectroscopy</li>
          <li>Optical Sensors</li>
          <li>Optical Discs</li>
        </ul>
      `,
      image: 'https://example.com/image3.jpg', // Specify the image URL for modal3
    },
    // Add content for other modals (modal4, modal5, etc.)
  };

  onMount(() => {
    content = modalsData[id].content;
    modalImage = modalsData[id].image;
  });
</script>

<div class="modal" id={id}>
  <span class="close" on:click={onClose}>&times;</span>
  <div class="image-overlay">
    <img class="modal-image" src={modalImage} alt="Modal Image">
    <div class="text-overlay">
      <h2>{modalsData[id].title}</h2>
      {@html content}
    </div>
  </div>
</div>

<style>
  .modal {
    display: block;
    position: fixed;
    z-index: 1;
    padding-top: 60px;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgb(0, 0, 0);
    background-color: rgba(0, 0, 0, 0.4);
  }

  .image-overlay {
    position: relative;
    width:100%;
    height: 100%;
  }

  .modal-image {
    width: 100%;
    height: 100%;
    display: block;
    aspect-ratio: original;
  }

  .text-overlay {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: rgba(20, 20, 20, 0.8);
    padding: 20px;
    border-radius: 10px;
    text-align: center;
    width: 80%;
    height: 80%;
  }

  .close {
    color: #aaa;
    position: absolute;
    top: 20px;
    right: 20px;
    font-size: 28px;
    font-weight: bold;
    cursor: pointer;
  }
</style>
