let tabs = document.querySelectorAll('.tab-btn');

tabs.forEach(function(tab) {
  tab.addEventListener('click', function() {
    
    let selector = this.getAttribute('data-tab');
    
    document.querySelectorAll('.tab-btns .tab-btn').forEach(function(tabLink) {
      tabLink.classList.remove('active');
    });

    document.querySelectorAll('.tab-content .tab-text').forEach(function(tabText) {
        tabText.classList.remove('active');
    });
    
    this.classList.add('active');

    document.querySelector('.tab-content .tab-text' + selector).classList.add('active');

  });
})