<script>
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
      // Add content for other modals (modal2, modal3, etc.)
    };
  
    onMount(() => {
      content = modalsData[id].content;
    });
  </script>
  
  <div class="modal" id="{id}">
    <span class="close" on:click={onClose}>&times;</span>
    <img class="modal-image" src="https://images.pexels.com/photos/3912479/pexels-photo-3912479.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2">
    <div class="modal-content">
      <h2>{modalsData[id].title}</h2>
      {@html content}
    </div>
    </div>
