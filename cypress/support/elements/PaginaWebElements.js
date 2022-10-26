class PaginaWebElements {
    menuQuemSomos = () => { return '.elementor-sticky--active > .elementor-container > .elementor-row > .elementor-element-6bf5647 > .elementor-column-wrap > .elementor-widget-wrap > .elementor-element-d6cf617 > .elementor-widget-container > .elementor-nav-menu--main > #menu-1-d6cf617 > .menu-item-1292 > .elementor-item' }
  
    valores = (index) => { return `//*[@id="content"]/div/div/div/section[8]/div[2]/div/div/div/div/section/div[2]/div/div[${index}]/div/div/div[2]/div/div/p/text()` }
    
    contato = () => { return '.elementor-sticky--active > .elementor-container > .elementor-row > .elementor-element-6bf5647 > .elementor-column-wrap > .elementor-widget-wrap > .elementor-element-e03935a > .elementor-widget-container > .elementor-button-wrapper > .elementor-button-link'}
        
    fone = () => { return '.elementor-element-279b45f > .elementor-widget-container > .elementor-icon-list-items > :nth-child(1) > a > .elementor-icon-list-text'}

    email = () => { return '.elementor-element-279b45f > .elementor-widget-container > .elementor-icon-list-items > :nth-child(2) > a > .elementor-icon-list-text'}
  }

  export default PaginaWebElements;