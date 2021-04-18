import React from 'react';
// import Particles from 'react-particles-js';
import Particles from "react-tsparticles";

class Stars extends React.Component{
  constructor(props) {
    super(props);

    this.particlesInit = this.particlesInit.bind(this);
    this.particlesLoaded = this.particlesLoaded.bind(this);
  }
  particlesInit(main) {
    console.log(main);
    //console.log(main.canvas);
    

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
  }

  particlesLoaded(container) {
    console.log(container);

  }
    render(){
        return (
          <Particles
          id="tsparticles"
          init={this.particlesInit}
          loaded={this.particlesLoaded}
          options={{
            fpsLimit: 60,
            particles: {
              number: {
                value: 200,
                density: {
                  enable: true,
                  area: 500
                }
              },
              color: {
                value: ["#ffffff"]
              },
              shape: {
                type: "circle"
              },
              opacity: {
                value: 1
              },
              size: {
                value: 3,
                random: {
                  enable: true,
                  minimumValue: 1
                }
              },
              move: {
                size: true,
                enable: true,
                speed: 0.25,
                direction: "none",
                random: false,
                straight: false,
                outModes: {
                  default: "out"
                },
                attract: {
                  enable: false,
                  rotateX: 600,
                  rotateY: 1200
                },
                trail: {
                  enable: true,
                  length: 5,
                  fillColor: "#222"
                },
                warp: true
              }
            },
            interactivity: {
              detectsOn: "canvas",
              events: {
                onclick: {
                  enable: true,
                  mode: "push"
                },
                resize: false
              },
              modes: {
                push: {
                  quantity: 4
                }
              }
            },
            detectRetina: true,
            absorbers: {
              orbits: true,
              destroy: true,
              opacity: 1,
              color: "#000",
              size: {
                value: 5,
                limit: 10,
                random: false,
                density: 50
              },
              position: {
                x: 50,
                y: 50
              }
            },
            background: {
              color: "#222"
            }
          }}
        />
        );
    };

}
export default Stars