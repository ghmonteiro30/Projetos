import React from 'react';
import './Hero.css'; // Use './' para indicar o caminho relativo


export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Empresa de Manutenção de Computadores</h1>
        <p className="hero-description">Serviços Profissionais de Manutenção e Suporte Técnico</p>
        <p className="hero-description">Nós somos especializados em manutenção e reparo de computadores e dispositivos eletrônicos. Oferecemos soluções rápidas e confiáveis para manter seus sistemas funcionando perfeitamente.</p>
        <h2>Nossos Serviços</h2>
        <ul className="service-list">
          <li>Manutenção Preventiva</li>
          <li>Reparo de Hardware e Software</li>
          <li>Atualização de Componentes</li>
          <li>Remoção de Vírus e Malware</li>
          <li>Suporte Técnico Remoto</li>
        </ul>
        <h2>Nossa Equipe</h2>
        <div className="employee-grid">
          <div className="employee">
          <img src="/public/next.svg" alt="Funcionario 1" />
            <h3>João Silva</h3>
            <p>Técnico Sênior</p>
          </div>
          <div className="employee">
          <img src="/public/usuario.png" alt="Funcionario 2" />
            <h3>Maria Santos</h3>
            <p>Especialista em Reparo</p>
          </div>
          <div className="employee">
          <img src="\public\usuario.png" alt="Funcionario 3" />
            <h3>Pedro Oliveira</h3>
            <p>Engenheiro de Software</p>
          </div>
        </div>
        <h2>Sobre Nós</h2>
        <p className="hero-description">Somos uma equipe dedicada a fornecer soluções confiáveis e eficientes para a manutenção de computadores. Com anos de experiência no setor, estamos comprometidos em atender às necessidades de nossos clientes e garantir que seus sistemas funcionem perfeitamente.</p>
      </div>
    </section>
  );
}
