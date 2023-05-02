function capitalizeName(name) {
    return name.charAt(0)===name.charAt(0).toUpperCase()?name:name.charAt(0).toUpperCase() + name.slice(1);
  }
  console.log(capitalizeName("john")); 
  console.log(capitalizeName("Jane")); 
  console.log(capitalizeName("1234")); 
  console.log(capitalizeName("")); 
