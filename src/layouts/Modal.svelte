<script>
  import { onMount } from 'svelte';
  import { fade } from 'svelte/transition';
  import  Toc from 'svelte-toc'
  export let id;
  export let onClose;

  let content;
  let isClosing = false;
  let tocHtml = '';
  const modalsData = {
    modal1: {
      title: 'Uses of Ultraviolet Light',
      content: `
      <h2 id='section1'>Part 1</h2>
      <h3>Subsection 1</h3>
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
        <h3>Subsection 2</h3>
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
        <h4>Subsection 2</h4>
      `,
      image: "https://images.pexels.com/photos/3912479/pexels-photo-3912479.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
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
      image: "https://images.pexels.com/photos/3269269/pexels-photo-3269269.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
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
      image: "https://www.canada.ca/content/dam/canada/health-canada/migration/healthy-canadians/alt/images/healthy-living-vie-saine/environment-environnement/sun-soleil/radiation-rayonnement-1-590x311-eng.jpg"
    },
    modal4: {
      title: 'Uses of Another Light',
      content: `
        <ul>
          <li>Another Use 1</li>
          <li>Another Use 2</li>
          <li>Another Use 3</li>
        </ul>
      `,
      image: "https://images.pexels.com/photos/843633/pexels-photo-843633.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    }
  };

  onMount(() => {
    content = modalsData[id].content;
    tocHtml = generateTOC(content);
  });

  function handleClose() {
    isClosing = true;
    setTimeout(() => {
      if (typeof onClose === 'function') {
        onClose();
      }
      isClosing = false;
    }, 1); // Matches the duration of the fade-out transition
  }
 function handleTOCClick(event) {
    scrollToSection(event); // Pass the target element directly
  }





function generateTOC(content) {
  const tempDiv = document.createElement('div');
  tempDiv.innerHTML = content;
  const headings = tempDiv.querySelectorAll('h2, h3');
  let tocHtml = '';
  headings.forEach((heading, index) => {
    const level = heading.tagName.toLowerCase();
    const text = heading.textContent;
    const id = `section-${index}`; // Generate unique ID for each section
    heading.id = id; // Assign ID to the heading for linking
    const listItem = `<li><a href="#${id}"><${level}>${text}</${level}></a></li>`;
    tocHtml += listItem;
  });
  return `<ul>${tocHtml}</ul>`;
}

function scrollToSection(id) {
  const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
}








</script>

<div class="modal {isClosing ? 'fade-out' : 'fade-in'}" id={id} transition:fade={{ duration: 300 }}>
  <span class="close" on:click={handleClose}>&times;</span>
  <img class="modal-image" src={modalsData[id].image} />
  <div class="modal-text">
    <h1>{modalsData[id].title}</h1>
    <div class="content-container">
      <div class="toc">
        
        
      <Toc />
      </div>
<hr>
      <div class="content">
        {@html content}
      </div>
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
    background-color: rgba(0, 0, 0, 0.4);
    opacity: 1;
    transition: opacity 0.3s ease;
  }
  .fade-in {
    opacity: 1;
  }
  .fade-out {
    opacity: 0;
  }
  .modal-image {
    display: block;
    margin: 0 auto;
    max-width: 100%;
    height: 100%;
  object-fit: cover;
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
  .modal-text {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: rgba(20, 20, 20, 0.8);
    padding: 20px;
    border-radius: 10px;
    text-align: Left;
    width: 80%;
    height: 80%;
    color: white;
    overflow-y: scroll;
  }
  h1 {
    font-size: 3.5em;
    margin: 5px;
  }
  .content-container {
    flex: 1;
    padding-right: 20px; /* Adjust spacing between TOC and content */
    overflow-y: auto; /* Allow scrolling if content is too long */
  }
  .toc-container {
    background-color: rgba(255, 255, 255, 0.1);
    padding: 10px;
    border-radius: 10px;
  }
  .toc-container h2 {
    font-size: 1.2em;
    margin-top: 0;
  }
  .toc-container ul {
    list-style: none;
    padding: 0;
  }
  .toc-container li {
    cursor: pointer;
    margin-bottom: 5px;
    transition: color 0.2s;
  }
  .toc-container li:hover {
    color: #ddd; /* Change color on hover */
  }

  .toc li {
    color: black;
  }
aside {
    display: none !important;
  }
</style>
