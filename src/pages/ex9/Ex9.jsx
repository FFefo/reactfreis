import './Ex9.scss'
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Exercicio9() {

    const [valorGrama, setValorGrama] = useState(0);
    const [valorTotal, setValorTotal] = useState(0);

    function Grama(e) {
        let novoValor = e.target.value
        setValorGrama(novoValor)
    };

    function Calculo() {
        let total = Number(valorGrama)
        let msg = ''

        if (total <= 0) {
            msg = 'Peso Inválido'
        }
        else if (total >= 1000) {
            total *= 3 / 100
        } else {
            total *= 3.5 / 100
        }

        if (total <= 0) {
            setValorTotal(msg)
        } else {
            setValorTotal(total.toFixed(2))
        }
    };

    return (
        <div className='Ex9'>
            <header className='pagina-exercicio9'>
                <div className="logo">

                    <img src="/assets/images/frei-logo.png" alt='' width='51px' height='60px' />
                    <h2>React FreiS</h2>

                </div>
                <div className="topicos">
                    <Link to="/">Início</Link>
                    <Link to="/Sobre">Sobre</Link>
                </div>
            </header>
            <div className='centro'>
                <div className='título'>
                    <Link to='/'><img src="/assets/images/setinha.png" alt="" width='36px' /></Link>
                    <h2>Exercício 09 - Sorveteria</h2>
                </div>

                <div className='rosa faixa'></div>
                <div className='conteúdo'>

                    <div className='descrição'>
                        <p>Implemente um programa em Javascript que <b>calcule o total</b> a se pagar em uma compra na sorveteria, a partir do total de gramas comprado. O preço de <b>100g é R$ 3,50</b> mas se o total de gramas for a partir de 1kg, o preço das 100g <b>diminui</b> 50 centavos. Se o total de gramas for menor ou igual a zero, enviar a mensagem <b>"Peso Inválido".</b></p>
                    </div>

                    <div className='caixa'>
                        <div className='grupo1'>

                            <h4>Informe o total em gramas</h4>
                            <input type="text" placeholder='0' value={valorGrama} onChange={Grama} />
                        </div>

                        <div className='botão'>
                            <button onClick={Calculo}>Executar</button>
                        </div>

                    </div>

                    <div className='resultado'>
                        <h4>Resultado: {valorTotal}</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}