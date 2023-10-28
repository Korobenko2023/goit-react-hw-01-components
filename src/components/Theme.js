export const theme = {
    colors: {
        white: "#fafafa",
        black: "#212121",
        violet: "#0900114a",
    },
    background: {
        white: "#ffff",
        lightRed: "#f1b5b5",
        lightBlue: "#97d3e6",
        lightBlueSecond: "#97deee",
        violet: "#0900114a",
        green: "green",
        red: "red",
    },
    radii: {
        sm: "4px",
        md: "8px",
        lg: "16px",
    },
    spasing: (value) => `${value * 4}px`,

    getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
    },

    isOnline: {
    online: "green",
    offline: "red",
  },
    
}


