// atalho criar componte: digita rafce e gera o corpo
//importar imagem como componente import Avatar

import SocialNetworks from "./SocialNetworks";
import Information from "./Information";

import Avatar from '../img/EU2.jpeg';

import '../stylles/components/sidebar.sass';








function Sidebar() {
  return (
    <aside id="sidebar">
      <img src={Avatar} alt="Ana Santos" />
      <p className="title">Desenvolvedora Front-End</p>
      <SocialNetworks />
      <p>Contatos</p>
      <Information />
      <a href="" id="btn">Donwload CV</a>

    </aside>
  );
};

export default Sidebar

