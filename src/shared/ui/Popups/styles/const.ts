import {type DropdownDirection} from '@/shared/types/ui';
import styles from './popup.module.scss';

export const mapDirectionClass: Record<DropdownDirection, string> = {
    'bottom left': styles.bottomLeft,
    'top left': styles.topLeft,
    'bottom right': styles.bottomRight,
    'top right': styles.topRight
};
