import React from 'react';
import { useRouteMatch, Link } from 'react-router-dom';

import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import logoImage from '../../assets/Logo.svg';
import { Header, RepositoryInfo, Issues } from './styles';

interface RepositoryParams {
  repository: string;
}

const Repository: React.FC = () => {
  const { params } = useRouteMatch<RepositoryParams>();

  return (
    <>
      <Header>
        <img src={logoImage} alt="Github Explorer" />

        <Link to="/">
          <FiChevronLeft size={16} />
          Voltar
        </Link>
      </Header>
      <RepositoryInfo>
        <header>
          <img
            src="https://avatars0.githubusercontent.com/u/50842268?s=460&u=8c904a078bf9ff1bda538ddeb773f770880f12a4&v=4"
            alt="Imagem Logo"
          />
          <div>
            <strong>{params.repository}</strong>
            <p>Desc</p>
          </div>
        </header>
        <ul>
          <li>
            <strong>1808</strong>
            <span>Stars</span>
          </li>

          <li>
            <strong>48</strong>
            <span>Forks</span>
          </li>

          <li>
            <strong>67</strong>
            <span>Issues abertas</span>
          </li>
        </ul>
      </RepositoryInfo>

      <Issues>
        <Link to="a">
          <div>
            <strong>asd</strong>
            <p>asdsa</p>
          </div>

          <FiChevronRight size={20} />
        </Link>
      </Issues>
    </>
  );
};

export default Repository;
