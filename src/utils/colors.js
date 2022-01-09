const event_colors = ["green", "yellow", "purple", "blue"];

const getRandomColor = () => {
  const random_index = Math.floor(Math.random() * event_colors.length);
  return event_colors[random_index];
};

export { event_colors, getRandomColor };
