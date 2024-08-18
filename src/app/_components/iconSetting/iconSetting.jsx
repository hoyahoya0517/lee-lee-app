import { changeIcon } from "../../../server/server";
import styles from "./iconSetting.module.css";
import { useFormState } from "react-dom";

export default function IconSetting({ icon }) {
  const [state, formAction] = useFormState(changeIcon, {});
  return (
    <div className={styles.iconSettingContainer}>
      <form action={formAction} className={styles.iconSetting}>
        <div className={styles.iconSettingInput}>
          <input name="manIcon" required maxLength={1} placeholder={icon.man} />
          <input
            name="womanIcon"
            required
            maxLength={1}
            placeholder={icon.woman}
          />
        </div>
        <button>SAVE</button>
      </form>
    </div>
  );
}
