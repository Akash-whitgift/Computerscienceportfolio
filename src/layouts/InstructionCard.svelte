<script>
   import { onMount} from 'svelte';
    import { createEventDispatcher } from 'svelte';
    const isBrowser = typeof window !== 'undefined';
    let isFirefox = false;

    onMount(() => {
    isFirefox = (navigator.userAgent.indexOf('Firefox') !== -1);

    if (isFirefox) {
        console.log('firefox detected');
    }
    });
    const dispatch = createEventDispatcher();
  
    function dismiss() {
      dispatch('dismiss');
    }
  </script>
  
  <div class="instruction-card">
    <h1>How to Use the Site</h1>
    <ul>
      {#if isFirefox}
      <li><p style='font-size: 1.8em;'><b><u>Firefox is known to have issues with the table of contents, for the best experience use chrome</u></b></p></li>
      {/if}
    <li><p>This site uses scrolling to move between cards.</p></li>
    <li><p>To move the cards left or right, use the scroll wheel on your mouse.</p></li>
    <li><p>To see information about the topic on a card, click on it.</p></li>
    <li><p>At the top of each card, there is a table of contents, click on a section to scroll there.</p></li>
    <li><p>To close the card press the 'x' in the top right corner</p></li>
    <li><p>If you cannot scroll please make sure Javascript is enabled in your browser</p></li>
    </ul>
    <p>Click the button below to dismiss this message, it will not be shown again.</p>
    <button on:click={dismiss}>Got it!</button>
  </div>
  
  <style>
    .instruction-card {
      background: #333; /* Grey background with some transparency */
      color: white;
      padding: 1rem;
      border-radius: 8px;
      margin: 1rem;
      text-align: left;
      flex-shrink: 0; /* Ensure it doesn't shrink */
    }

    .instruction-card button {
      margin-top: 1rem;
      padding: 0.5rem 1rem;
      background: #fff;
      border: none;
      color: #333;
      cursor: pointer;
      border-radius: 4px;
    }
  
    .instruction-card button:hover {
      background: #ddd;
    }
  </style>
  