document.addEventListener('DOMContentLoaded', () => {
  const tabHomepage = document.getElementById('tab-homepage');
  const tabFleet = document.getElementById('tab-fleet');
  const wireframeFrame = document.getElementById('wireframe-frame');
  const gridToggle = document.getElementById('grid-toggle');
  const themeToggle = document.getElementById('theme-toggle');
  const wireframeWrapper = document.getElementById('wireframe-wrapper');
  
  const groupHomepage = document.getElementById('group-homepage');
  const groupFleet = document.getElementById('group-fleet');

  // SVG Paths
  const homepageSvg = 'homepage_wireframe.svg';
  const fleetSvg = 'fleet_wireframe.svg';

  // Toggle Pages
  tabHomepage.addEventListener('click', () => {
    tabHomepage.classList.add('active');
    tabFleet.classList.remove('active');
    wireframeFrame.setAttribute('data', homepageSvg);
    groupHomepage.classList.add('active');
    groupFleet.classList.remove('active');
  });

  tabFleet.addEventListener('click', () => {
    tabFleet.classList.add('active');
    tabHomepage.classList.remove('active');
    wireframeFrame.setAttribute('data', fleetSvg);
    groupFleet.classList.add('active');
    groupHomepage.classList.remove('active');
  });

  // Toggle Grid Columns
  gridToggle.addEventListener('click', () => {
    const isActive = gridToggle.classList.toggle('active');
    if (isActive) {
      wireframeWrapper.classList.add('show-grid');
      gridToggle.querySelector('span').textContent = 'Hide Grid';
    } else {
      wireframeWrapper.classList.remove('show-grid');
      gridToggle.querySelector('span').textContent = 'Show Grid';
    }
  });

  // Toggle Theme (Dark / Light)
  themeToggle.addEventListener('click', () => {
    const currentTheme = document.body.getAttribute('data-theme');
    if (currentTheme === 'light') {
      document.body.removeAttribute('data-theme');
      themeToggle.querySelector('span').textContent = 'Light Mode';
    } else {
      document.body.setAttribute('data-theme', 'light');
      themeToggle.querySelector('span').textContent = 'Dark Mode';
    }
  });

  // Listen to SVG load to bind click events to SVG elements (Annotation Markers)
  wireframeFrame.addEventListener('load', () => {
    setupSvgInteractions();
  });

  function setupSvgInteractions() {
    const svgDoc = wireframeFrame.contentDocument;
    if (!svgDoc) return;

    // Find all markers
    const markers = svgDoc.querySelectorAll('#annotation-markers > g, #annotation-markers circle');
    markers.forEach(marker => {
      marker.style.cursor = 'pointer';
      marker.addEventListener('click', (e) => {
        const textElement = marker.tagName === 'circle' ? marker.nextElementSibling : marker.querySelector('text');
        if (!textElement) return;
        const index = textElement.textContent.trim();
        highlightAnnotationCard(index);
      });
    });
  }

  function highlightAnnotationCard(num) {
    const card = document.getElementById(`annotation-${num}`);
    if (card) {
      card.scrollIntoView({ behavior: 'smooth', block: 'center' });
      card.style.borderColor = 'var(--primary)';
      card.style.boxShadow = '0 0 20px var(--primary-glow)';
      
      setTimeout(() => {
        card.style.borderColor = '';
        card.style.boxShadow = '';
      }, 2000);
    }
  }
});
