import styled from "styled-components";
import LogOut from "../assets/logout.png";
import Profile from "../assets/person-outline 1.png";
import More from "../assets/add-grana.png";
import Less from "../assets/retirar-grana.png";
export default function Carteira() {
    return (
        <Align>
            <div className="responsive">
                <header>
                    <img src={Profile} alt="profile" />
                    Olá fulano
                    <img src={LogOut} alt="logout" />
                </header>
                <article>
                    grwgwrgwrgw
                </article>
                <footer>
                    <section>
                        <img src={More} alt="guardar" />
                        <h3>add din din</h3>
                    </section>
                    <section>
                        <img src={Less} alt="sacar" />
                        <h3>add din din</h3>
                    </section>                    
                </footer>
            </div>
        </Align>
    )
}

const Align = styled.div`
    width: 100%;
    height: 100vh;
    align-items: center;
    position: relative;
    header{
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        font-weight: 700;
        font-size: 26px;
        line-height: 31px;
        color: #FFFFFF;
        display: flex;
        justify-content: space-between;
        padding: 25px 24px 22px;
        img{
            width: 23px;
        }
    }
    article{
        width: calc(100vw - 50px);
        height: calc(100vh - 114px - 13px - 16px - 78px);
        position: absolute;
        top: 78px;
        left: 25px;
        background: #FFFFFF;
        border-radius: 5px;
    }
    footer{
        width: 100%;
        display: flex;
        justify-content: space-between;
        position: absolute;
        bottom: 0;
        left: 0;
        padding: 13px 25px 16px;
        section{
            background: #A328D6;
            width: 48%;
            height: 114px;
            border-radius: 5px;
            padding: 10px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            color: #FFFFFF;
            img{
                width: 22px;
            }
        }
    }
`;