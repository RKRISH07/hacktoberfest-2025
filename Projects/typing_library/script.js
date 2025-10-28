 
    document.addEventListener('DOMContentLoaded', () => {
      const typewriter = new Typewriter('#typewriter', {
        loop: true,
        delay: 75,
      });

      typewriter
        .typeString('Developer')
        .pauseFor(1000)
        .deleteAll()
        .typeString('Designer')
        .pauseFor(1000)
        .deleteAll()
        .typeString('Freelancer')
        .pauseFor(1000)
        .deleteAll()
        .start();
    });
 