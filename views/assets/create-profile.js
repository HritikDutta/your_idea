$(document).ready(function() {

    $('#create-profile').on('submit', function() {
        var profile = {
            username: $('#username').val(),
            firstName: $('#first-name').val(),
            lastName: $('#last-name').val(),
            id: 0001,
            contact: {
                email: $('#email-id').val(),
                linkedin: $('#linkedin').val(),
                facebook: $('#facebook').val()
            },
            posts: 0,
            collaborations: 0
        }

        $.ajax({
            type: 'POST',
            url: '/profile',
            data: profile,
            success: function(profile) {
                location.reload()
            }
        })

        return false
    })

})