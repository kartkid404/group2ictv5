particlesJS('particles-js2',

  {
    "particles": {
      "number": {
        "value": 200, // Increase the number of particles for a more snowy effect
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#ffffff" // White color for snow
      },
      "shape": {
        "type": "circle", // Circular shape for snowflakes
        "stroke": {
          "width": 0,
          "color": "#000000"
        }
      },
      "opacity": {
        "value": 0.8, // More opacity for brighter snowflakes
        "random": true, // Random opacity for a natural look
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 3, // Smaller particles to resemble snowflakes
        "random": true, // Random sizes for a more natural look
        "anim": {
          "enable": false,
          "speed": 20,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": false // Disable lines between particles
      },
      "move": {
        "enable": true,
        "speed": 1, // Slow movement to mimic falling snow
        "direction": "bottom", // Particles will fall downwards
        "random": true, // Random movement
        "straight": false,
        "out_mode": "out", // Particles will fall out of the canvas
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": false, // Disable interaction effects for a natural snowfall
        },
        "onclick": {
          "enable": false, // Disable particle push on click
        },
        "resize": true
      }
    },
    "retina_detect": true,
    "config_demo": {
      "hide_card": false,
      "background_color": "#000000", // Dark background to make snow stand out
      "background_image": "",
      "background_position": "50% 50%",
      "background_repeat": "no-repeat",
      "background_size": "cover"
    }
  }

);
