import "../stylles/components/information.sass";

//importação dos icones
import { AiOutlinePhone, AiOutlineMail, AiFillEnvironment } from "react-icons/ai";

const Information = () => {
  return (
    <section id="information">
        <div className="info-card">
                <AiOutlinePhone  id="phone-icon" />
            <div>
                    <h3>Telefone</h3>
                    <p>(81)98869.3599</p>
                </div>
            </div>
            <div className="info-card">
                <AiOutlineMail  id="mail-icon" />
            <div>
                    <h3>E-mail</h3>
                    <p>ana.br@hotmail.com</p>
                </div>
            </div>
            <div className="info-card">
                <AiFillEnvironment id="pin-icon" />
            <div>
                    <h3>Localização</h3>
                    <p>Abreu e Lima / PE</p>
                </div>
            </div>
               </section>
  );
}

export default Information
