<script>
  import { onMount } from 'svelte';
  import { fade } from 'svelte/transition';
  import  Toc from './Toc.svelte'
  export let id;
  export let onClose;

  let content;
  let isClosing = false;
  let tocHtml = '';
  const modalsData = {
    modal1: {
      title: 'About',
      content: `
        <p>
          This is my project portfolio from year 9. It took some time to make, but I'm happy with the result. It was developed using Sveltekit (Javascript Framework).
        </p>
        <p>
          Click on the images to view the content for each section.
        </p>
      `,
      image: "/about.jpg"
    },
    modal2: {
      title: 'Python',
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
        <code>
        <textarea readonly>
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
        </textarea>
        </code>
        <h4>Subsection 2</h4>
        <style>
        textarea {
            background: transparent;
            border: 0px;
            width: 100%;
            height: 20vh;
            color: white;
            resize:none;
        }
        </style>
      `,
      image: "/Ad01.jpg"
    },
    modal3: {
      title: 'HTML',
      content: `
      <h2> Networking </h2>
      <h3>Steps to Connect to a Website</h3>
    <p class='strong'>1. Enter the Web Address</p>
    <p>You type in a Web address (URL - Uniform resource indicator) into the address bar in the browser, such as <a href="https://arjun.bond">https://arjun.bond</a>.</p>
    
    <p class='strong'>2. Connect to the IP Address</p>
    <p>Once you get the IP address you connect and then are able to request a page from the Server.</p>
    
    <h3>3. Server Response</h3>
    <p>The server sends the webpage to your computer via the HTTP protocol as HTML code.</p>
    
    <h3>4. Browser Renders the Page</h3>
    <p>The browser reads the HTML code and renders the page.</p>
    
    <h2>HTML Overview</h2>
    <p>HTML stands for HyperText Markup Language and is used for creating webpages.</p>
    <p>A web browser is designed to read HTML and then translate it to the things you can see on the screen.</p>
    
    <h3>HTML Tags</h3>
    <p><code>&lt; Chevrons &gt;</code> - around tags</p>
    
    <h3>Boilerplate Code</h3>
    <p>Essential HTML code that all web pages have:</p>
    <pre><code>
&lt;!DOCTYPE html&gt;
&lt;html&gt;
    &lt;head&gt;
    &lt;/head&gt;
    &lt;body&gt;
    &lt;/body&gt;
&lt;/html&gt;
    </code></pre>
    
    <p><code>&lt;!DOCTYPE html&gt;</code> is always the first line of an HTML page</p>
    <p><code>&lt;html&gt;</code> - tells the browser it is HTML code for the page</p>
    <p><code>&lt;head&gt;</code> - Things that aren't displayed in the main body of your page like the title</p>
    <p><code>&lt;body&gt;</code> - Contains all the content you want to see displayed</p>
    
    <h2>Images and Links</h2>
    
    <h3>What is Accessibility?</h3>
    <p>Having the ability to access something. Users of IT systems can have a wide range of needs, conditions, or disabilities.</p>
    
    <h3>Accessibility Tips</h3>
    <ul>
        <li>Use Captions in videos</li>
        <li>Use Colours with good contrast</li>
        <li>Voice Recognition</li>
        <li>Better Error messages</li>
    </ul>
    
    <h3>Attributes</h3>
    <p>An attribute is an extra piece of information provided in a tag. For example, common image attributes are <code>src</code>, <code>height</code>, and <code>width</code>.</p>
    <p>Pixelation occurs when an image is larger than it should be.</p>
    
    <h2>CSS - Cascading Style Sheets</h2>
    <p>HTML + CSS</p>
    <p>HTML describes the structure of a webpage, then CSS describes the styling (presentation of the page).</p>
    <p>Every time we write CSS, we select the tag we want to work with, say which property we want to adjust, and give it the value we want to assign it.</p>
    
    <h3>Using CSS in an HTML Page</h3>
    <p>3 options:</p>
    <ol>
        <li>Write the CSS inside the individual HTML tags.</li>
        <li>Write the CSS styles inside the <code>&lt;style&gt;&lt;/style&gt;</code> tags in the <code>&lt;head&gt;</code> section of the HTML.</li>
        <li>Create an external CSS file with the styles defined in it and link the HTML page to the CSS file.</li>
    </ol>
    
    <h2>What is a DIV Tag?</h2>
    <p>The division <code>&lt;div&gt;</code> tag helps us to split the layout of a webpage into sections.</p>
    <p>We can create divisions in our pages by surrounding the blocks with these tags.</p>
    <p>When you group together HTML elements using <code>&lt;div&gt;</code> tags you can ask CSS to make changes to elements within the DIV.</p>
    <p>We can think of DIVs as a way of breaking our page into boxes or containers. You can also have divs inside of divs.</p>
    <style>
      .strong {
        font-size: 1.8em;
        font-weight: bold;
      }
      </style>
      `,
      image: "/HTML.webp"
    },
    modal4: {
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
      image: "/AiEmer.jpg"
    },
    modal5: {
      title: 'Amazon Technologies Project',
      content: `
        <ul>
          <li>Another Use 1</li>
          <li>Another Use 2</li>
          <li>Another Use 3</li>
        </ul>
      `,
      image: "/amazon.jpeg"
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
    <div class="toc">
        
        
      <Toc class='toc'> </Toc>
      </div>
    <div class="content-container">
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
