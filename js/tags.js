document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.filter-button').forEach(function(button) {
        button.addEventListener('click', function() {
            var filter = this.getAttribute('data-filter');
            // Display all items if 'all' is selected
            if (filter === 'all') {
                document.querySelectorAll('.item').forEach(function(item) {
                    item.style.display = '';
                });
            } else {
                // Otherwise, filter items based on the tag
                document.querySelectorAll('.item').forEach(function(item) {
                    var itemTags = item.getAttribute('data-tags').split(' ');
                    if (itemTags.includes(filter)) {
                        item.style.display = '';// Reset to default or use 'flex'/'block' if needed
                    } else {
                        item.style.display = 'none';
                    }
                });
            }
        });
    });
});
