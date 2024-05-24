<script>
  import { onMount, onDestroy } from 'svelte';
  import { goto } from '$app/navigation'; // Import goto from SvelteKit
  import Modal from './Modal.svelte'; // Import the Modal component
  import './styles.css';

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

  function openModal(modalId) {
    isModalOpen = true;
    currentModalId = modalId;
    goto(`#${modalId}`, { replaceState: true });
  }

  function closeModal() {
    isModalOpen = false;
    currentModalId = null;

  }

  function allowModalScroll(event) {
    const modalContent = modal.querySelector('.text-overlay');
    const contentHeight = modalContent.scrollHeight;
    const clientHeight = modalContent.clientHeight;
    const currentTop = parseInt(window.getComputedStyle(modalContent).top, 10) || 0;

    if (contentHeight > clientHeight) {
      let newTop = currentTop - event.deltaY;

      // Prevent scrolling beyond the content limits
      if (newTop > 0) {
        newTop = 0;
      } else if (newTop < clientHeight - contentHeight) {
        newTop = clientHeight - contentHeight;
      }

      modalContent.style.top = `${newTop}px`;
      event.preventDefault();
    } else {
      event.preventDefault();
    }
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
      track = document.getElementById("image-track");

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
  <div class="image-container" on:click={() => openModal('modal1')}>
    <img class="image" src="https://images.pexels.com/photos/3912479/pexels-photo-3912479.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" draggable="false" data-active />
    <div class="text-overlay">Card 1</div>
  </div>
  <div class="image-container" on:click={() => openModal('modal2')}>
    <img class="image" src="https://images.pexels.com/photos/3269269/pexels-photo-3269269.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" draggable="false" data-active />
    <div class="text-overlay">Card 1</div>
  </div>
  <div class="image-container" on:click={() => openModal('modal3')}>
    <img class="image" src="https://www.canada.ca/content/dam/canada/health-canada/migration/healthy-canadians/alt/images/healthy-living-vie-saine/environment-environnement/sun-soleil/radiation-rayonnement-1-590x311-eng.jpg" draggable="false" data-active />
    <div class="text-overlay">Card 1</div>
  </div>
  <div class="image-container" on:click={() => openModal('modal4')}>
    <img class="image" src="https://images.pexels.com/photos/843633/pexels-photo-843633.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" draggable="false" data-active />
    <div class="text-overlay">Card 1</div>
  </div>
</div>

{#if isModalOpen}
<Modal id={currentModalId} onClose={closeModal} />
{/if}
