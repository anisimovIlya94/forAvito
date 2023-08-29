import { GameDetails } from 'entities/Game';
import type { PropsWithChildren } from 'react';

interface GamePageProps {
//  className?: string;
}

function GamePage(props: PropsWithChildren<GamePageProps>) {
//  const { className } = props;

 return (
<div>
    <GameDetails/>
</div>
 );
}

export default GamePage