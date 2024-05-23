<script>
  import { onMount } from 'svelte';
  export let id;
  export let onClose;

  let content;

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
    },
    // Add content for other modals (modal2, modal3, etc.)
  };

  onMount(() => {
    content = modalsData[id].content;
  });
</script>

<div class="modal" id={id}>
  <span class="close" on:click={onClose}>&times;</span>
  <img class="modal-image" src="https://images.pexels.com/photos/3912479/pexels-photo-3912479.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2">
  <div class="modal-content">
    <h2>{modalsData[id].title}</h2>
    {@html content}
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
  .modal-content {
    background-color: #fefefe;
    margin: 5% auto;
    padding: 20px;
    border: 1px solid #888;
    width: 80%;
  }
  .close {
    color: #aaa;
    float: right;
    font-size: 28px;
    font-weight: bold;
  }
  .close:hover,
  .close:focus {
    text-decoration: none;
    cursor: pointer;
  }
</style>
