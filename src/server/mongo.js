import { MongoClient, ObjectId } from "mongodb";

const mongoURL = process.env.MONGO_URL;

const client = new MongoClient(mongoURL);
const db = client.db("lee-date-app");
const setting = db.collection("setting");
const wishList = db.collection("wishList");

async function fixArrayId(data) {
  return data.map((element) => {
    const newId = element._id.toString();
    const newElement = { ...element, _id: newId, id: newId };
    return newElement;
  });
}

async function fixId(data) {
  const newId = data._id.toString();
  const newData = { ...data, _id: newId, id: newId };
  return newData;
}

export async function getAllSetting() {
  const arrayData = await setting.find().toArray();
  const fixData = await fixId(arrayData[0]);
  return fixData;
}

export async function updateSetting(id, newData) {
  delete newData._id;
  await setting.updateOne(
    { _id: new ObjectId(id) },
    {
      $set: {
        ...newData,
      },
    },
    { upsert: true }
  );
}

export async function getAllWishList() {
  const arrayData = await wishList.find().toArray();
  const fixData = await fixId(arrayData[0]);
  return fixData;
}
