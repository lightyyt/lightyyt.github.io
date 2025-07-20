
  class ProjectCard extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
      const img = this.getAttribute('img') || '';
      const info = this.getAttribute('info') || '';
      const desc = this.getAttribute('desc') || '';

      const myhead = document.createElement('head');
      myhead.innerHTML = `
  <link rel="stylesheet" href="/css/pfp.css">
  <link rel="stylesheet" href="/css/index.css">
  <link rel="stylesheet" href="/css/main.css">
  <link rel="stylesheet" href="/css/cen_h1.css">
  <link rel="stylesheet" href="/css/project.css">
      `;
      const wrapper = document.createElement('span');
      
      wrapper.classList.add('project');
      if(img == "noimg"){
        wrapper.innerHTML = `
        <span class="left">
          <img src="" style="visibility: hidden;" class="smallimg" />`
      } else {
        wrapper.innerHTML = `
        <span class="left">
          <img src="${img}" class="smallimg" />`
      }
      wrapper.innerHTML +=`
        </span>
        <div class="main-info" style="flex-direction:column;">
          <div class="titlealt">${info}</div>
          <div class="desc">${desc}</div>
        </div>
      `;

      this.shadowRoot.appendChild(myhead);
      this.shadowRoot.appendChild(wrapper);
    }
  }

  customElements.define('project-card', ProjectCard);