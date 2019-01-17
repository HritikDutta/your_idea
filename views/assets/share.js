$(document).ready(function() {

    $('#share-post').on('submit', function() {
        var post = {
            title: $('#title').val(),
            description: $('#description').val(),
            pin: $('#pin-profile').is(':checked')
        }

        $.ajax({
            type: 'POST',
            url: '/post',
            data: post,
            success: function(post) {
                location.reload()
            }
        })

        return false
    })

})