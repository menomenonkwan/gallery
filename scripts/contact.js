// fade in form
$( ".mail" ).delay( 100 ).animate({opacity: 1}, 100);

// animate form elements in from sides
anime({
  targets: '.mail input, .mail textarea, button, hr',
  translateX: 1550,
  direction: 'reverse',
  easing: 'easeInOutBack'
});

anime({
  targets: '.mail label, [type="checkbox"]',
  translateX: -1550,
  direction: 'reverse',
  easing: 'easeInOutBack'
});

// form validations
$("#comment-form").validate({
  rules: {
    name: {
      required: true,
    },
    email: {
      required: true,
      email: true,
    },
    subject: {
      required: false,
    },
    message: {
      required: false,
    },
    agree: {
      required: false,
    }
  },
  messages: {
    name: {
      required: "What shall I call you?"
    },
    email: {
      required: "How shall I respond with an email?"
    }
  }
});
