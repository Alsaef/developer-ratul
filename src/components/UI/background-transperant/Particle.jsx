"use client"; // Ensures this component is client-side

import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const ParticlesBackground = () => {
  const particlesInit = async (main) => {
    await loadFull(main); // Load the full tsParticles library
  };

  const particlesOptions = {
    background: {
      color: "#000000", // Set background color to black
    },
    particles: {
      number: {
        value: 160, // Number of stars (particles)
        density: {
          enable: true,
          value_area: 1500, // Density of particles in the area
        },
      },
      size: {
        value: 1, // Size of stars (small particles)
      },
      move: {
        enable: true,
        speed: 0.05, // Speed of particles' movement
        direction: "none", // Particles move in random directions
        outMode: "out", // Particles will disappear when they move out of the canvas
      },
      opacity: {
        value: 0.5, // Opacity of the stars
        anim: {
          enable: true, // Animate opacity
          speed: 1, // Speed of opacity animation
          opacity_min: 0.05, // Minimum opacity
        },
      },
      shape: {
        type: "circle", // Particles are circular (stars)
      },
      line_linked: {
        enable: false, // Disable lines connecting particles
        opacity: 0.03, // Invisible links
      },
      links: {
        enable: false, // Disable links between particles (stars don't connect)
      },
      collisions: {
        enable: false, // Disable collisions (stars don't interact)
      },
    },
    interactivity: {
      events: {
        onclick: {
          enable: true, // Enable particle addition on click
          mode: "push", // Add particles on click
        },
      },
      modes: {
        push: {
          particles_nb: 1, // Add one particle on each click
        },
      },
    },
    detectRetina: true, // Support retina displays
  };

  return <Particles id="tsparticles" init={particlesInit} options={particlesOptions} />;
};

export default ParticlesBackground;
