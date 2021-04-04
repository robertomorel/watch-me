import { HeaderProps } from "../types/interfaces";

export const Header: React.FC<HeaderProps> = ({ selectedGenreTitle }) => (
  <header>
    <span className="category">Categoria:<span> {selectedGenreTitle}</span></span>
  </header>
)