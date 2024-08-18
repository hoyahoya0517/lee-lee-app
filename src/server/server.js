"use server";

import { revalidatePath } from "next/cache";
import { getAllSetting, updateSetting } from "./mongo";

export async function getSetting() {
  const data = await getAllSetting();
  return data;
}

export async function changeHeartColor(newHeartColor) {
  const data = await getAllSetting();
  const newData = { ...data, heartColor: String(newHeartColor) };
  await updateSetting(data.id, newData);
  revalidatePath("/", "layout");
}
