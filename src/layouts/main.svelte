<script>
  import { onMount, onDestroy } from 'svelte';
  import { goto } from '$app/navigation'; // Import goto from SvelteKit
  import Modal from './Modal.svelte'; // Import the Modal component
  import './styles.css';
  import InstructionCard from './InstructionCard.svelte';

  let showInstructions = true;
  let isModalOpen = false;
  let currentModalId;
  let modal = null;
  let track;
  let isMouseDown = false;
  let initialMouseX = 0;
  let lastKnownPercentage = -10;
  let dragSensitivity = 0.01;
  let scrollSensitivity = 0.2;

  const isBrowser = typeof window !== 'undefined';

  function dismissInstructions() {
    localStorage.setItem('instructionsDismissed', 'true');
    showInstructions = false;
  }
  function openModal(modalId) {
    isModalOpen = true;
    currentModalId = modalId;
    goto(`#${modalId}`, { replaceState: true });
  }

  function closeModal() {
    isModalOpen = false;
    currentModalId = null;
    goto('/', { replaceState: true });
  }

  

  function handleMouseDown(e) {
    if (!isModalOpen) {
      isMouseDown = true;
      initialMouseX = e.clientX;
    }
  }

  function handleMouseMove(e) {
    if (isMouseDown && !isModalOpen) {
      const mouseDelta = initialMouseX - e.clientX;
      const maxDelta = window.innerWidth / 2;

      lastKnownPercentage = Math.max(
        Math.min(lastKnownPercentage + (mouseDelta / maxDelta) * -100 * dragSensitivity, -10),
        -100
      );

      updateTransform();
    }
  }

  function handleMouseUp() {
    isMouseDown = false;
  }

  function handleWheel(e) {
    if (!isModalOpen) {
      const delta = e.deltaY || e.detail || e.wheelDelta;
      const scrollAmount = delta * scrollSensitivity;
      const maxDelta = window.innerHeight / 2;

      lastKnownPercentage = Math.max(
        Math.min(lastKnownPercentage + (scrollAmount / maxDelta) * -100, -10),
        -100
      );

      updateTransform();
      e.preventDefault();
    }
  }
  function scrollOnLoad() {
    track.style.transform = `translate(${-10}%, -50%)`;

for (const image of track.getElementsByClassName("image")) {
  image.style.objectPosition = `${100 + -10}% center`;
}
  }
  function updateTransform() {
    track.style.transform = `translate(${lastKnownPercentage}%, -50%)`;

    for (const image of track.getElementsByClassName("image")) {
      image.style.objectPosition = `${100 + lastKnownPercentage}% center`;
    }
  }

  if (isBrowser) {
    function handlePopState() {
      isModalOpen = false;
      currentModalId = null;
    }
    onMount(() => {
      const dismissed = localStorage.getItem('instructionsDismissed');
    showInstructions = !dismissed;

      track = document.getElementById("image-track");
      scrollOnLoad();
      window.addEventListener("mousedown", handleMouseDown);
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
      window.addEventListener("wheel", handleWheel, { passive: false });
      
      window.addEventListener('popstate', handlePopState);
      
      const images = document.querySelectorAll(".image");
      images.forEach((image, index) => {
        image.addEventListener("click", () => openModal(`modal${index + 1}`));
      });
    });

    onDestroy(() => {
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener('popstate', handlePopState);
    });
  }

</script>
<div id="image-track">
  {#if showInstructions}
      <InstructionCard on:dismiss={dismissInstructions} />
    {/if}
  <div class="image-container" on:click={() => openModal('modal1')}>
    <img class="image" src="/about.jpg" draggable="false" data-active />
    <div class="text-overlay">About</div>
  </div>
  <div class="image-container" on:click={() => openModal('modal2')}>
    <img class="image" src="/Ad01.jpg" draggable="false" data-active />
    <div class="text-overlay">Python</div>
  </div>
  <div class="image-container " on:click={() => openModal('modal3')}>
    <img class="image darker" src="/HTML.webp" draggable="false" data-active />
    <div class="text-overlay">HTML</div>
  </div>
  <div class="image-container" on:click={() => openModal('modal4')}>
    <img class="image" src="/AiEmer.jpg" draggable="false" data-active />
    <div class="text-overlay">AI/Emerging Technologies</div>
  </div>
  <div class="image-container" on:click={() => openModal('modal5')}>
    <img class="image darker" src="/amazon.jpeg" draggable="false" data-active />
    <div class="text-overlay">Amazon Technologies Project</div>
  </div>
</div>

<style>
  .text-overlay {
    overflow: hidden;
  }
  .darker {
    
  }
  </style>
{#if isModalOpen}
<Modal id={currentModalId} onClose={closeModal} />
{/if}
