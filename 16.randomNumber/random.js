const randomNumber = () => {
    const min = 1;
    const max = 100;
    return Math.floor(Math.random() * 100)+1;
  };
  
  console.log(randomNumber());