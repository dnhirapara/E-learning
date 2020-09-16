$(document).ready(
    function hello() {
        let card = $('#id_blog_1').clone();
        $('#id_card_blog').append(card);
        $('#id_card_blog').prepend(card);
        $('#id_card_blog').append(card);
        $('#id_card_blog').prepend(card);
        $('#id_card_blog').append(card);
        $('#id_card_blog').append(card);
        $('#id_card_blog').append(card);

    }
);