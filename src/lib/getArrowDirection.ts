import { ArrowDirection } from 'src/types';

const getArrowDirection = ({ top, left, height, width }: DOMRect): ArrowDirection =>
    top < -height
        ? 'up'
        : top > window.innerHeight - 10
        ? 'down'
        : left > window.innerWidth - 10
        ? 'right'
        : left < -width
        ? 'left'
        : null;

export default getArrowDirection;
