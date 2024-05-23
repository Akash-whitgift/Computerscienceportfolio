<script >
import { onMount, onDestroy, isBrowser } from 'svelte';
import Modal from './Modal.svelte'; // Import the Modal component

let isModalOpen = false;
let currentModalId;

function openModal(modalId) {
  isModalOpen = true;
  currentModalId = modalId;
  history.pushState({ modalId }, "", `#${modalId}`);
}

function closeModal() {
  isModalOpen = false;
  currentModalId = null;
  history.back(); // Simulate back button behavior
}

if (isBrowser) {
  onMount(() => {
    window.addEventListener('popstate', () => {
      isModalOpen = false;
      currentModalId = null;
    });
  });

  onDestroy(() => {
    window.removeEventListener('popstate', () => {});
  });
}

  </script>
  
  <div id="image-track">
    <div class="image-container" on:click={() => openModal('modal1')}>
      <img class="image" src="https://images.pexels.com/photos/3912479/pexels-photo-3912479.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" draggable="false" data-active />
      <div class="text-overlay">Card 1</div>
    </div>
    </div>
  
  {#if isModalOpen}
    <Modal id={currentModalId} on:close={closeModal} />
  {/if}
  