const takeOff = altitude => {
  if (altitude > 10000) {
    throw new Error('Ketinggian terlalu tinggi!')
  }
  else if(altitude <0){
    throw new Error('Ketinggian tidak valid')
  }else if(altitude >= 0 && altitude <= 10000){
    return `Pesawat lepas landas menuju ketinggian ${altitude} meter.`
  }
}

const flightSimulation = altitude => {
  try {
    return takeOff(altitude)
  } catch (error) {
    return error.message
  }
}

console.log(flightSimulation(12000))
console.log(flightSimulation(-500));
console.log(flightSimulation(8000));