import eventData from "src/data/events.json" assert { type: "json" };
import { v4 as uuid } from "uuid";

const createEvent = (
  id,
  createdBy,
  title,
  description,
  image,
  categoryIds,
  location,
  startTime,
  endTime
) => {
  const newEvent = {
    id: uuid(),
    createdBy,
    title,
    description,
    image,
    categoryIds,
    location,
    startTime,
    endTime,
  };

  eventData.events.push(newEvent);
  return newEvent;
};

export default createEvent;
