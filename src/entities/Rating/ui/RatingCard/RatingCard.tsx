import React from "react";
import clx from "classnames";
import styles from "./RatingCard.module.scss";
import { StarRating } from "../../../../shared/ui/StarRating/StarRating";
import { Modal } from "../../../../shared/ui/Modal/Modal";
import { Input, InputTheme } from "../../../../shared/ui/Input/Input";
import Button, { ButtonTheme } from "../../../../shared/ui/Button/Button";

interface RatingCardProps {
  className?: string;

  rate?: number;

  title?: string;

  feedbackTitle?: string;
  hasFeedback?: boolean;

  onCancel?: (starsCount: number) => void;
  onAccept?: (starsCount: number) => void;
}

export const RatingCard: React.FC<RatingCardProps> = (props) => {
  const { className, title, feedbackTitle, hasFeedback, rate, onCancel, onAccept } = props;

  const ratingcardClasses = clx(styles.RatingCard, {
    [className!]: className,
  });

  const [starsCount, setStarsCount] = React.useState<number>(rate || 0);
  const [feedback, setFeedback] = React.useState<string>("");

  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const onSelectStars = React.useCallback((selectedStarsCount: number) => {
    setStarsCount(selectedStarsCount);
    if (hasFeedback) {
      setIsModalOpen(true);
    } else {
      onAccept?.(selectedStarsCount);
    }
  }, []);

  const onAcceptHandler = React.useCallback(() => {
    setIsModalOpen(false);
    onAccept?.(starsCount);
  }, [feedback, onAccept, starsCount]);

  const onCancelHandler = React.useCallback(() => {
    setIsModalOpen(false);
  }, [onCancel]);

  return (
    <div className={ratingcardClasses}>
      <h2>{title}</h2>

      <StarRating selectedStars={rate} onSelect={onSelectStars} />

      <Modal onOpenModal={isModalOpen} onCloseModal={onCancelHandler}>
        <h2>Do you really want to confirm this rating?</h2>
        <div>
          <Button theme={ButtonTheme.DEFAULT} onClick={onCancelHandler}>
            Закрыть
          </Button>
          <Button theme={ButtonTheme.DEFAULT} onClick={onAcceptHandler}>
            Отправить
          </Button>
        </div>
      </Modal>
    </div>
  );
};
