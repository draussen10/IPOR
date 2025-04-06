import {type FC, memo, useState} from 'react';
import {classNames} from '@/shared/lib/classNames/classNames';
import styles from './StarRating.module.scss';
import {Icon} from '@/shared/ui/Icon/Icon';
import Star from '@/shared/assets/icons/star.svg';

interface StarRatingProps {
    className?: string
    onSelect?: (starsCount: number) => void
    size?: number
    selectedStars?: number
}

const stars = [1, 2, 3, 4, 5];

export const StarRating: FC<StarRatingProps> = memo((props) => {
    const {
        className,
        size = 30,
        selectedStars = 0,
        onSelect
    } = props;

    const [currentStarsCount, setCurrentStarsCount] = useState(selectedStars);
    const [isSelected, setIsSelected] = useState(Boolean(selectedStars));

    const onHover = (startCount: number) => () => {
        if (!isSelected) {
            setCurrentStarsCount(startCount);
        }
    };

    const onLeave = () => {
        if (!isSelected) {
            setCurrentStarsCount(0);
        }
    };

    const onClick = (startCount: number) => () => {
        if (!isSelected) {
            onSelect?.(startCount);
            setCurrentStarsCount(startCount);
            setIsSelected(true);
        }
    };

    return (
        <div className={classNames(styles.starRating, {}, [className])}>
            {stars.map(starNumber => (
                <Icon
                    className={classNames(
                        styles.starIcon,
                        {
                            [styles.hovered]: currentStarsCount >= starNumber,
                            [styles.selected]: isSelected
                        },
                        [styles.normal]
                    )}
                    Svg={Star}
                    key={starNumber}
                    width={size}
                    height={size}
                    onMouseLeave={onLeave}
                    onMouseEnter={onHover(starNumber)}
                    onClick={onClick(starNumber)}
                />
            ))}
        </div>
    );
});
