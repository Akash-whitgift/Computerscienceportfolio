<script>
    import { createEventDispatcher } from 'svelte';
  
    const dispatch = createEventDispatcher();
  
    function dismiss() {
      dispatch('dismiss');
    }
  </script>
  
  <div class="instruction-card">
    <h1>How to Use the Site</h1>
    <ul>
        <li><p>This site uses scrolling to move between cards.</p></li>
    
    <li><p>To move the cards left or right, use the scroll wheel on your mouse.</p></li>
    <li><p>To see information about the topic on a card, click on it.</p></li>
    <li><p>At the top of each card, there is a table of contents, click on a section to scroll there.</p></li>
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
  