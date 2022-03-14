$('#videoModal').on('hide.bs.modal', function(e) {
    this.querySelector('video').pause();
})