import React from "react";
import clx from "classnames";
import styles from "./CommentItem.module.scss";
import { Comment } from "../../model/types/CommentSchema";

interface CommentItemProps {
  className?: string;

  comment?: Comment;
}

export const CommentItem: React.FC<CommentItemProps> = (props) => {
  const { className } = props;

  const commentItemClasses = clx(styles.CommentItem, {
    [className!]: className,
  });

  return (
   <>
    <div className={commentItemClasses}>
      <h2 className={styles.title}>Title</h2>
      <p className={styles.subtitle}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate ipsam consequatur quaerat excepturi
        illum labore aspernatur eveniet? Aperiam id sunt asperiores in, rerum, harum officiis ullam
        reprehenderit ratione accusamus, vero numquam beatae enim corrupti tempore culpa quidem earum fugiat.
        A saepe exercitationem debitis tempore. Vero eaque temporibus nam doloremque sunt.
      </p>
      <div className={styles.UserDate}>
        <span className={styles.username}>Username</span>
        <data className={styles.date} value="2024-06-26">
          26.06.2024
        </data>
      </div>
    </div>
    <div className={commentItemClasses}>
      <h2 className={styles.title}>Title</h2>
      <p className={styles.subtitle}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate ipsam consequatur quaerat excepturi
        illum labore aspernatur eveniet? Aperiam id sunt asperiores in, rerum, harum officiis ullam
        reprehenderit ratione accusamus, vero numquam beatae enim corrupti tempore culpa quidem earum fugiat.
        A saepe exercitationem debitis tempore. Vero eaque temporibus nam doloremque sunt.
      </p>
      <div className={styles.UserDate}>
        <span className={styles.username}>Username</span>
        <data className={styles.date} value="2024-06-26">
          26.06.2024
        </data>
      </div>
    </div>
    <div className={commentItemClasses}>
      <h2 className={styles.title}>Title</h2>
      <p className={styles.subtitle}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate ipsam consequatur quaerat excepturi
        illum labore aspernatur eveniet? Aperiam id sunt asperiores in, rerum, harum officiis ullam
        reprehenderit ratione accusamus, vero numquam beatae enim corrupti tempore culpa quidem earum fugiat.
        A saepe exercitationem debitis tempore. Vero eaque temporibus nam doloremque sunt.
      </p>
      <div className={styles.UserDate}>
        <span className={styles.username}>Username</span>
        <data className={styles.date} value="2024-06-26">
          26.06.2024
        </data>
      </div>
    </div>
    <div className={commentItemClasses}>
      <h2 className={styles.title}>Title</h2>
      <p className={styles.subtitle}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate ipsam consequatur quaerat excepturi
        illum labore aspernatur eveniet? Aperiam id sunt asperiores in, rerum, harum officiis ullam
        reprehenderit ratione accusamus, vero numquam beatae enim corrupti tempore culpa quidem earum fugiat.
        A saepe exercitationem debitis tempore. Vero eaque temporibus nam doloremque sunt.
      </p>
      <div className={styles.UserDate}>
        <span className={styles.username}>Username</span>
        <data className={styles.date} value="2024-06-26">
          26.06.2024
        </data>
      </div>
    </div>
    <div className={commentItemClasses}>
      <h2 className={styles.title}>Title</h2>
      <p className={styles.subtitle}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate ipsam consequatur quaerat excepturi
        illum labore aspernatur eveniet? Aperiam id sunt asperiores in, rerum, harum officiis ullam
        reprehenderit ratione accusamus, vero numquam beatae enim corrupti tempore culpa quidem earum fugiat.
        A saepe exercitationem debitis tempore. Vero eaque temporibus nam doloremque sunt.
      </p>
      <div className={styles.UserDate}>
        <span className={styles.username}>Username</span>
        <data className={styles.date} value="2024-06-26">
          26.06.2024
        </data>
      </div>
    </div>
    <div className={commentItemClasses}>
      <h2 className={styles.title}>Title</h2>
      <p className={styles.subtitle}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate ipsam consequatur quaerat excepturi
        illum labore aspernatur eveniet? Aperiam id sunt asperiores in, rerum, harum officiis ullam
        reprehenderit ratione accusamus, vero numquam beatae enim corrupti tempore culpa quidem earum fugiat.
        A saepe exercitationem debitis tempore. Vero eaque temporibus nam doloremque sunt.
      </p>
      <div className={styles.UserDate}>
        <span className={styles.username}>Username</span>
        <data className={styles.date} value="2024-06-26">
          26.06.2024
        </data>
      </div>
    </div>
    <div className={commentItemClasses}>
      <h2 className={styles.title}>Title</h2>
      <p className={styles.subtitle}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate ipsam consequatur quaerat excepturi
        illum labore aspernatur eveniet? Aperiam id sunt asperiores in, rerum, harum officiis ullam
        reprehenderit ratione accusamus, vero numquam beatae enim corrupti tempore culpa quidem earum fugiat.
        A saepe exercitationem debitis tempore. Vero eaque temporibus nam doloremque sunt.
      </p>
      <div className={styles.UserDate}>
        <span className={styles.username}>Username</span>
        <data className={styles.date} value="2024-06-26">
          26.06.2024
        </data>
      </div>
    </div>
   </>
  );
};
