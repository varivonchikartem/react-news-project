import { memo, useState, useEffect } from "react";
import styles from "./StarRating.module.scss";
import StarIcon from "../../assets/icons/star.svg";
import clx from "classnames";
import { Icon, IconTheme } from "../Icon/Icon";

interface StarRatingProps {
  className?: string;
  onSelect?: (starsCount: number) => void;
  size?: number;
  selectedStars?: number;
}

const stars = [1, 2, 3, 4, 5];

export const StarRating = memo((props: StarRatingProps) => {
  const { className, size = 30, selectedStars = 0, onSelect } = props;
  const [currentStarsCount, setCurrentStarsCount] = useState(selectedStars);
  const [isSelected, setIsSelected] = useState(Boolean(selectedStars));

  useEffect(() => {
    setCurrentStarsCount(selectedStars);
    setIsSelected(Boolean(selectedStars));
  }, [selectedStars]);

  const starRatingClasses = clx(styles.StarRating, {
    [className!]: className,
  });

  const onHover = (starsCount: number) => () => {
    if (!isSelected) {
      setCurrentStarsCount(starsCount);
    }
  };

  const onLeave = () => {
    if (!isSelected) {
      setCurrentStarsCount(selectedStars);
    }
  };

  const onClick = (starsCount: number) => () => {
    onSelect?.(starsCount);
    setCurrentStarsCount(starsCount);
    setIsSelected(true);
  };

  return (
    <div className={starRatingClasses}>
      {stars.map((starNumber) => (
        <Icon
          className={clx(styles.starIcon, {
            [styles.selected]: isSelected && currentStarsCount >= starNumber,
            [styles.hovered]: !isSelected && currentStarsCount >= starNumber,
            [styles.normal]: currentStarsCount < starNumber,
          })}
          theme={IconTheme.DEFAULT}
          Svg={StarIcon}
          key={starNumber}
          width={size}
          height={size}
          onMouseLeave={onLeave}
          onMouseEnter={onHover(starNumber)}
          onClick={onClick(starNumber)}
        />
      ))}
      {isSelected && <div className={styles.selectedRating}>You rated: {currentStarsCount} stars</div>}
    </div>
  );
});
