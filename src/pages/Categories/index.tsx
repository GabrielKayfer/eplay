import ProductsList from '../../components/ProductsList'
import Game from '../../models/Game'

import resident from '../../assets/images/resident.png'
import diablo from '../../assets/images/diablo.png'
import zelda from '../../assets/images/zelda.png'
import starWars from '../../assets/images/star_wars.png'
import fifa from '../../assets/images/fifa.png'
import tlou from '../../assets/images/tlou.png'
import pvz2 from '../../assets/images/pvz2.jpg'
import luta from '../../assets/images/luta.png'

const promocoes: Game[] = [
  {
    id: 1,
    category: 'Ação',
    description:
      'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horror...',
    title: 'Residente Evil 4',
    system: 'Windows',
    infos: ['10%', 'R$ 250,00'],
    image: resident
  },
  {
    id: 2,
    category: 'Esporte',
    description:
      'EA SPORTS™ FIFA 23 traz o Jogo de Todo Mundo aos gramados com a tecnologia HyperMotion2...',
    title: 'FIFA 23',
    system: 'PS5',
    infos: ['50%', 'R$ 99,99'],
    image: fifa
  },
  {
    id: 3,
    category: 'Estratégia',
    description:
      'Os zumbis invadem sua casa, e a única defesa são plantas poderosas. Pense rápido, plante certo...',
    title: 'Plants vs Zombies 2',
    system: 'Windows',
    infos: ['70%', 'R$ 40,00'],
    image: pvz2
  },
  {
    id: 4,
    category: 'Aventura',
    description:
      'Descubra o jogo premiado que inspirou a série de TV. Explore a América devastada com Joel...',
    title: 'The Last of Us™ Part I',
    system: 'Windows',
    infos: ['40%', 'R$ 150,00'],
    image: tlou
  }
]

const emBreve: Game[] = [
  {
    id: 5,
    category: 'RPG',
    description:
      'Diablo IV é um RPG de ação em desenvolvimento pela Blizzard Entertainment.',
    title: 'Diablo 4',
    system: 'Windows',
    infos: ['04/03'],
    image: diablo
  },
  {
    id: 6,
    category: 'RPG',
    description:
      'Uma aventura épica pela terra e pelos céus de Hyrule aguarda em The Legend of Zelda™...',
    title: 'The Legend of Zelda - TOK',
    system: 'Switch',
    infos: ['07/02'],
    image: zelda
  },
  {
    id: 7,
    category: 'Aventura',
    description:
      'Star Wars Jedi: Survivor é um próximo jogo de ação e aventura desenvolvido pela Respawn...',
    title: 'Star Wars Jedi Survivor',
    system: 'Switch',
    infos: ['15/01'],
    image: starWars
  },
  {
    id: 8,
    category: 'Luta',
    description:
      'Street Fighter 6 é um próximo jogo de luta desenvolvido e publicado pela Capcom.',
    title: 'Street Fighter 6',
    system: 'Windows',
    infos: ['05/4'],
    image: luta
  }
]

const Categories = () => (
  <>
    <ProductsList games={promocoes} title="Ação" background="gray" />
    <ProductsList games={emBreve} title="Aventura" background="black" />
    <ProductsList games={emBreve} title="RPG" background="gray" />
    <ProductsList games={emBreve} title="FPS" background="black" />
  </>
)

export default Categories
