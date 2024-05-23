<script>
  import { onMount, onDestroy } from 'svelte';
  import { goto } from '$app/navigation'; // Import goto from SvelteKit
  import Modal from './Modal.svelte'; // Import the Modal component
  import './styles.css';

  let isModalOpen = false;
  let currentModalId;

  function openModal(modalId) {
    isModalOpen = true;
    currentModalId = modalId;
    goto(`#${modalId}`, { replaceState: true }); // Use goto from SvelteKit
  }

  function closeModal() {
    isModalOpen = false;
    currentModalId = null;
    window.history.back(); // Go back in history
  }

  const isBrowser = typeof window !== 'undefined';

  if (isBrowser) {
    function handlePopState() {
      isModalOpen = false;
      currentModalId = null;
    }

    onMount(() => {
      window.addEventListener('popstate', handlePopState);
    });

    onDestroy(() => {
      window.removeEventListener('popstate', handlePopState);
    });
  }
</script>

<div id="image-track">
  <div class="image-container" on:click={() => openModal('modal1')}>
    <img class="image" src="https://images.pexels.com/photos/3912479/pexels-photo-3912479.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" draggable="false" data-active />
    <div class="text-overlay">Card 1</div>
  </div>
  <div class="image-container" on:click={() => openModal('modal1')}>
    <img class="image" src="https://images.pexels.com/photos/3912479/pexels-photo-3912479.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" draggable="false" data-active />
    <div class="text-overlay">Card 1</div>
  </div>
  </div>
{#if isModalOpen}
  <Modal id={currentModalId} onClose={closeModal} />
{/if}
