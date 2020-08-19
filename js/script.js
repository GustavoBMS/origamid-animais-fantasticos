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