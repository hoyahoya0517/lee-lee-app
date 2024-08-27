"use server";

import { revalidatePath } from "next/cache";
import {
  getAllSetting,
  getAllWishList,
  updateSetting,
  updateWishList,
} from "./mongo";

export async function getSetting() {
  const data = await getAllSetting();
  revalidatePath("/", "layout");
  return data;
}

export async function changeHeartColor(newHeartColor) {
  const data = await getAllSetting();
  const newData = { ...data, heartColor: String(newHeartColor) };
  await updateSetting(data.id, newData);
  revalidatePath("/", "layout");
}

export async function getWishList() {
  const data = await getAllWishList();
  revalidatePath("/", "layout");
  return data;
}

export async function updateMemo(newMemo) {
  const data = await getWishList();
  const newData = { ...data, text: newMemo };
  await updateWishList(data.id, newData);
  revalidatePath("/", "layout");
}
