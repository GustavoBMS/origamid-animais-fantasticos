//Navegação por fotos
function initTabNav(){
  //seleciona cada imagem dos animais
  const tabMenu = document.querySelectorAll('.js-tabmenu li');
  //Seleciona o conteudo da lista dos animais
  const tabContent = document.querySelectorAll('.js-tabcontent section');

  if(tabMenu.length && tabContent.length){
    //Faz com que o primeiro valor de tabContent seja padrao
    tabContent[0].classList.add('ativo');

    //Função para verificar a se a classe esta ativa
    function activeTab(index){
    //foreach faz com que remova os elementos nao usados
    tabContent.forEach((section) => {
      section.classList.remove('ativo');
    });
    tabContent[index].classList.add('ativo');
    }

    //evento para ativar a classe com click
    tabMenu.forEach((itemMenu,index) => {
      itemMenu.addEventListener('click', () => {
        activeTab(index);
      });
    });
  }
}
initTabNav();

//Accordion list do FAQ
function initAccordion(){
  const accordionList = document.querySelectorAll('.js-accordion dt');
  const activeClass = 'ativo'
  if(accordionList.length){
    //Faz com que o primeiro titulo do faq fique ativado
    accordionList[0].classList.add(activeClass);
    accordionList[0].nextElementSibling.classList.add(activeClass);
    
    function activeAccordion(event){
      this.classList.toggle(activeClass);
      console.log(this.nextElementSibling.classList.toggle(activeClass));
    }
    
    accordionList.forEach((item, index) => {
      item.addEventListener('click', activeAccordion);
    });
  }
}
initAccordion();

//Scroll Suave link interno
function initScrollSuave(){
  const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]');

  function scrollToSection(event){
    event.preventDefault();
    const href = event.currentTarget.getAttribute('href');
    const section = document.querySelector(href);

    section.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
    /* Forma alternativa que utiliza funcao nativa do js mas ainda nao e 100% em outros browsers assim como o scrollIntoView*/
    /*
    const topo = section.offsetTop;
    window.scrollTo({
      top: topo,
      behavior: "smooth",
    });
    */
  }
  linksInternos.forEach((link) => {
    link.addEventListener('click', scrollToSection);
  });
}
initScrollSuave();