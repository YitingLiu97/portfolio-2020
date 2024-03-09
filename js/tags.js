document.addEventListener('DOMContentLoaded', function() {
    // Listen for clicks on filter buttons
    
    const filterButtons = document.querySelectorAll('button[data-filter]');
    filterButtons.forEach(button => {
      button.addEventListener('click', function() {
        const filter = this.getAttribute('data-filter'); // Get the filter from the clicked button
        const items = document.querySelectorAll('.item');

        items.forEach(item => {
          const tags = item.getAttribute('data-tags').split(' '); // Get tags from the item
           // console.log(tags);

          if (filter === 'all' || tags.includes(filter)) {
            console.log( filter);
            item.classList.remove('hidden'); // Show item
        } else {
            console.log( "filter",filter);
            item.classList.add('hidden'); // Hide item
          }
        });
      });
    });
  });
  