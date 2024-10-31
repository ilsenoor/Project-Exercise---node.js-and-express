import userData from "src/data/users.json" assert { type: "json" };

const updateUserById = (id, username, password, name, image) => {
  const user = userData.users.find((user) => user.id === id);

  if (!user) {
    throw new Error("User not found");
  }

  user.username = username ?? user.username;
  user.password = password ?? user.password;
  user.name = name ?? user.name;
  user.image = image ?? user.image;

  return user;
};

export default updateUserById;
