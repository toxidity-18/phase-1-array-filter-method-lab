
function findMatching(drivers, searchTerm) {
    return drivers.filter(driver => driver.toLowerCase() === searchTerm.toLowerCase());
} 
  
  function fuzzyMatch(drivers, searchTerm) {
    const searchTermLowerCase = searchTerm.toLowerCase();
    return drivers.filter(driver => driver.toLowerCase().startsWith(searchTermLowerCase));
  }
  function matchName(drivers, searchTerm) {
    const searchTermLowerCase = searchTerm.toLowerCase();
    return drivers.filter(driver => driver.name.toLowerCase() === searchTermLowerCase);
  }
  const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'bobby'];
  
  const matchingDrivers = findMatching(drivers, 'Bobby'); 
  const startingMatches = fuzzyMatch(drivers, 'Sa'); 
  
  const driverObjects = [
    { name: 'Bobby', hometown: 'Pittsburgh' },
    { name: 'Sammy', hometown: 'New York' },
  ];
  
  const namedMatches = matchName(driverObjects, 'bobby'); 
  